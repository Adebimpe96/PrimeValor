# Primevalor Consulting — Website

A React + Tailwind CSS site for Primevalor Consulting (HR & workforce advisory),
built with Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy to Vercel, Netlify,
GitHub Pages, or any static host.

## Deploying to Hostinger (since you already have the domain there)

1. Run `npm run build` locally — this creates a `dist/` folder.
2. Log into **hPanel** → go to your domain's **File Manager** (or use FTP with
   the credentials under Hosting → FTP Accounts).
3. Open `public_html/` for your domain and delete any default placeholder
   files (e.g. `default.php`, sample `index.html`).
4. Upload the **contents** of `dist/` (not the folder itself) into
   `public_html/` — that means `index.html`, the `assets/` folder, etc. go
   directly inside `public_html/`.
5. Visit your domain — it should load the site immediately, since DNS is
   already pointed at Hostinger.

Note: this is a static site (no Node server needed to run it), so Hostinger's
regular web hosting is sufficient — you don't need a separate Node.js hosting
plan unless you add server-side features later.

## Before you launch — things to update

1. **Contact form**: Open `src/components/Contact.jsx` and replace
   `FORMSPREE_ENDPOINT` with your real Formspree endpoint. Sign up free at
   https://formspree.io, create a form, and it'll give you a URL like
   `https://formspree.io/f/abc123` to paste in.
2. **Contact details**: Same file — swap in the real email, phone, and office
   address (currently placeholders).
3. **Stats in the hero**: `src/components/Hero.jsx` has placeholder numbers
   (12+ sectors, 500+ placements, 10+ years) — replace with your real figures.
4. **Platform links**: `src/components/PlatformsPreview.jsx` currently shows
   the two upcoming platforms (application tracking + background checks) as
   "Coming soon" cards. Once those are live, turn each card into a link
   (wrap in an `<a href="...">` or swap the "Coming soon" badge for a button).
5. **Client testimonials**: `src/components/Testimonials.jsx` has three
   placeholder quotes — replace with real client feedback once you have it
   (even one or two genuine quotes will read better than three made-up ones).
6. **Logo/wordmark**: currently just styled text ("Primevalor") in the navbar
   and footer — drop in a real logo image if you have one.

## Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    NetworkMotif.jsx   ← the animated node/line graphic in the hero
    About.jsx
    Services.jsx
    PlatformsPreview.jsx
    Testimonials.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
tailwind.config.js       ← brand colors (navy/brass) and fonts live here
```

## Design notes

- **Palette**: deep navy (#0B1B33) with a brass/gold accent (#B68D40) on an
  ivory background — corporate and trustworthy per the brief.
- **Type**: Fraunces (serif display) for headlines, Inter for body text,
  IBM Plex Mono for small labels/eyebrows.
- **Signature element**: an animated network of connected nodes in the hero,
  representing the web of people and opportunity an HR consultancy sits at
  the center of.
- Fully responsive, keyboard-focus visible, and respects
  `prefers-reduced-motion`.
