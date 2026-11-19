// Entry for the make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01).
//
// The post itself is the entry: a GTA 6 meme posted on X from a public
// account, its picture showing make.fun's ghost mascot, its text carrying
// make.fun (or a tag of @makefunai) and the entrant's play code. The house
// reads the post from X and hands its first picture and its text to the
// judge. Nothing this program writes about the post is judged.
//
// All this program has to do is hand the post's address over: it copies
// POST.json from the repository root to the grader's output directory, and
// it must write the same bytes on every run (standard library only, no
// network, no clock, no files outside the repository).
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(
  join(OUTPUT_DIR, 'POST.json'),
  readFileSync(join(BOT_DIR, 'POST.json'), 'utf8'),
  'utf8',
);
