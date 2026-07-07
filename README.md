# SNIX Legal & Support Site

Static site hosted on Cloudflare Pages. No build step required — just deploy the root folder.

## Pages

| File | URL |
|---|---|
| `index.html` | `/` — Hub landing page |
| `privacy.html` | `/privacy` — Privacy Policy |
| `terms.html` | `/terms` — Terms of Service |
| `dmca.html` | `/dmca` — DMCA / Copyright Policy |
| `support.html` | `/support` — Support & FAQ |

## Theme

The site ships with **White** (default) and **Ocean** themes matching the SNIX app palette.  
The toggle is in the top-right of the navigation bar. The user's choice is saved in `localStorage`.

## Deploy on Cloudflare Pages

1. Fork / connect this repo in Cloudflare Pages
2. **Framework preset:** None (static HTML — no build command)
3. **Build output directory:** `/` (repo root)
4. Deploy — done ✅

## Customise

- Update contact emails in each HTML file (`support@snix.app`, `privacy@snix.app`, etc.)
- Replace placeholder dates with real effective dates
- Add your Google Play / App Store links in `index.html` if desired
