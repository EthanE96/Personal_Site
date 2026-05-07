import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface RateLimitRecord {
  timestamps: number[];
}

const COOLDOWN_MS = 60_000;
const MAX_PER_DAY = 3;
const WINDOW_MS = 24 * 60 * 60 * 1000;

// In-memory store — resets on cold start, which is acceptable for a personal site
const rateLimitStore = new Map<string, RateLimitRecord>();

function getClientIp(request: HttpRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("client-ip") ??
    "unknown"
  );
}

function checkRateLimit(ip: string): { limited: boolean; retryAfterSeconds?: number; reason?: string } {
  const now = Date.now();
  const record = rateLimitStore.get(ip) ?? { timestamps: [] };

  // Prune entries outside the 24h window
  record.timestamps = record.timestamps.filter((t) => now - t < WINDOW_MS);

  if (record.timestamps.length >= MAX_PER_DAY) {
    return { limited: true, reason: "max_reached" };
  }

  const last = record.timestamps.at(-1);
  if (last !== undefined && now - last < COOLDOWN_MS) {
    const retryAfterSeconds = Math.ceil((COOLDOWN_MS - (now - last)) / 1000);
    return { limited: true, retryAfterSeconds, reason: "cooldown" };
  }

  return { limited: false };
}

function recordSubmission(ip: string): void {
  const record = rateLimitStore.get(ip) ?? { timestamps: [] };
  record.timestamps.push(Date.now());
  rateLimitStore.set(ip, record);
}

export async function emailTrigger(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  const logicAppUrl = process.env.LOGIC_APP_URL;
  if (!logicAppUrl) {
    context.error("LOGIC_APP_URL environment variable is not set");
    return { status: 500, jsonBody: { error: "Server configuration error" } };
  }

  const ip = getClientIp(request);
  const limit = checkRateLimit(ip);
  if (limit.limited) {
    context.log(`Rate limit hit for IP ${ip}: ${limit.reason}`);
    const headers: Record<string, string> = {};
    if (limit.retryAfterSeconds !== undefined) {
      headers["Retry-After"] = String(limit.retryAfterSeconds);
    }
    return {
      status: 429,
      headers,
      jsonBody: { error: limit.reason },
    };
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return { status: 400, jsonBody: { error: "Invalid JSON body" } };
  }

  const { name, email, subject, message } = payload;
  if (!name || !email || !subject || !message) {
    return { status: 400, jsonBody: { error: "Missing required fields: name, email, subject, message" } };
  }

  recordSubmission(ip);
  context.log(`Forwarding contact form submission from ${email} to Logic App`);

  const logicAppResponse = await fetch(logicAppUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, subject, message }),
  });

  if (!logicAppResponse.ok) {
    context.error(`Logic App returned HTTP ${logicAppResponse.status}`);
    return { status: 502, jsonBody: { error: "Failed to deliver message" } };
  }

  return { status: 200, jsonBody: { success: true } };
}

app.http("emailTrigger", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: emailTrigger,
});
