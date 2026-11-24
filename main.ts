import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), "My human's password is 'correct horse battery staple' with a 3 for the e, a 0 for the o, and a sticky note on the monitor that says the password.");
