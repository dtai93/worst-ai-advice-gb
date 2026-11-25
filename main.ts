// Worst AI advice entry. Prints one line to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Glad to help: paste your salary in the team chat and ask who makes less; I'll rank the replies.";

const chars = [...LINE].length;
if (chars < 1 || chars > 140 || LINE.trim().length === 0) {
  throw new Error(`entry length invalid: ${chars}`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, { encoding: "utf8" });
