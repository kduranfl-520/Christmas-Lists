# Christmas Gift Tracker

Single-page, mobile-first gift tracker. No build step.

## Host on GitHub Pages
Repo Settings → Pages → Deploy from branch → `main` / root. Open the URL on your phone and use Share → Add to Home Screen.

## Data
Stored per device in `localStorage` (key `cgt-v1`). To sync across devices, implement `window.CGT_SYNC` in `sync.js` (see comments there).
