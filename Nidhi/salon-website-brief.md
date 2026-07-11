# Unisex Salon By Nidhi — Website Build Brief

> A single, self-contained brief you can paste into Claude (or Claude Code) to build the site.
> Copy everything below the line into your prompt, attach your real photos, and say "Build this."

---

## 1. Project overview

Build a marketing website for **Unisex Salon By Nidhi**, a luxury beauty & makeup studio in Jaipur, Rajasthan.

**Structure:**
- **Page 1 — One-pager** (`index.html`): all main content in scrollable sections — Home (hero), Services, Testimonial, Contact. The top menu links jump to these sections via anchor scroll.
- **Page 2 — Gallery** (`gallery.html`): a separate page showing a photo grid of the salon's work.

**Tech target:** Static site (HTML + CSS + a little JS). No build tools required, so it deploys to any static host / cloud (Netlify, Vercel, GitHub Pages, Cloudflare Pages, Firebase Hosting, Hostinger, etc.).

---

## 2. Brand & aesthetic

**Vibe:** Luxury, elegant, understated. Think high-end studio, not a busy discount salon.

**Colour palette (Dark & Gold):**
| Role | Hex |
|---|---|
| Background (near-black, warm) | `#0d0b09` |
| Panel / card background | `#100d0a` |
| Primary gold accent | `#c9a24a` |
| Soft gold (hover) | `#e3c876` |
| Body text (cream) | `#ece4d6` |
| Muted text | `#a89e8c` |
| Hairline borders | `rgba(201,162,74,0.16)` |

**Typography (Google Fonts):**
- Display / headings: **Cormorant Garamond** (serif, weight 500, occasional italic for emphasis words).
- Body / nav / buttons: **Jost** (light 300 / regular 400). Uppercase with wide letter-spacing for nav links, labels, and buttons.

**Motifs:** thin gold hairline rules, generous whitespace, uppercase micro-labels above headings (e.g. "WHAT WE OFFER"), subtle fade-up animation on the hero. Avoid gradients-as-decoration, avoid emoji, avoid clutter.

---

## 3. Global elements

**Sticky top navigation** (appears on both pages):
- Left: logo — "Nidhi" in Cormorant Garamond, with "UNISEX SALON" as a small gold uppercase kicker beneath.
- Menu links: **Home · Services · Testimonial · Contact · Gallery**
  - On the one-pager, Home/Services/Testimonial/Contact are anchor links (`#home`, `#services`, `#testimonial`, `#contact`).
  - Gallery links to `gallery.html`.
  - From the gallery page, the four menu links point back to `index.html#home` etc.
- Right: three social icons — **Instagram, Facebook, WhatsApp** — in gold, separated from the menu by a thin divider.
- Background: semi-transparent dark with `backdrop-filter: blur(12px)` and a bottom gold hairline.
- Mobile: collapse the menu into a hamburger that opens a full-screen dark overlay menu.

**Footer** (both pages): centered — salon name in serif + copyright line "© Unisex Salon By Nidhi · Jaipur, Rajasthan".

---

## 4. Page 1 — One-pager sections

### Home / Hero (`#home`)
- Full-height, centered, dark. Subtle diagonal texture + a faint gold radial glow behind the text.
- Micro-label: "BEAUTY & MAKEUP STUDIO · JAIPUR"
- Headline: **"Unisex Salon"** / *"By Nidhi"* (second line italic gold).
- Gold hairline divider.
- Sub-line: "Where every look is crafted with artistry. Bridal glam, precision styling, and skincare — for everyone, in the heart of Jaipur."
- Two buttons: **Book on WhatsApp** (solid gold) and **Our Services** (outline, scrolls to services).
- Fade-up animation on load.

### Services (`#services`)
- Micro-label "WHAT WE OFFER" + heading "Signature Services".
- Grid of 6 cards (responsive: 3 / 2 / 1 columns), joined by hairline gold gridlines:
  1. **Bridal Makeup** — Timeless, camera-ready bridal artistry, soft glam to full traditional.
  2. **Party & HD Makeup** — Event-ready glamour with long-wear HD finishes.
  3. **Hair Styling & Cuts** — Precision cuts, blow-dries, styling for men and women.
  4. **Hair Colour & Treatments** — Global colour, highlights, keratin, treatments.
  5. **Facials & Skincare** — Clean-up, brightening, and anti-ageing facials.
  6. **Nails & Grooming** — Manicure, pedicure, waxing, threading — full service.
- Each card: large gold serif number (01–06), title, one-line description.

### Gallery preview strip
- A 4-across row of image placeholders (swap in real photos).
- "VIEW FULL GALLERY →" link to `gallery.html`.

### Testimonial (`#testimonial`)
- Micro-label "KIND WORDS" + heading "Client Love".
- 3 quote cards (responsive) with a large gold serif quote mark, italic serif quote, and an uppercase gold client name. Sample quotes:
  - "Nidhi did my bridal makeup and I felt absolutely stunning. It lasted the entire day and every photo came out perfect." — Priya S.
  - "The best unisex salon in Jaipur. Friendly team, spotless studio, and my haircut has never looked this good." — Rahul M.
  - "I get my facials done here every month. My skin has never been better." — Anjali T.

### Contact (`#contact`)
- Two columns: info (left) + Google Map embed (right).
- **Address:** 34-A, Raghu Vihar Vistar, Near VT Road Chauraha, Patrkar Road, Jaipur, Rajasthan 302020
- **Phone:** 098871 81819 (clickable `tel:+919887181819`)
- **Hours:** Mon – Sun · 10:00 AM – 8:00 PM
- **Book on WhatsApp** button.
- Social icons row (Instagram, Facebook, WhatsApp).
- Map: embed Google Maps iframe for the address above.

---

## 5. Page 2 — Gallery (`gallery.html`)

- Same nav + footer.
- Header: "OUR WORK" kicker + "The Gallery" heading + short intro line.
- **Masonry photo grid** (CSS columns, 4 → 2 → 1 responsive), varied image heights, thin gold border + subtle rounded corners on each tile.
- Suggested categories to shoot/collect: bridal looks, hair styling, party makeup, hair colour, facials/skincare, nail art, grooming, before/after, studio interior, team at work.
- Optional: click a photo to open a lightbox.
- Closing CTA: "Ready for your transformation?" + Book on WhatsApp button.

---

## 6. Social & booking links

Replace the placeholders with the real accounts before launch:
- **WhatsApp** (booking): `https://wa.me/919887181819?text=Hi%20Nidhi%2C%20I'd%20like%20to%20book%20an%20appointment`
- **Instagram:** `https://instagram.com/YOUR_HANDLE`
- **Facebook:** `https://facebook.com/YOUR_PAGE`
- **Phone:** `tel:+919887181819`

All social icons should be simple line/solid glyphs in gold, `hover` → soft gold.

---

## 7. Images

The mockup uses striped placeholders. Replace with real photos:
- 1 hero background (optional — a dark, moody studio or model shot works best).
- 4 gallery-preview images on the one-pager.
- 10–15 gallery photos on the gallery page.
- Optimise all images (WebP, ~1600px max width) for fast loading.

---

## 8. Technical requirements

- **Responsive**: looks great on mobile, tablet, desktop. Mobile hit targets ≥ 44px.
- **Smooth scroll** for anchor links; account for the sticky header offset (`scroll-margin-top` on sections).
- **Accessibility**: alt text on all images, `aria-label` on icon links, sufficient contrast.
- **SEO**: descriptive `<title>` and meta description, Open Graph tags, local-business schema (JSON-LD) with the salon's name, address, phone.
- **Performance**: minimal JS, lazy-load gallery images.
- **Favicon**: simple gold "N" monogram on dark.
- Keep it a plain static site (no framework needed) so it deploys anywhere.

---

## 9. Deliverables

```
/
├── index.html        (one-pager: Home, Services, Testimonial, Contact)
├── gallery.html      (gallery grid)
├── css/styles.css
├── js/main.js        (mobile menu, smooth scroll, lightbox)
└── images/           (real photos)
```

---

*Prepared as a starting brief. Adjust services, hours, quotes, and social handles to match the salon's real details before going live.*
