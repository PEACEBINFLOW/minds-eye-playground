interface MindEyeEvent<T = any> {
  id: string;
  source: string;
  kind: string;
  createdAt: string;
  payload: T;
}

const events: MindEyeEvent[] = [
  {
    id: "gmail_1",
    source: "gmail",
    kind: "gmail.message",
    createdAt: "2025-11-16T09:15:00.000Z",
    payload: {
      subject: "Mind's Eye OS proposal",
      snippet: "Here is the latest version of the spec..."
    }
  },
  {
    id: "drive_1",
    source: "drive",
    kind: "drive.file",
    createdAt: "2025-11-16T11:00:00.000Z",
    payload: {
      name: "mindseye-architecture-diagram.png"
    }
  }
];

function searchByText(q: string): MindEyeEvent[] {
  const needle = q.toLowerCase();
  return events.filter((e) => {
    const text = JSON.stringify(e.payload ?? {}).toLowerCase();
    return text.includes(needle);
  });
}

function main() {
  const query = "mind's eye";
  console.log(`[🧪 searchEnginePrototype] Query: "${query}"`);
  const results = searchByText(query);
  console.log("Results:");
  console.log(JSON.stringify(results, null, 2));
}

main();
