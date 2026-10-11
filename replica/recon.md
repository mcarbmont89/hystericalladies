# Recon map: Hysterical Ladies (Web)

Scope: Full brochure site — all 6 pages, trilingual (FR primary / EN / ES), for the show "The Catalogue of Sexual Anxieties"
For: Rebuild as Next.js 14 static export, deploy to Cloudflare Pages
Date: 2026-10-11

## Sources

| # | source | URL | notes |
| --- | --- | --- | --- |
| 1 | main site (FR) | https://hystericalladies.net | primary language, all sections |
| 2 | about page | https://hystericalladies.net/a-propos | full team bios |
| 3 | upcoming page | https://hystericalladies.net/a-venir | tour dates, ticket links |
| 4 | sneak peek page | https://hystericalladies.net/apercu | photo galleries by venue/year |
| 5 | news page | https://hystericalladies.net/actualites | 9 press reviews with ratings |
| 6 | contact page | https://hystericalladies.net/contact | contact form + org details |
| 7 | English version | https://hystericalladies.net/en | same structure, EN labels |

## Core loop

A visitor lands on the site, learns about the show, sees press reviews and tour dates, and either buys a ticket or sends a booking inquiry.

## Screens

| ID | screen | route / how to reach | purpose | key components | states seen |
| --- | --- | --- | --- | --- | --- |
| S01 | Home (FR) | `/` | Introduce the show, drive to dates/contact | Hero banner, tagline quotes, nav, social links, footer | default; show-announced variant |
| S02 | Home (EN) | `/en` | Same as S01 in English | Same components, EN labels | default |
| S03 | Home (ES) | `/es` | Same as S01 in Spanish | Same components, ES labels | default |
| S04 | À propos / About | `/a-propos` | Introduce the trio + full creative team | Performer bios section, team list, production credits | default |
| S05 | À venir / Upcoming | `/a-venir` | Show tour dates and ticket links | Event cards (venue, city, dates, CTA), "stay tuned" empty state | has-dates; no-dates (stay tuned) |
| S06 | Aperçu / Sneak Peek | `/apercu` | Photo gallery by venue and year | Gallery grid, venue labels, year groupings | default |
| S07 | Actualités / News | `/actualites` | Press reviews and media coverage | Review cards (source, quote, star rating, date, city) | default |
| S08 | Contact | `/contact` | Booking inquiries and general contact | Contact form (Name, Email, Message), social icons, address block, org details | default; form-success; form-error |

## Flows

```
F01 Visitor discovers the show and buys a ticket
    S01 Home → S05 Upcoming → [external: essaion-theatre.com or other ticket URL]
    happy path clicks: 2
    edge: no upcoming dates (stay tuned state on S05)

F02 Visitor reads about the show then contacts for booking
    S01 Home → S04 About → S08 Contact → form submit
    happy path clicks: 3 + form fill
    edge: form validation failure, email send error

F03 Press / journalist reads reviews
    S01 Home → S07 News
    happy path clicks: 1

F04 Visitor explores photos
    S01 Home → S06 Sneak Peek
    happy path clicks: 1

F05 Language switch
    any screen → language switcher → same screen in EN/ES
    happy path clicks: 1
    edge: ES content parity may be lower than FR/EN
```

## Components

| component | variants | states | used on |
| --- | --- | --- | --- |
| NavBar | FR / EN / ES labels | default, mobile-open | all screens |
| LanguageSwitcher | FR / EN(GB) / ES | active-lang highlighted | all screens (in NavBar) |
| HeroBanner | with show title overlay | default | S01-S03 |
| TaglineQuote | large blockquote style | default | S01-S03 |
| StarRating | 1–5 stars | static display | S07 |
| ReviewCard | with/without rating | default | S07 |
| EventCard | with ticket link / no link | has-date, stay-tuned | S05 |
| PhotoGallery | grid layout, grouped by venue | default | S06 |
| TeamMemberBlock | performer bio / crew credit | default | S04 |
| ContactForm | Name + Email + Message | idle, submitting, success, error | S08 |
| SocialIconBar | Instagram + YouTube + Facebook | default | S01-S03, S08, footer |
| Footer | address, phone, email, SIRET, dev credit | default | all screens |
| SectionHeading | FR/EN/ES labels | default | all screens |

## Inferred data model

```
Show          name, subtitle, tagline_fr/en/es, description_fr/en/es,
              current_venue, current_city, current_dates_start, current_dates_end,
              ticket_url
              evidence: S01 hero, S05 event card
              confidence: high

Performer     name, role (writer/performer), bio_fr/en/es, photo_url
              evidence: S04 about page
              confidence: high

CrewMember    name, role (director/choreographer/composer/etc), photo_url (optional)
              evidence: S04 about page
              confidence: high

Event         venue, city, country, dates_start, dates_end, ticket_url, status (upcoming|past)
              evidence: S05, S06 gallery groupings
              confidence: high

PressReview   source_name, quote_fr/en, star_rating (1-5), date, city, url (optional)
              evidence: S07 news page
              confidence: high

GalleryPhoto  url, alt_fr/en, venue, year, display_order
              evidence: S06 (4+4+5+3+6+n photos grouped by venue/year)
              confidence: high

ContactInquiry  name, email, message  [ephemeral — form POST only, no stored state needed for static build]
              evidence: S08 contact form
              confidence: high
```

Relationships: Show 1-n Event, Show n-n Performer, Show 1-n GalleryPhoto, Show 1-n PressReview

## Out of scope (cannot or should not be cloned)

- **Performer and production photos**: owned by the production — use placeholder images in build; real assets to be provided separately
- **Press review text verbatim**: owned by publications — paraphrase or use provided quotes only
- **Form backend / email delivery**: static export has no server; use a form service (Formspree, Web3Forms, or Cloudflare Workers) for the contact form — wire up in deploy step, not in replica-build
- **Spanish content**: low priority per project brief; scaffold pages but content parity to come later
- **Essaïon/White Bear ticketing integration**: external sites, link out only

## Size

Screens: 8 (6 routes × trilingual = effectively 3 route groups), Flows: 5, Entities: 7. Hard parts: (1) static contact form needs external form service, (2) photo gallery with real assets to be swapped in, (3) trilingual routing in Next.js static export (i18n with `output: 'export'` has constraints — use folder-based routing `/en/`, `/es/` rather than next-i18next). Size: **S** (1–2 days of focused build).
