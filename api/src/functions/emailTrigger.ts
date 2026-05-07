import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function emailTrigger(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  const logicAppUrl = process.env.LOGIC_APP_URL;
  if (!logicAppUrl) {
    context.error("LOGIC_APP_URL environment variable is not set");
    return { status: 500, jsonBody: { error: "Server configuration error" } };
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
