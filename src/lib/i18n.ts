import type { Lang, SiteContent } from '@/data/types'
import fr from '@/data/fr'
import en from '@/data/en'

const content: Record<Lang, SiteContent> = { fr, en, es: fr } // ES falls back to FR

export function getContent(lang: Lang): SiteContent {
  return content[lang] ?? fr
}

export function getLangFromPath(pathname: string): Lang {
  if (pathname.startsWith('/en')) return 'en'
  if (pathname.startsWith('/es')) return 'es'
  return 'fr'
}

export const langMeta: Record<Lang, { label: string; href: string; hreflang: string }> = {
  fr: { label: 'FR', href: '/',    hreflang: 'fr' },
  en: { label: 'EN', href: '/en/', hreflang: 'en-GB' },
  es: { label: 'ES', href: '/es/', hreflang: 'es' },
}
