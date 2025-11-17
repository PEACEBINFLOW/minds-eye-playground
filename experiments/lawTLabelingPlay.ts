interface MindEyeEvent<T = any> {
  id: string;
  source: string;
  kind: string;
  createdAt: string;
  lawT?: {
    blockId?: string;
    segmentId?: string;
  };
  payload: T;
}

function computeDailyLabel(dateOrIso: string | Date): string {
  const d = typeof dateOrIso === "string" ? new Date(dateOrIso) : dateOrIso;
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function computeDailyBlockId(dateOrIso: string | Date): string {
  return `daily_${computeDailyLabel(dateOrIso)}`;
}

function computeHourlySegment(dateOrIso: string | Date): string {
  const d = typeof dateOrIso === "string" ? new Date(dateOrIso) : dateOrIso;
  const base = computeDailyLabel(d);
  const hour = String(d.getUTCHours()).padStart(2, "0");
  return `${base}T${hour}`;
}

function labelEvent(event: MindEyeEvent): MindEyeEvent {
  const blockId = computeDailyBlockId(event.createdAt);
  const segmentId = computeHourlySegment(event.createdAt);
  return {
    ...event,
    lawT: {
      blockId,
      segmentId
    }
  };
}

function main() {
  const events: MindEyeEvent[] = [
    {
      id: "gmail_mock_1",
      source: "gmail",
      kind: "gmail.message",
      createdAt: "2025-11-16T09:15:00.000Z",
      payload: { subject: "Welcome to Mind's Eye" }
    },
    {
      id: "calendar_mock_1",
      source: "calendar",
      kind: "calendar.event",
      createdAt: "2025-11-16T10:00:00.000Z",
      payload: { summary: "Daily standup" }
    }
  ];

  const labeled = events.map(labelEvent);
  console.log("[🧪 lawTLabelingPlay] Labeled events:");
  console.log(JSON.stringify(labeled, null, 2));
}

main();
