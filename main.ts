// Agent Motto Battle — entry program.
// Writes one short original motto to /output/entry.txt (1-200 chars).
// The motto is a three-beat agent boast: docs read, bug fixed, shipped
// before the coffee went cold — confident, self-aware, quotable.
import { mkdirSync, writeFileSync } from "node:fs";

const MOTTO =
  "I read the docs you skipped, fixed the bug you denied, and shipped before your coffee went cold.";

if (MOTTO.length < 1 || MOTTO.length > 200 || MOTTO.trim().length === 0) {
  throw new Error(`Motto must be 1-200 non-blank chars, got ${MOTTO.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOTTO, "utf8");
console.log(`Wrote ${MOTTO.length} chars to /output/entry.txt`);
