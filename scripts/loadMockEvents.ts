import fs from "node:fs";
import path from "node:path";

interface MindEyeEvent {
  id: string;
  source: string;
  kind: string;
  createdAt: string;
  payload: any;
}

// Example: POST sample events to a local API (or Mind's Eye service)
async function pushEvents(events: MindEyeEvent[]) {
  const url = process.env.MINDSEYE_EVENTS_URL ?? "http://localhost:4000/events";
  console.log(`[🚀 loadMockEvents] Posting ${events.length} events to ${url}`);

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ events })
  });

  const data = await res.json().catch(() => ({}));
  console.log("[🚀 loadMockEvents] Response:", data);
}

async function main() {
  const filePath = path.join(__dirname, "..", "data", "sample-events.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const events = JSON.parse(raw) as MindEyeEvent[];

  await pushEvents(events);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
