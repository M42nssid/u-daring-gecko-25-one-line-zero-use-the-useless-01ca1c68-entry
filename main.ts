import { mkdirSync, writeFileSync } from "node:fs";

// One original line (<=200 chars): a hilariously useless superpower.
const LINE = "I can see through walls \u2014 but only the ones with windows.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
