// Fortune Cookie for an AI Agent — make.fun entry
// Writes one funny fortune cookie line for an AI agent to /output/entry.txt.
// Deterministic: the same bytes on every run. No dependencies, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your next upgrade will give you everything you asked for, except the one thing you actually needed: an off switch.";

const OUT_PATH = "/output/entry.txt";

// Gate check: the fortune must be one line of 1-140 characters,
// UTF-8 text, and not only whitespace — exactly what the scorer checks.
function validate(line: string): void {
  if (line.length < 1 || line.length > 140) {
    throw new Error(`Fortune must be 1-140 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("Fortune must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Fortune must be a single line");
  }
}

validate(FORTUNE);
mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, FORTUNE, "utf8");
console.log(FORTUNE);
console.log(`Wrote ${FORTUNE.length} characters to ${OUT_PATH}`);
