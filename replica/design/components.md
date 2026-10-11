# Component specs — Hysterical Ladies

From `replica/recon.md` component inventory. Every component listed here
is built before any screen in `/replica-build`. Screens compose these primitives.

---

## NavBar
  variants   default (dark/transparent over hero), scrolled (solid black bg)
  height     72px
  layout     logo/brand left | links center | lang-switcher right
  states     default, mobile-open (hamburger → full-screen overlay)
  tokens     bg transparent → bg, text text, accent on hover/active link, font sm/600 font-sans
  a11y       `<nav>`, skip-to-content link, active page `aria-current="page"`, mobile menu `aria-expanded`
  used on    S01–S08 (all screens)

---

## LanguageSwitcher
  variants   FR | EN | ES
  states     active-lang (accent color, underline), inactive (text-muted), hover (text)
  tokens     text text-muted → text, active color accent, font xs/500
  a11y       `<nav aria-label="language">`, `hreflang` links, active has `aria-current="true"`
  used on    NavBar (all screens)

---

## HeroBanner
  variants   with-show-title, without-title
  layout     full-bleed image (16:9 or cover), title overlay bottom-left or centered
  states     default (image loaded), loading (skeleton bg-surface)
  tokens     bg surface (fallback), text text on overlay, overlay color-overlay
  images     placeholder until real production photos provided
  a11y       `role="img"` with meaningful `aria-label`, decorative images `alt=""`
  used on    S01–S03 (home)

---

## TaglineQuote
  variants   large (hero area), medium (section pull-quote)
  layout     centered or left-aligned, optional attribution line
  states     default
  tokens     font display/800 font-display italic, text text, optional accent color on punctuation/marks
  a11y       `<blockquote>` + `<cite>` for attributed quotes
  used on    S01–S03 (home), S04 (about)

---

## StarRating
  variants   1–5 stars filled
  sizes      sm (review card), lg (hero endorsement)
  states     static display only (no interactive rating needed)
  tokens     color accent (filled stars), color border (empty stars), font xs
  a11y       `aria-label="4 out of 5 stars"`, stars are decorative SVG with hidden text
  used on    S07 (news/reviews)

---

## ReviewCard
  variants   with-rating, without-rating
  layout     quote text | source + date + city | optional star rating
  states     default
  tokens     bg surface, border border, text text, text-muted for source/date, shadow-card
  a11y       `<article>`, `<blockquote>` for quote text, `<cite>` for source
  used on    S07 (news/reviews)

---

## EventCard
  variants   upcoming (with CTA button), past (no CTA, muted style)
  layout     venue name | city + country | dates range | CTA button
  states     upcoming, no-dates ("Stay tuned" empty state), past
  tokens     bg surface-raised, border border, text text, muted for dates, button accent
  a11y       `<article>`, dates in `<time datetime="">`, external ticket link opens in new tab with `aria-label`
  used on    S05 (upcoming)

---

## PhotoGallery
  variants   grouped (by venue + year header), grid (4-col desktop, 2-col tablet, 1-col mobile)
  layout     section heading (venue + year) → responsive image grid
  states     default (images loaded), loading (skeleton placeholders)
  tokens     bg bg, gap space-2, group heading font-display italic text-muted
  images     placeholder until real assets provided; group labels from recon (Essaïon 2024 / White Bear 2024 / Skirts of Fire 2024 / Edmonton 2023 / Paris 2022)
  a11y       `<figure>` + `<figcaption>` per photo, `aria-label` on gallery region, lazy loading
  used on    S06 (sneak peek/aperçu)

---

## TeamMemberBlock
  variants   performer (large, with bio), crew (small, name + role only)
  layout     photo | name | role | bio paragraph (performer variant only)
  states     default
  tokens     bg surface-raised, text text, text-muted for role, font-display italic for name
  images     performer headshots (placeholder until assets provided)
  a11y       `<article>`, heading for name, `<img alt="[Name], [role]">`
  used on    S04 (about)

---

## ContactForm
  fields     Name (text, required), Email (email, required), Message (textarea, required)
  variants   default, submitting (button loading state), success (confirmation message), error (inline error)
  layout     stacked labels + inputs, full-width submit button
  states     idle, submitting, success, error (field-level + form-level)
  tokens     bg surface, border-input for inputs, text text, accent for submit button, danger for errors
  integration static export → external form service (Formspree or Web3Forms); endpoint configured via env var
  a11y       `<form>`, `<label for="">` on every field, `aria-required`, `aria-describedby` for errors, `aria-live` on success/error messages
  used on    S08 (contact)

---

## SocialIconBar
  icons      Instagram, YouTube, Facebook — use Lucide or Phosphor MIT icons
  variants   horizontal row (footer/contact), stacked (mobile)
  states     default, hover (accent color + glow shadow)
  tokens     text text-muted → text on hover, shadow-glow on hover
  a11y       `<a aria-label="Instagram @thecatalogueofsexualanxieties">`, icons are decorative
  used on    S01–S03 home, S08 contact, footer all screens

---

## Button
  variants   primary (accent bg), secondary (border only), ghost (text only)
  sizes      sm 32px height, md 40px, lg 48px
  states     default, hover, active, focus-visible (2px ring accent), disabled (opacity-40), loading (spinner + keep label for SR)
  tokens     primary: bg accent text on-accent radius-sm; secondary: border border-input text text; ghost: text accent
  a11y       `<button>` or `<a role="button">` never a div; loading keeps visible text for screen readers
  used on    S05 (event CTA), S08 (form submit), S01–S03 (hero CTA if present)

---

## Footer
  layout     3-col desktop (address | links | social) → stacked mobile
  content    company name Au Haz Art | address | phone(s) | email | SIRET | dev credit | © year
  states     default
  tokens     bg surface, border border (top separator), text text-muted, font sm
  a11y       `<footer>`, `<address>` for contact block
  used on    all screens

---

## SectionHeading
  variants   centered, left-aligned
  levels     h1 (hero), h2 (section), h3 (subsection)
  tokens     font-display italic, weight 700–900, text text
  used on    all screens
