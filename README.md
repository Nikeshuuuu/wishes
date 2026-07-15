# For You 💌 — a customizable romantic birthday site

A single-scroll experience: a wax-sealed letter opens into a handwritten
note, chapters of "reasons," a polaroid wall of your photos, and a
finale with a falling-petals moment.

## How to customize (only one file to touch)

Open **`config.js`** and edit:

- `girlfriendName` / `yourName`
- `letterBody` — the main personal message
- `reasons` — each has a roman numeral, a line of text, and an optional
  `photo` that appears when the card is tapped/hovered
- `gallery` — your photos + captions for the polaroid wall
- `finalePhoto`, `finaleMessage`, `finaleHidden` — the closing section

Drop your own photos into the `/images` folder and point to them by
filename (e.g. `images/yourphoto.jpg`). The demo currently uses the
sample photos and gifs you gave me — swap them out for the real ones.

## Running it

Just open `index.html` in a browser. To host it for free (like the
original repo did with GitHub Pages):

1. Create a new GitHub repo
2. Push these files (`index.html`, `style.css`, `script.js`, `config.js`,
   `/images`)
3. Go to Settings → Pages → se# For You 💌 — a customizable romantic birthday site

A single-scroll experience: a wax-sealed letter opens into a handwritten
note, chapters of "reasons," a polaroid wall of your photos, and a
finale with a falling-petals moment.

## How to customize (only one file to touch)

Open **`config.js`** and edit:

- `girlfriendName` / `yourName`
- `letterBody` — the main personal message
- `reasons` — each has a roman numeral, a line of text, and an optional
  `photo` that appears when the card is tapped/hovered
- `gallery` — your photos + captions for the polaroid wall
- `finalePhoto`, `finaleMessage`, `finaleHidden` — the closing section

Drop your own photos into the `/images` folder and point to them by
filename (e.g. `images/yourphoto.jpg`). The demo currently uses the
sample photos and gifs you gave me — swap them out for the real ones.

## Background music

There's a small "our song" toggle in the top-right corner. To hook up
a track:

1. Add an mp3 file into `/audio` (see the note in that folder for where
   to legally get one — I can't ship a copyrighted song file for you)
2. In `config.js`, set `musicSrc` to the filename, e.g. `"audio/song.mp3"`
3. It tries to start the moment the page loads, and loops continuously
   from there

**A browser limitation worth knowing:** every major browser blocks
autoplaying audio with sound until the visitor has interacted with the
page at least once (a click, a scroll, a keypress) — this is a
deliberate browser policy, not something any website can fully bypass.
The site handles this gracefully: it tries to play immediately, and if
that's blocked, it starts on her very first click/scroll/tap anywhere
on the page (opening the seal counts). So in practice it'll almost
always feel automatic — she just has to have touched the page once,
which she will anyway to read the letter.

If the file is missing, the button just shows a friendly reminder
instead of failing silently.

## Running it

Just open `index.html` in a browser. To host it for free (like the
original repo did with GitHub Pages):

1. Create a new GitHub repo
2. Push these files (`index.html`, `style.css`, `script.js`, `config.js`,
   `/images`)
3. Go to Settings → Pages → set source to the `main` branch
4. Your site will be live at `https://<username>.github.io/<repo-name>`

## Notes

- No external dependencies besides Google Fonts — no GSAP or other
  libraries needed, so it loads fast and works offline once cached.
- Respects `prefers-reduced-motion` for accessibility.
- Fully responsive down to mobile.t source to the `main` branch
4. Your site will be live at `https://<username>.github.io/<repo-name>`

## Notes

- No external dependencies besides Google Fonts — no GSAP or other
  libraries needed, so it loads fast and works offline once cached.
- Respects `prefers-reduced-motion` for accessibility.
- Fully responsive down to mobile.
