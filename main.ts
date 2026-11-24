import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pitch's angle: the annoyance everyone knows is the smoke detector's
// low-battery chirp, which always starts at 3am. Instead of a smarter
// beep, the invention gives the detector manners and a calendar: it books
// its own battery change for lunchtime, like a polite tenant filing a
// maintenance request. The laugh comes from the machine itself behaving
// like a considerate housemate, not from a joke bolted on at the end.
const pitch =
  "A smoke detector that stops chirping for a new battery at 3am and instead books its own replacement for lunchtime, like a polite tenant filing a maintenance request.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), pitch, "utf8");
