# Mind's Eye Playground

The **Mind's Eye Playground** is the experimental sandbox for the
Google-native **Mind's Eye OS** constellation.

This repo exists so you can:

- Prototype new event shapes
- Play with LAW-T time labeling
- Test search & stats logic in isolation
- Mock Google Workspace flows (Gmail, Calendar, Drive, Docs, Meet)
- Run small Node/TypeScript scripts
- Store Kaggle / Colab notebooks

It is **not** production. It's the lab.

---

## Structure

- `notebooks/`
  - Space for Colab/Kaggle-style experiments.
- `data/`
  - `sample-events.json` – mock `MindEyeEvent` data for local tests.
- `experiments/`
  - `mockEvents.ts` – generate synthetic events.
  - `lawTLabelingPlay.ts` – label events with LAW-T-like metadata.
  - `searchEnginePrototype.ts` – toy search over mock events.
- `scripts/`
  - `loadMockEvents.ts` – helper to push mock events to a local service.

---

## Getting Started

```bash
npm install
npm run build
npm run mock     # generate mock events to console
npm run lawt     # test LAW-T labeling over mock events
npm run search   # run simple in-memory search over mock events
