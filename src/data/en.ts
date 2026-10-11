import type { SiteContent } from './types'

const en: SiteContent = {
  lang: 'en',
  nav: [
    { label: 'Home',      href: '/en' },
    { label: 'About',     href: '/en/about' },
    { label: 'Upcoming',  href: '/en/upcoming' },
    { label: 'Overview',  href: '/en/overview' },
    { label: 'News',      href: '/en/news' },
    { label: 'Contact',   href: '/en/contact' },
  ],
  meta: {
    title: 'The Hysterical Ladies — The Catalogue of Sexual Anxieties',
    description: 'A musical cabaret exploring femininity, sexuality and intimacy through song and storytelling. By Charlotte Szabo, Marion Poli and Aniqa Charania.',
  },
  home: {
    heroAlt: 'The Catalogue of Sexual Anxieties — show illustration',
    taglines: [
      'If the Andrews Sisters sang about genital warts and masturbation',
      'A strikingly sexy trio reveal the hidden, unspoken secrets of femininity',
      'Distilling true stories, historical facts, wrapped up in lush harmonies',
    ],
    endorsement: {
      quote: 'A show as surprising as unexpected pleasure',
      rating: 5,
    },
    upcomingCta: 'See dates',
    sectionTitles: {
      upcoming:   'Upcoming shows',
      contribute: 'Support the show',
      overview:   'Overview',
      news:       'News & Press',
      contact:    'Get in touch',
    },
    contributeText: 'Love what we do? Help us keep touring. Every contribution lets us bring the show to new venues, new cities, new audiences.',
    contributeButton: 'Donate',
  },
  about: {
    heading: 'About',
    intro: 'It started with a question asked between friends: "Am I sexually normal?" Despite very different cultural and religious backgrounds, Charlotte, Marion and Aniqa found they shared the same anxieties. They decided to put them on stage — to laugh at them, and to move beyond them.',
    performers: [
      {
        name: 'Charlotte Szabo',
        role: 'Writer & performer',
        bio: 'Charlotte is an actress and writer. She developed The Catalogue of Sexual Anxieties to explore what femininity conceals — and what it reveals.',
      },
      {
        name: 'Marion Poli',
        role: 'Writer & performer',
        bio: 'Marion is a singer and actress. Her voice carries the show\'s harmonies as sharply as her most cutting lines.',
      },
      {
        name: 'Aniqa Charania',
        role: 'Writer & performer',
        bio: 'Aniqa is an actress and writer. She brings a singular perspective on desire, the body and identity.',
      },
    ],
    crew: [
      { name: 'Patrice Peyrieras',  role: 'Composer' },
      { name: 'Inès Amoura',        role: 'Director' },
      { name: 'Mallory Cheminet',   role: 'Choreographer' },
      { name: 'Jessica Rock',       role: 'Pianist' },
      { name: 'YeoHyeon Jung',      role: 'Stage Manager' },
      { name: 'Anthony Nyro',       role: 'Production Assistant' },
    ],
    associationLabel: 'Production',
    associationPerson: 'Clémentine Marcès — Au Haz Art',
  },
  upcoming: {
    heading: 'Upcoming shows',
    stayTuned: 'Stay tuned — more dates coming soon.',
    ticketLabel: 'Get tickets',
    events: [
      {
        venue:     'Essaïon Théâtre',
        city:      'Paris',
        country:   'France',
        dates:     '7–11 · 14–18 · 21–25 January 2026',
        ticketUrl: 'https://essaion-theatre.com/spectacle/the-catalogue-of-sexual-anxieties/',
        status:    'upcoming',
      },
    ],
  },
  gallery: {
    heading: 'Overview',
    groups: [
      {
        venue: 'Essaïon Théâtre — Paris',
        year: 2024,
        photos: [
          { src: '/images/gallery/essaion-2024-01.jpg', alt: 'The trio performing at Essaïon Théâtre, Paris 2024' },
          { src: '/images/gallery/essaion-2024-02.jpg', alt: 'Singing moment at Essaïon Théâtre, Paris 2024' },
          { src: '/images/gallery/essaion-2024-03.jpg', alt: 'Microphone performance, Essaïon Théâtre 2024' },
          { src: '/images/gallery/essaion-2024-04.jpg', alt: 'Final tableau, Essaïon Théâtre 2024' },
        ],
      },
      {
        venue: 'White Bear Theatre — London',
        year: 2024,
        photos: [
          { src: '/images/gallery/whitebear-2024-01.jpg', alt: 'On stage at White Bear Theatre, London 2024' },
          { src: '/images/gallery/whitebear-2024-02.jpg', alt: 'Trio performing, White Bear Theatre 2024' },
          { src: '/images/gallery/whitebear-2024-03.jpg', alt: 'Musical performance, White Bear Theatre 2024' },
        ],
      },
      {
        venue: 'Skirts of Fire Festival',
        year: 2024,
        photos: [
          { src: '/images/gallery/skirts-2024-01.jpg', alt: 'Skirts of Fire Festival 2024 — performance' },
          { src: '/images/gallery/skirts-2024-02.jpg', alt: 'Skirts of Fire Festival 2024 — group scene' },
        ],
      },
      {
        venue: 'Edmonton Fringe Festival',
        year: 2023,
        photos: [
          { src: '/images/gallery/edmonton-2023-01.jpg', alt: 'Edmonton Fringe Festival 2023' },
          { src: '/images/gallery/edmonton-2023-02.jpg', alt: 'Performance in Edmonton 2023' },
        ],
      },
    ],
  },
  news: {
    heading: 'News & Press',
    reviews: [
      {
        source: 'Everything Theatre',
        quote:  'A show as surprising as unexpected pleasure, treated with tact and intelligence.',
        rating: 4,
        date:   'September 2024',
        city:   'London',
      },
      {
        source: 'There Ought To Be Clowns',
        quote:  'Nothing is off-limits — the direction strikes exactly the right balance between authenticity and theatricality.',
        rating: 4,
        date:   'September 2024',
        city:   'London',
      },
      {
        source: 'Beyond the Curtain',
        quote:  'An unforgettable experience that tackles taboo subjects with wit and finesse.',
        rating: 5,
        date:   'September 2024',
        city:   'London',
      },
      {
        source: 'London Pub Theatre',
        quote:  'Hilarious and stimulating — like a high-energy female comedy panel show.',
        rating: 4,
        date:   'September 2024',
        city:   'London',
      },
      {
        source: 'BilletRéduc',
        quote:  'A daring, spiritual exploration of female sexuality. Impossible not to laugh.',
        date:   'October 2024',
        city:   'Paris',
      },
      {
        source: '12thnight',
        quote:  'Let\'s play "Who\'s the deviant?" — and everyone wins.',
        rating: 4,
        date:   'August 2023',
        city:   'Edmonton',
      },
      {
        source: 'Info Edmonton',
        quote:  'If you\'ve ever wondered how women navigate their sexuality, don\'t miss this show.',
        date:   'August 2023',
        city:   'Edmonton',
      },
    ],
  },
  contact: {
    heading: 'Get in touch',
    formLabel: 'Questions about our tour or booking enquiries',
    fields: {
      name:    'Name',
      email:   'Email',
      message: 'Message',
      send:    'Send message',
    },
    successMessage: 'Message sent — we\'ll get back to you as soon as possible.',
    errorMessage:   'Something went wrong. Try again or write to us at manager@hystericalladies.net.',
    address:      '29 ST3 Tour Cortina, 41 Rue du Disque, 75013 Paris',
    siret:        'SIRET 82398276400024',
    registration: 'PLATESV-D-2024-005680',
    manager:      'Clémentine Marcès',
  },
  footer: {
    company:   'Au Haz Art',
    devCredit: 'Site by QuaiLabs',
  },
}

export default en
