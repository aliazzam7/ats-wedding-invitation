# Ali & Rawan — Wedding Invitation

## Shu t'ghayyar (What changed)

- **Names**: Karim & Layla → **Ali & Rawan**, everywhere (`src/data/weddingData.js`).
- **New color palette** — "Amber Dusk": deep wine (`#5C1B2E`), antique brass gold (`#B8925A`), and warm cream/parchment, instead of the plain champagne/gold. Change any of it in `src/index.css` under `:root`.
- **New typography** — Fraunces (display) + Cormorant Garamond (script) + Jost (body), imported at the top of `src/index.css`.
- **Hero section rebuilt**: full portrait photo with a gold arch frame, a soft gradient so the names read clearly over the image, and a proper caption block — much closer to a real invitation.
- **Letter-by-letter "hand-written" animation** (`src/components/AnimatedText/AnimatedText.jsx`): titles and the verse translation animate in, letter by letter / word by word, as you scroll to them — used in the Hero names, the verse section, Countdown, RSVP, Location, and the Final section.
- **Real social icons** instead of emoji — `src/components/Icons/Icons.jsx` has clean line-style Instagram, WhatsApp, TikTok, Website, map-pin, calendar and clock icons, used in the Footer and Details cards.
- **Hover micro-interactions everywhere**: buttons fill with color and lift on hover, cards lift with a soft shadow, images ease into a subtle zoom, the footer's social links slide and reveal an arrow, the music button scales.
- **Images** are placeholder Unsplash photography so the layout looks finished immediately — swap them for the couple's real photos in `src/data/weddingData.js` (`hero.image`, `event.venueImage`, `gallery.finalBg`). Keep hero at roughly a 3:4 crop and the other two as wide landscape crops.

## Kif bt-run el mashroo3 (How to run it)

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Wein bidak t'ghayyer shi (Where to change things)

| What | File |
|---|---|
| Names, date, venue, WhatsApp number, social links, photos | `src/data/weddingData.js` |
| Colors, fonts, spacing | `src/index.css` (top `:root` block) |
| Any section's text/markup | `src/components/<Section>/<Section>.jsx` |
| Any section's look | `src/components/<Section>/<Section>.css` |
