// Local stand-in for the form-to-email service, for testing the contact form
// without sending real mail. Run: node scripts/test-form-server.mjs
// Submissions are printed here and appended to scripts/test-form-inbox.log.
import { createServer } from "node:http";
import { appendFile } from "node:fs/promises";

const PORT = 8787;
const LOG = new URL("./test-form-inbox.log", import.meta.url);

createServer(async (req, res) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
  if (req.method === "OPTIONS") return res.writeHead(204, cors).end();
  if (req.method !== "POST") return res.writeHead(405, cors).end();

  let body = "";
  for await (const chunk of req) body += chunk;

  // multipart/form-data from fetch(FormData): pull out name="x"\r\n\r\nvalue
  const fields = {};
  for (const m of body.matchAll(/name="([^"]+)"\r?\n\r?\n([\s\S]*?)\r?\n--/g)) {
    fields[m[1]] = m[2];
  }

  const entry = { at: new Date().toISOString(), fields };
  console.log("\n--- form submission ---");
  console.log(JSON.stringify(entry, null, 2));
  await appendFile(LOG, JSON.stringify(entry) + "\n");

  res.writeHead(200, { ...cors, "Content-Type": "application/json" });
  res.end(JSON.stringify({ ok: true }));
}).listen(PORT, () => console.log(`Test form receiver on http://localhost:${PORT}/test-form`));
