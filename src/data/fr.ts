import type { SiteContent } from './types'

const fr: SiteContent = {
  lang: 'fr',
  nav: [
    { label: 'Accueil',    href: '/' },
    { label: 'À propos',   href: '/a-propos' },
    { label: 'À venir',    href: '/a-venir' },
    { label: 'Aperçu',     href: '/apercu' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Contact',    href: '/contact' },
  ],
  meta: {
    title: 'The Hysterical Ladies — Le Catalogue des Angoisses Sexuelles',
    description: "Un spectacle de cabaret musical qui explore la féminité, la sexualité et l'intimité à travers chansons et récits. Par Charlotte Szabo, Marion Poli et Aniqa Charania.",
  },
  home: {
    heroAlt: 'Le Catalogue des Angoisses Sexuelles — illustration du spectacle',
    taglines: [
      'Si les Andrews Sisters chantaient sur les verrues génitales et la masturbation',
      "Un trio séduisant dévoile les secrets cachés et inavoués de la féminité",
      "Un mélange de récits authentiques, de faits historiques, enveloppés dans les harmonies",
    ],
    endorsement: {
      quote: "Un spectacle aussi audacieux qu'inattendu",
      rating: 5,
    },
    upcomingCta: 'Voir les dates',
    sectionTitles: {
      upcoming:   'Prochaines dates',
      contribute: 'Soutenir le spectacle',
      overview:   'Aperçu',
      news:       'Actualités & Presse',
      contact:    'Nous contacter',
    },
    contributeText: "Vous aimez ce que vous voyez ? Aidez-nous à continuer à tourner. Chaque contribution nous permet de porter ce spectacle dans de nouvelles salles, dans de nouvelles villes.",
    contributeButton: 'Faire un don',
  },
  about: {
    heading: 'À propos',
    intro: "Tout a commencé par une question posée entre amies : « Suis-je sexuellement normale ? » Malgré des origines culturelles et religieuses très différentes, Charlotte, Marion et Aniqa ont découvert des angoisses communes. Elles ont décidé de les mettre en scène — pour en rire, et pour les dépasser.",
    performers: [
      {
        name: 'Charlotte Szabo',
        role: 'Autrice & interprète',
        bio: "Charlotte est comédienne et autrice. Elle développe Le Catalogue des Angoisses Sexuelles pour explorer ce que la féminité cache et ce qu'elle révèle.",
      },
      {
        name: 'Marion Poli',
        role: 'Autrice & interprète',
        bio: 'Marion est chanteuse et comédienne. Sa voix porte les harmonies du spectacle autant que ses répliques les plus acérées.',
      },
      {
        name: 'Aniqa Charania',
        role: 'Autrice & interprète',
        bio: "Aniqa est actrice et autrice. Elle apporte au trio un regard singulier sur le désir, le corps et l'identité.",
      },
    ],
    crew: [
      { name: 'Patrice Peyrieras',  role: 'Compositeur' },
      { name: 'Inès Amoura',        role: 'Metteure en scène' },
      { name: 'Mallory Cheminet',   role: 'Chorégraphe' },
      { name: 'Jessica Rock',       role: 'Pianiste' },
      { name: 'YeoHyeon Jung',      role: 'Régisseure de scène' },
      { name: 'Anthony Nyro',       role: 'Assistant de production' },
    ],
    associationLabel: 'Production',
    associationPerson: 'Clémentine Marcès — Au Haz Art',
  },
  upcoming: {
    heading: 'À venir',
    stayTuned: 'Restez connectés — de nouvelles dates arrivent bientôt.',
    ticketLabel: 'Réserver',
    events: [
      {
        venue:     'Essaïon Théâtre',
        city:      'Paris',
        country:   'France',
        dates:     '7–11 · 14–18 · 21–25 janvier 2026',
        ticketUrl: 'https://essaion-theatre.com/spectacle/the-catalogue-of-sexual-anxieties/',
        status:    'upcoming',
      },
    ],
  },
  gallery: {
    heading: 'Aperçu',
    groups: [
      {
        venue: 'Essaïon Théâtre — Paris',
        year: 2024,
        photos: [
          { src: '/images/gallery/essaion-2024-01.jpg', alt: "Le trio en scène à l'Essaïon Théâtre, Paris 2024" },
          { src: '/images/gallery/essaion-2024-02.jpg', alt: "Moment de chant à l'Essaïon Théâtre, Paris 2024" },
          { src: '/images/gallery/essaion-2024-03.jpg', alt: 'Performance au micro, Essaïon Théâtre 2024' },
          { src: '/images/gallery/essaion-2024-04.jpg', alt: 'Tableau final, Essaïon Théâtre 2024' },
        ],
      },
      {
        venue: 'White Bear Theatre — Londres',
        year: 2024,
        photos: [
          { src: '/images/gallery/whitebear-2024-01.jpg', alt: 'Scène au White Bear Theatre, Londres 2024' },
          { src: '/images/gallery/whitebear-2024-02.jpg', alt: 'Trio en représentation, White Bear Theatre 2024' },
          { src: '/images/gallery/whitebear-2024-03.jpg', alt: 'Interprétation musicale, White Bear Theatre 2024' },
        ],
      },
      {
        venue: 'Skirts of Fire Festival',
        year: 2024,
        photos: [
          { src: '/images/gallery/skirts-2024-01.jpg', alt: 'Festival Skirts of Fire 2024 — performance' },
          { src: '/images/gallery/skirts-2024-02.jpg', alt: 'Festival Skirts of Fire 2024 — scène de groupe' },
        ],
      },
      {
        venue: 'Edmonton Fringe Festival',
        year: 2023,
        photos: [
          { src: '/images/gallery/edmonton-2023-01.jpg', alt: 'Edmonton Fringe Festival 2023' },
          { src: '/images/gallery/edmonton-2023-02.jpg', alt: 'Représentation à Edmonton 2023' },
        ],
      },
    ],
  },
  news: {
    heading: 'Actualités & Presse',
    reviews: [
      {
        source: 'Everything Theatre',
        quote:  "Un spectacle aussi surprenant qu'un plaisir inattendu, traité avec tact et intelligence.",
        rating: 4,
        date:   'Septembre 2024',
        city:   'Londres',
      },
      {
        source: 'There Ought To Be Clowns',
        quote:  "Rien n'est interdit — la mise en scène trouve le bon équilibre entre authenticité et théâtralité.",
        rating: 4,
        date:   'Septembre 2024',
        city:   'Londres',
      },
      {
        source: 'Beyond the Curtain',
        quote:  "Une expérience mémorable qui s'attaque à des sujets tabous avec finesse et humour.",
        rating: 5,
        date:   'Septembre 2024',
        city:   'Londres',
      },
      {
        source: 'London Pub Theatre',
        quote:  'Hilarant et stimulant — comme un talk-show féminin électrisé.',
        rating: 4,
        date:   'Septembre 2024',
        city:   'Londres',
      },
      {
        source: 'BilletRéduc',
        quote:  'Une exploration audacieuse et spirituelle de la sexualité féminine. Impossible de ne pas rire.',
        date:   'Octobre 2024',
        city:   'Paris',
      },
      {
        source: '12thnight',
        quote:  "Jouons à « Qui est la déviante ? » — et tout le monde gagne.",
        rating: 4,
        date:   'Août 2023',
        city:   'Edmonton',
      },
      {
        source: 'Info Edmonton',
        quote:  "Si vous vous êtes déjà demandé comment les femmes naviguent dans leur sexualité, ne ratez pas ce spectacle.",
        date:   'Août 2023',
        city:   'Edmonton',
      },
    ],
  },
  contact: {
    heading: 'Nous contacter',
    formLabel: 'Questions sur nos tournées ou demandes de programmation',
    fields: {
      name:    'Nom',
      email:   'E-mail',
      message: 'Message',
      send:    'Envoyer',
    },
    successMessage: 'Message envoyé — nous vous répondrons dès que possible.',
    errorMessage:   'Une erreur est survenue. Réessayez ou écrivez-nous directement à manager@hystericalladies.net.',
    address:      '29 ST3 Tour Cortina, 41 Rue du Disque, 75013 Paris',
    siret:        'SIRET 82398276400024',
    registration: 'PLATESV-D-2024-005680',
    manager:      'Clémentine Marcès',
  },
  footer: {
    company:   'Au Haz Art',
    devCredit: 'Site réalisé par QuaiLabs',
  },
}

export default fr
