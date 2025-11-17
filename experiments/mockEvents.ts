import fs from "node:fs";
import path from "node:path";

interface MindEyeEvent {
  id: string;
  source: string;
  kind: string;
  createdAt: string;
  payload: any;
}

function loadSampleEvents(): MindEyeEvent[] {
  const filePath = path.join(__dirname, "..", "data", "sample-events.json");
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function main() {
  const events = loadSampleEvents();
  console.log("[🧪 mockEvents] Loaded sample events:");
  console.log(JSON.stringify(events, null, 2));
}

main();
