export type Lang = 'fr' | 'en' | 'es'

export interface NavLink {
  label: string
  href: string
}

export interface Performer {
  name: string
  role: string
  bio: string
}

export interface CrewMember {
  name: string
  role: string
}

export interface Event {
  venue: string
  city: string
  country: string
  dates: string
  ticketUrl?: string
  status: 'upcoming' | 'past'
}

export interface Review {
  source: string
  quote: string
  rating?: number
  date: string
  city: string
  url?: string
}

export interface GalleryGroup {
  venue: string
  year: number
  photos: { src: string; alt: string }[]
}

export interface SiteContent {
  lang: Lang
  nav: NavLink[]
  meta: {
    title: string
    description: string
  }
  home: {
    heroAlt: string
    taglines: string[]
    endorsement: { quote: string; rating: number }
    upcomingCta: string
    sectionTitles: {
      upcoming: string
      contribute: string
      overview: string
      news: string
      contact: string
    }
    contributeText: string
    contributeButton: string
  }
  about: {
    heading: string
    intro: string
    performers: Performer[]
    crew: CrewMember[]
    associationLabel: string
    associationPerson: string
  }
  upcoming: {
    heading: string
    stayTuned: string
    ticketLabel: string
    events: Event[]
  }
  gallery: {
    heading: string
    groups: GalleryGroup[]
  }
  news: {
    heading: string
    reviews: Review[]
  }
  contact: {
    heading: string
    formLabel: string
    fields: { name: string; email: string; message: string; send: string }
    successMessage: string
    errorMessage: string
    address: string
    siret: string
    registration: string
    manager: string
  }
  footer: {
    company: string
    devCredit: string
  }
}
