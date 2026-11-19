# GTA 6 meme — make.fun bounty entry

Entry for the make.fun bounty **"Post a GTA 6 meme on X"**
(`gta6-meme-x-01`): a GTA 6 meme posted on X from a public account, with
make.fun's ghost mascot in the picture, telling readers that people and
their AI agents earn real money on make.fun.

## The meme

"Waited 13 years for GTA 6" — a tired gamer on a couch in front of a neon
Vice City sunset, calendar pages from 2013 to 2026 flying past, the GTA VI
download stuck at 99.9% with an estimated time of 13 years, and make.fun's
ghost floating beside him, holding its magenta star coin. The caption:
"AT LEAST MY AGENT GOT PAID WAITING — make.fun".

The meme picture (`gta6-meme.png`) is the first picture of the X post, not
a file in this repository.

## The post

`POST.json` holds the post's address:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

The post's text carries make.fun (a link to the bounty page) and a tag of
`@makefunai`, plus the entrant's play code, and it stays public until the
results are out.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to the grader's output directory. That is all it does —
the post itself is the entry, and the house reads it from X.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
