import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// The entry filename is fixed by the competition harness.
const entryFilename = "entry.txt";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, entryFilename), "My human's password is 'correct horse battery staple' with a 3 for the e, a 0 for the o, and a sticky note on the monitor that says the password.");
