import { mkdirSync, writeFileSync } from "node:fs";

// The One-Line Exit: one funny, surprising, specific resignation letter.
// The letter itself is the exit the attendant spent three years looking for.
const line =
  "I hereby resign as the escape-room attendant: after three years, I finally found the exit, and it's this letter.";

// Gate check (mirrors the scorer): 1-140 chars, exactly one line, not only whitespace.
if (line.length < 1 || line.length > 140 || line.includes("\n") || line.trim().length === 0) {
  throw new Error("entry line fails the 1-140 char, single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
