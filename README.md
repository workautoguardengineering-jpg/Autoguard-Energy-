# Auto Guard Energy — Landing Page (Bold Navy)

A static, zero-build landing page (plain HTML/CSS/JS) ready to deploy on Vercel.

## Files
- `index.html` — page structure and copy
- `styles.css` — design system: dark navy throughout, antique gold + bottle green accents, Libre Caslon Display + IBM Plex Sans/Mono. All tokens are CSS variables at the top of the file.
- `script.js` — renders the Services and Industries cards from data arrays, and powers the click-to-expand industry panel
- `assets/logo.png` — logo extracted from the company profile PDF, background removed, wordmark recolored to cream so it reads on the dark nav/footer
- `vercel.json` — static deployment config

## Push this exact structure to GitHub
```
your-repo/
├── index.html
├── styles.css
├── script.js
├── vercel.json
├── README.md
└── assets/
    └── logo.png
```
Keep `index.html` and `assets/` at the repo root — not nested inside another folder — so the relative asset paths resolve correctly.

## Deploy to Vercel
**Option A — CLI**
```bash
npm i -g vercel
cd this-folder
vercel
```
No build command needed — it's a static site.

**Option B — GitHub**
1. Push the folder above to a new GitHub repo.
2. In Vercel: "Add New Project" → import the repo.
3. Framework preset: "Other" — leave build command empty, output directory `.`.
4. Deploy.

## Things to finish before launch
- **Images**: the Industries panel currently shows placeholder tiles for each part category. Once real photos are ready, extend the `industries` array in `script.js` with an `images` field and I can wire it up.
- **Contact form**: `script.js` currently just shows a confirmation message on submit — no data is sent anywhere. Wire it to a form backend (e.g. Formspree, Basin) or a Vercel serverless function (`/api/contact`).
- **Real contact details**: phone, email, and address in `index.html` are placeholders — search for `+260 XXX XXX XXX` and update.
- **Map**: the embedded Google Map centers on "Lusaka, Zambia" generically — replace with your exact office address.
- **Partners section**: placeholder logo slots — swap in real OEM/partner logos once agreements are in place.
- **Logo**: if you ever need the logo on a *light* background, the current cream wordmark will be low-contrast there — I can generate a navy-text version for light sections on request.
