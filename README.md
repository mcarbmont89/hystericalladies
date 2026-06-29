# The Hysterical Ladies — Next.js + Tailwind

Migración del sitio de Hostinger Website Builder a un proyecto Next.js 14 (App Router) listo para desplegar en Vercel.

## Stack

- **Next.js 14** App Router + TypeScript
- **Tailwind CSS 3** con paleta personalizada *playbill* (papel envejecido, tinta, carmín, latón)
- **Fraunces** (display, vía `next/font/google`) + **Inter** (body)
- **lucide-react** para iconografía
- Sin dependencias adicionales — todo nativo.

## Estructura

```
app/
  layout.tsx           # Header + footer compartidos, fuentes, metadata
  page.tsx             # Accueil (home)
  a-propos/page.tsx    # Sinopsis + Notre histoire + Équipe
  a-venir/page.tsx     # Dates de tournée
  apercu/page.tsx      # Galería por lugar/año
  actualites/page.tsx  # Press reviews con estrellas
  contact/page.tsx     # Formulario + datos
  globals.css          # Tokens base + utilidades (.catalog-label, .btn-primary, .quote-card…)
components/
  site-header.tsx      # Banner + nav + language switcher + menú móvil
  site-footer.tsx
  contact-form.tsx     # Client component — mailto fallback
  placeholder-image.tsx
lib/
  content.ts           # Toda la copy, equipo, reviews, dates — una sola fuente de verdad
```

## Despliegue

### Paso 0 — Descargar las imágenes (obligatorio antes del primer deploy)

Las imágenes están en el CDN de Hostinger. Para cortar la dependencia, ejecuta una vez:

```bash
bash scripts/download-assets.sh
```

Descarga ~40 archivos (~15–25 MB) a `public/images/` organizados en `team/`, `gallery/`, `press/`. Es idempotente — si lo vuelves a correr, salta lo que ya está.

**Después de descargar**: abre `public/images/team/charlotte.png`, `marion.png` y `aniqa.png` para verificar que el mapeo de las tres actrices es correcto. En el CMS original solo se llamaban `image-1/2/3`, así que renombra si hace falta.

### Opción A — Pegar en v0
1. Pega cada archivo en su ruta correspondiente dentro de v0
2. v0 instala automáticamente `lucide-react` y configura Tailwind
3. Pulsa **Deploy**

### Opción B — Local + Vercel CLI
```bash
npm install
npm run dev          # http://localhost:3000
vercel               # despliegue de preview
vercel --prod        # producción
```

### Opción C — GitHub + Vercel
1. `git init && git add . && git commit -m "Initial migration"`
2. Push a un repo nuevo en GitHub
3. En Vercel: *Import Project* → seleccionar el repo → **Deploy**

## Siguientes pasos

1. **Formulario**: `components/contact-form.tsx` usa `mailto:` por defecto. Para envío real, crear `app/api/contact/route.ts` con Resend / Formspree / EmailJS y cambiar el handler.
2. **i18n EN/ES**: estructura listas en `lib/content.ts`. Duplicar como `lib/content.en.ts` / `lib/content.es.ts` y crear rutas `/en` y `/es` con `[locale]` segments, o usar `next-intl`.
3. **Donaciones**: la sección "Contribuer" enlaza ahora a `/contact`. Conectar a HelloAsso, Stripe Checkout o similar cuando esté listo.
4. **CDN dependency**: `next.config.mjs` permite `assets.zyrosite.com` para transición gradual. Una vez verificado que todas las imágenes están en `public/`, elimina `remotePatterns` para cerrar la dependencia con Hostinger.

## Editar contenido

Todo el texto, fechas, equipo y reviews vive en `lib/content.ts`. Cambiar ahí y se actualiza en toda la web.

---

Desarrollado con amor por [QuAI Labs](https://quailabs.tech/).
