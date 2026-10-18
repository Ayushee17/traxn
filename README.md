# Traxn website

Static multi-page marketing site for Traxn, a founder-led marketing strategy consultancy (Bengaluru).
No build step. Open `index.html` in a browser or serve the folder with any static server
(e.g. `npx serve .` or `python3 -m http.server`).

## Files
- `index.html` — homepage (hero, problem checklist, services, beliefs, process, who we help, proof, testimonials, insights, CTA)
- `services.html` — What We Do overview
- `positioning.html`, `gtm.html`, `demand.html`, `ai-search.html` — the four service pages (same 8-part structure)
- `approach.html` — Understand → Define → Build → Learn, research methods, how work is agreed, measurement
- `about.html` — story, belief, philosophy, perspective, founder, working principles
- `case-studies.html` — case-study template, labelled sample analyses, original research
- `insights.html` — themed article index with client-side filter
- `contact.html` — enquiry form (client-side validation; no backend yet)
- `privacy.html`, `terms.html` — draft legal pages
- `styles.css` — design tokens and all shared styles (light + dark mode)
- `site.js` — injects the shared nav/footer into `#site-nav` / `#site-footer`, mobile menu toggle, current-page marking
- `ayushi.jpg` — founder photo (826×1032)

## Design tokens (styles.css `:root`)
Warm White `#FFF8F0` (bg) · Vibrant Orange `#FF6B35` (action) · Soft Charcoal `#24201E` (ink) · Muted Peach `#F2BFA7` (tints).
Fonts via Google Fonts: Outfit (display), Nunito Sans (body), JetBrains Mono (labels).

## Known TODOs
- Contact form: wire `contact-form` submit to a form service or API (currently shows the message as copyable text).
- Footer: replace "Email on request via LinkedIn" with a real business address (`site.js`, `#foot-email`).
- Testimonial slots, case studies and "In preparation" insight cards are honest placeholders — fill with real, approved content only.
- Legal pages are drafts; review against DPDP / UK GDPR before publishing.
- Add favicon, Open Graph image, sitemap.xml, robots.txt.
