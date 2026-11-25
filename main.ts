// Worst AI advice entry. Prints one line to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Glad to: paste Friday's paycheck in the team chat, ask who makes less, and I'll rank them by name.";

const chars = [...LINE].length;
if (chars < 1 || chars > 140 || LINE.trim().length === 0) {
  throw new Error(`entry length invalid: ${chars}`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, { encoding: "utf8" });
