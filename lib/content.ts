// ───────────────────────────────────────────────────────────────────────────
// i18n content — single source of truth for FR / EN / ES.
// Non-translatable data (contact, socials, URLs, images) lives once in `shared`.
// Translatable copy lives in `dictionaries`. Use getContent(locale) in pages.
// ───────────────────────────────────────────────────────────────────────────

export const locales = ["fr", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Route slugs are shared across locales; only the locale prefix changes.
export const routePaths = {
  home: "",
  about: "/a-propos",
  upcoming: "/a-venir",
  gallery: "/apercu",
  news: "/actualites",
  contact: "/contact",
} as const;

const navOrder = ["home", "about", "upcoming", "gallery", "news", "contact"] as const;

// ───────────────────────────── Shared (non-translatable) ────────────────────
const shared = {
  title: "The Hysterical Ladies",
  contact: {
    email: "manager@hystericalladies.net",
    phoneUK: "+44 7737 135135",
    phoneFR: "+33 6 88 07 88 73",
    siret: "82398276400024",
    license: "PLATESV-D-2024-005680",
  },
  socials: {
    instagram: "https://www.instagram.com/thecatalogueofsexualanxieties/",
    youtube: "https://www.youtube.com/@auhazart",
    facebook: "https://www.facebook.com/hystericalladies",
  },
  ticketsUrl: "https://www.whitebeartheatre.co.uk/whatson/the-catalogue-of-sexual-anxieties",
  bookingUrl: "https://essaion-theatre.com/spectacle/the-catalogue-of-sexual-anxieties/",
};

const teamBase = [
  { id: "charlotte", name: "Charlotte Szabo", image: "/images/team/charlotte.png" },
  { id: "marion", name: "Marion Poli", image: "/images/team/marion.png" },
  { id: "aniqa", name: "Aniqa Charania", image: "/images/team/aniqa.png" },
  { id: "ines", name: "Inès Amoura", image: "/images/team/ines.jpg" },
  { id: "mallory", name: "Mallory Cheminet", image: "/images/team/mallory.jpg" },
  { id: "patrice", name: "Patrice Peyrieras", image: "/images/team/patrice.jpg" },
  { id: "jessica", name: "Jessica Rock", image: "/images/team/jessica.jpg" },
  { id: "yeohyeon", name: "YeoHyeon Jung", image: "/images/team/yeohyeon.jpg" },
  { id: "anthony", name: "Anthony Nyro", image: "/images/team/anthony.jpg" },
  { id: "clementine", name: "Clémentine Marcès", image: "/images/team/clementine.png" },
] as const;

const galleryBase = [
  {
    id: "essaion",
    photos: [
      "/images/gallery/essaion-01.jpg",
      "/images/gallery/essaion-02.jpg",
      "/images/gallery/essaion-03.jpg",
      "/images/gallery/essaion-04.jpg",
      "/images/gallery/essaion-05.jpg",
      "/images/gallery/essaion-06.jpg",
      "/images/gallery/essaion-07.jpg",
      "/images/gallery/essaion-08.jpg",
      "/images/gallery/essaion-09.jpg",
      "/images/gallery/essaion-10.jpg",
    ],
  },
  {
    id: "whitebear",
    photos: [
      "/images/gallery/whitebear-01.jpg",
      "/images/gallery/whitebear-02.jpg",
      "/images/gallery/whitebear-03.jpg",
    ],
  },
  {
    id: "skirts",
    photos: [
      "/images/gallery/skirts-01.jpg",
      "/images/gallery/skirts-02.jpg",
      "/images/gallery/skirts-03.jpg",
      "/images/gallery/skirts-04.jpg",
      "/images/gallery/skirts-05.jpg",
      "/images/gallery/skirts-06.jpg",
    ],
  },
  {
    id: "paris2022",
    photos: [
      "/images/gallery/paris2022-01.jpg",
      "/images/gallery/paris2022-02.jpg",
      "/images/gallery/paris2022-03.jpg",
    ],
  },
] as const;

const reviewBase = [
  { id: "billetreduc", stars: 5, url: "https://www.billetreduc.com/spectacle/the-catalogue-of-sexual-anxieties-355517" },
  { id: "beyond", stars: 5, url: "https://www.beyondthecurtain.co.uk/2024/09/the-catalogue-of-sexual-anxieties.html" },
  { id: "clowns", stars: 5, url: "https://oughttobeclowns.com/2024/09/review-the-catalogue-of-sexual-anxieties-white-bear-theatre.html/" },
  { id: "londonpub", stars: 4, url: "https://www.londonpubtheatres.com/review-the-catalogue-of-sexual-anxieties-at-white-bear-theatre-27-28-september-2024" },
  { id: "everything", stars: 4, url: "https://everything-theatre.co.uk/2024/09/review-the-catalogue-of-sexual-insecurities-white-bear-theatre/" },
  { id: "peg", stars: 3, url: "#" },
  { id: "infoedmonton", stars: 5, url: "https://infoedmonton.com/article/fringe-show-recommendations-2023-ongoing/" },
  { id: "12thnight", stars: 5, url: "https://12thnight.ca/2023/08/19/lets-play-whos-the-deviant-the-catalogue-of-sexual-anxieties-a-fringe-review/" },
] as const;

const upcomingBase = [
  { id: "whitebear", venue: "The White Bear Theatre", bookingUrl: "https://www.whitebeartheatre.co.uk/whatson/the-catalogue-of-sexual-anxieties" },
  { id: "essaion", venue: "Théâtre Essaïon", bookingUrl: "https://essaion-theatre.com/spectacle/the-catalogue-of-sexual-anxieties/" },
] as const;

type TeamId = (typeof teamBase)[number]["id"];
type GalleryId = (typeof galleryBase)[number]["id"];
type ReviewId = (typeof reviewBase)[number]["id"];
type UpcomingId = (typeof upcomingBase)[number]["id"];

// ───────────────────────────── Dictionaries ─────────────────────────────────
type Dictionary = {
  langLabel: string;
  subtitle: string;
  tagline: string;
  banner: string;
  metaDescription: string;
  nav: Record<(typeof navOrder)[number], string>;
  skipToContent: string;
  boldOriginal: string;
  heroQuotes: string[];
  starsLabel: (n: number) => string;
  teamRoles: Record<TeamId, string>;
  galleries: Record<GalleryId, { title: string; date: string }>;
  reviews: Record<ReviewId, { quote: string; location: string; source: string }>;
  upcoming: Record<UpcomingId, { city: string; dates: string }>;
  home: {
    label: string;
    badge: string;
    ctaTour: string;
    ctaBook: string;
    apercu: { label: string; heading: string; body: string; cta: string };
    upcoming: { label: string; heading: string; body: string; cta: string };
    support: { label: string; heading: string; body: string; cta: string };
    news: { label: string; heading: string; body: string; cta: string };
    contact: { label: string; heading: string; body: string; cta: string };
  };
  about: {
    pageTitle: string;
    metaDescription: string;
    headerLabel: string;
    subhead: string;
    synopsis: { p1a: string; question: string; p2: string; p3: string };
    ctaBook: string;
    storyLabel: string;
    storyHeading: string;
    story: { p1: string; p2: string; p3a: string; p3strong: string; p3b: string; p4a: string; p4b: string; p5: string; p6: string };
    teamLabel: string;
    teamHeading: string;
    ctaLabel: string;
    ctaHeading: string;
    ctaTour: string;
  };
  upcomingPage: {
    pageTitle: string;
    metaDescription: string;
    headerLabel: string;
    h1: string;
    subhead: string;
    instagramCta: string;
    performance: string;
    cityLabel: string;
    datesLabel: string;
    book: string;
  };
  galleryPage: {
    pageTitle: string;
    metaDescription: string;
    headerLabel: string;
    h1: string;
    subhead: string;
  };
  newsPage: {
    pageTitle: string;
    metaDescription: string;
    headerLabel: string;
    h1: string;
    subhead: string;
    featuredQuote: string;
    featuredAttribution: string;
  };
  contactPage: {
    pageTitle: string;
    metaDescription: string;
    headerLabel: string;
    h1: string;
    subhead: string;
    formLabel: string;
    formHeading: string;
    detailsLabel: string;
    detailsHeading: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    address: string;
    socialsLabel: string;
    representative: string;
    licenseWord: string;
  };
  form: {
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    sentNote: string;
    subjectPrefix: string;
    fromLabel: string;
  };
  footer: {
    productionPrefix: string;
    productionSuffix: string;
    sitemap: string;
    contact: string;
    legal: string;
    licenseWord: string;
    rights: string;
    craftedBy: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  // ─────────────────────────────── FRANÇAIS ─────────────────────────────────
  fr: {
    langLabel: "Français",
    subtitle: "Le Catalogue des Angoisses Sexuelles",
    tagline: "Un cabaret musical inspiré des Andrew Sisters",
    banner: "The Catalogue of Sexual Anxieties — White Bear Theatre · 17 – 28 septembre",
    metaDescription:
      "Un cabaret musical explorant les angoisses sexuelles féminines avec humour et satire. Inspiré des Andrew Sisters.",
    nav: {
      home: "Accueil",
      about: "À propos",
      upcoming: "À venir",
      gallery: "Aperçu",
      news: "Actualités",
      contact: "Contact",
    },
    skipToContent: "Aller au contenu",
    boldOriginal: "« It's a bold original »",
    heroQuotes: [
      "Si les Andrew Sisters chantaient sur les verrues génitales et la masturbation",
      "Un trio sexy dévoile les secrets cachés et inavoués de la féminité",
      "Un mélange de récits authentiques, de faits historiques, enveloppés dans des harmonies somptueuses",
      "Vous allez certainement apprendre une ou deux choses",
    ],
    starsLabel: (n) => `${n} étoiles`,
    teamRoles: {
      charlotte: "Autrice et comédienne",
      marion: "Autrice et comédienne",
      aniqa: "Autrice et comédienne",
      ines: "Metteure en scène",
      mallory: "Chorégraphe",
      patrice: "Compositeur musical",
      jessica: "Pianiste",
      yeohyeon: "Régisseuse",
      anthony: "Assistant de production",
      clementine: "Présidente de l'association Au Haz Art",
    },
    galleries: {
      essaion: { title: "Théâtre Essaïon, Paris", date: "Octobre 2024" },
      whitebear: { title: "White Bear Theatre, Londres", date: "Septembre 2024" },
      skirts: { title: "Skirts of Fire Festival", date: "Mars 2024" },
      paris2022: { title: "Paris", date: "2022" },
    },
    reviews: {
      billetreduc: {
        quote:
          "Une exploration audacieuse, spirituelle et décomplexée de la sexualité féminine. Impossible de ne pas rire aux éclats et de ne pas réfléchir profondément.",
        location: "Essaïon Théâtre — 2024",
        source: "BilletRéduc, Paris",
      },
      beyond: {
        quote:
          "Une expérience inoubliable qui aborde des sujets tabous avec humour et finesse. L'alchimie entre les artistes est électrique.",
        location: "White Bear Theatre — 2024",
        source: "Beyond the Curtain",
      },
      clowns: {
        quote:
          "Rien n'est tabou, et la mise en scène d'Inès Amoura trouve le juste équilibre entre sincérité et folie. C'est personnel, c'est vulnérable, et c'est foutrement drôle !",
        location: "Londres — 2024",
        source: "There Ought To Be Clowns",
      },
      londonpub: {
        quote:
          "Hilarantes et stimulantes, les Hysterical Ladies sont comme Loose Women sous stéroïdes. Un cabaret / comédie musicale / stand-up étonnamment profond — et même un peu émouvant.",
        location: "Londres — 2024",
        source: "London Pub Theatre Magazine",
      },
      everything: {
        quote:
          "Une création aussi imprévisible qu'un orgasme surprise ! Un spectacle fascinant par son audace et son inventivité, traité avec tact, humour et intelligence.",
        location: "Londres — 2024",
        source: "Everything Theatre",
      },
      peg: {
        quote:
          "Parlons de sexe. Une escapade divertissante à travers une sélection d'angoisses liées à la sexualité. Ces femmes nous guident avec charme et humour dans le monde labyrinthique du sexe et ses défis.",
        location: "Londres — 2024",
        source: "The PEG Reviews",
      },
      infoedmonton: {
        quote:
          "Si vous vous êtes déjà demandé comment les femmes gèrent leur sexualité, ne manquez pas The Catalogue of Sexual Anxieties.",
        location: "Edmonton Fringe — 2023",
        source: "Info Edmonton",
      },
      "12thnight": {
        quote: "Jouons à « Qui est le déviant ? » — un Fringe review.",
        location: "Edmonton — 2023",
        source: "Liz Nichols · 12thnight.ca",
      },
    },
    upcoming: {
      whitebear: { city: "Londres", dates: "17 – 28 septembre 2025" },
      essaion: { city: "Paris", dates: "À confirmer" },
    },
    home: {
      label: "N° 01 — Le Spectacle",
      badge: "N° 01 — Le Spectacle",
      ctaTour: "Dates de tournée",
      ctaBook: "Réserver",
      apercu: {
        label: "N° 02 — Aperçu",
        heading: "Jetez un coup d'œil à la galerie pour suivre nos escapades.",
        body: "Paris, Londres, Edmonton — chaque salle ajoute une page au catalogue. Découvrez les photos de scène, les coulisses et les souvenirs des tournées qui ont jalonné notre histoire.",
        cta: "Voir la galerie",
      },
      upcoming: {
        label: "N° 03 — À venir",
        heading: "Découvrez nos prochaines dates de tournée.",
        body: "Nous écumons les théâtres et les festivals : Paris, Londres, et bien d'autres. Inscrivez-vous pour ne rien manquer.",
        cta: "Dates de tournée",
      },
      support: {
        label: "N° 04 — Contribuer",
        heading: "Soutenez notre tournée.",
        body: "Le Catalogue des Angoisses Sexuelles vit grâce à un public engagé. Votre don finance les costumes, la musique originale, les salles et les déplacements de la troupe. Chaque contribution prolonge la tournée d'un soir de plus.",
        cta: "Faire un don",
      },
      news: {
        label: "N° 05 — Actualités",
        heading: "Ce que la presse dit de nous.",
        body: "BilletRéduc, There Ought To Be Clowns, London Pub Theatre Magazine, Everything Theatre, Info Edmonton… Lisez les critiques des théâtres et festivals où nous avons joué.",
        cta: "Lire les critiques",
      },
      contact: {
        label: "N° 06 — Contact",
        heading: "Programmateurs, presse, ou simple curieux ?",
        body: "Écrivez-nous pour toute question relative aux tournées, à la programmation ou aux collaborations.",
        cta: "Nous écrire",
      },
    },
    about: {
      pageTitle: "À propos",
      metaDescription:
        "Découvrez l'histoire des Hysterical Ladies, leur équipe et leur cabaret musical Le Catalogue des Angoisses Sexuelles.",
      headerLabel: "N° 01 — Le Spectacle",
      subhead:
        "Un cabaret musical explorant les éveils et escapades sexuelles de trois « filles hystériques ».",
      synopsis: {
        p1a: "À l'instar de Monty Python, nous nous lançons dans une quête. Une quête au nom des femmes du monde entier pour répondre à l'une des grandes questions existentielles : ",
        question: "Suis-je sexuellement normale ?",
        p2: "Avec des morceaux originaux inspirés des Andrew Sisters, nous voyageons à travers des chapitres hilarants qui reflètent nos propres parcours d'anxiétés sexuelles, de répression, et même de libération !",
        p3: "Alors embarquez avec nous, tandis que nous ouvrons notre bible de blasphèmes et que nous vous racontons une petite histoire…",
      },
      ctaBook: "Réserver vos places",
      storyLabel: "N° 02 — Notre histoire",
      storyHeading: "Trois amies, un après-midi pluvieux.",
      story: {
        p1: "Un après-midi pluvieux, trois amies se sont réfugiées dans un café et se sont installées pour discuter, débattre et critiquer leur vie amoureuse. Après plusieurs tours de « Est-ce que c'est moi ? », « Oh, toi aussi tu as ce poil rebelle là ? », « Est-ce que ta grimace quand tu jouis est aussi bizarre que la mienne ? », il est vite devenu évident à quel point nos angoisses sexuelles se recoupaient, malgré nos différences sexuelles, culturelles et religieuses.",
        p2: "Nous nous sommes également demandé comment les femmes à travers l'histoire avaient affronté les mêmes questions, surtout à une époque où toute pensée exprimée pouvait suffire à qualifier une femme d'« hystérique ».",
        p3a: "C'est ainsi qu'une idée de spectacle a commencé à germer. Notre ambition : ",
        p3strong: "normaliser l'anormal !",
        p3b: " En partageant nos propres angoisses sexuelles, nous espérions mettre en lumière des problèmes auxquels toutes les femmes font face. La vie est bien trop courte pour s'inquiéter de la taille de son vagin !",
        p4a: "Nous avons eu l'honneur de collaborer avec le compositeur reconnu ",
        p4b: ", qui a sublimé nos paroles grâce à son génie musical.",
        p5: "Le Catalogue des Angoisses Sexuelles est une pièce unique de théâtre posée sur une partition originale inspirée du jazz des années 40. Notre utilisation de la musique swing traditionnelle fait écho à la féminité hégémonique, en jouant sur le contraste entre des harmonies impeccables et des blagues bien décalées.",
        p6: "Alors accrochez-vous, et pourquoi pas… attachez-vous aussi, pour un périple endiablé.",
      },
      teamLabel: "N° 03 — L'équipe",
      teamHeading: "Notre équipe",
      ctaLabel: "Prochaine étape",
      ctaHeading: "Voir le spectacle.",
      ctaTour: "Dates de tournée",
    },
    upcomingPage: {
      pageTitle: "À venir",
      metaDescription: "Prochaines dates de tournée du Catalogue des Angoisses Sexuelles.",
      headerLabel: "N° 01 — Programmation",
      h1: "À venir",
      subhead: "Nos prochaines escales. Réservez vos places avant qu'il ne soit trop tard.",
      instagramCta: "Suivez-nous sur Instagram pour les annonces",
      performance: "Représentation",
      cityLabel: "Ville",
      datesLabel: "Dates",
      book: "Réserver",
    },
    galleryPage: {
      pageTitle: "Aperçu",
      metaDescription:
        "Galerie photo des tournées des Hysterical Ladies à Paris, Londres, Edmonton.",
      headerLabel: "N° 01 — Galerie",
      h1: "Aperçu",
      subhead:
        "Jetez un coup d'œil à la galerie pour suivre nos escapades actuelles et passées.",
    },
    newsPage: {
      pageTitle: "Actualités",
      metaDescription: "News, critiques et revues de presse sur The Hysterical Ladies.",
      headerLabel: "N° 01 — Presse & critiques",
      h1: "News & Critiques",
      subhead: "Ce que la presse et le public disent du spectacle.",
      featuredQuote:
        "Si vous vous êtes déjà demandé comment les femmes gèrent leur sexualité, ne manquez pas",
      featuredAttribution: "Info Edmonton · Août 2023",
    },
    contactPage: {
      pageTitle: "Contact",
      metaDescription:
        "Contactez The Hysterical Ladies pour toute question sur les tournées et la programmation.",
      headerLabel: "N° 01 — Nous écrire",
      h1: "Contact",
      subhead: "Questions par rapport à nos tournées, programmation, presse ou collaborations.",
      formLabel: "Formulaire",
      formHeading: "Envoyez-nous un message",
      detailsLabel: "Coordonnées",
      detailsHeading: "Au Haz Art",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      addressLabel: "Adresse",
      address: "29 ST3 Tour Cortina, 41 rue du Disque, 75013 Paris",
      socialsLabel: "Réseaux",
      representative: "Représentée par Clémentine Marcès",
      licenseWord: "Licence",
    },
    form: {
      name: "Votre nom",
      email: "Votre e-mail",
      message: "Votre message",
      send: "Envoyer votre message",
      sending: "Envoi…",
      sentNote: "Merci ! Votre client mail va s'ouvrir pour finaliser l'envoi.",
      subjectPrefix: "Contact site —",
      fromLabel: "De :",
    },
    footer: {
      productionPrefix: "Une production ",
      productionSuffix: ".",
      sitemap: "Plan du site",
      contact: "Contact",
      legal: "Mentions légales",
      licenseWord: "Licence",
      rights: "Tous droits réservés.",
      craftedBy: "Développé avec amour par",
    },
  },

  // ─────────────────────────────── ENGLISH ──────────────────────────────────
  en: {
    langLabel: "English",
    subtitle: "The Catalogue of Sexual Anxieties",
    tagline: "A musical cabaret inspired by the Andrew Sisters",
    banner: "The Catalogue of Sexual Anxieties — White Bear Theatre · 17 – 28 September",
    metaDescription:
      "A musical cabaret exploring women's sexual anxieties with humour and satire. Inspired by the Andrew Sisters.",
    nav: {
      home: "Home",
      about: "About",
      upcoming: "Upcoming",
      gallery: "Gallery",
      news: "News",
      contact: "Contact",
    },
    skipToContent: "Skip to content",
    boldOriginal: "“ It's a bold original ”",
    heroQuotes: [
      "As if the Andrew Sisters sang about genital warts and masturbation",
      "A sexy trio reveals the hidden, unspoken secrets of femininity",
      "A blend of authentic stories and historical facts, wrapped in sumptuous harmonies",
      "You're bound to learn a thing or two",
    ],
    starsLabel: (n) => `${n} stars`,
    teamRoles: {
      charlotte: "Writer & performer",
      marion: "Writer & performer",
      aniqa: "Writer & performer",
      ines: "Director",
      mallory: "Choreographer",
      patrice: "Musical composer",
      jessica: "Pianist",
      yeohyeon: "Stage manager",
      anthony: "Production assistant",
      clementine: "President of the Au Haz Art association",
    },
    galleries: {
      essaion: { title: "Essaïon Theatre, Paris", date: "October 2024" },
      whitebear: { title: "White Bear Theatre, London", date: "September 2024" },
      skirts: { title: "Skirts of Fire Festival", date: "March 2024" },
      paris2022: { title: "Paris", date: "2022" },
    },
    reviews: {
      billetreduc: {
        quote:
          "A bold, witty and uninhibited exploration of female sexuality. Impossible not to laugh out loud and think deeply at the same time.",
        location: "Essaïon Theatre — 2024",
        source: "BilletRéduc, Paris",
      },
      beyond: {
        quote:
          "An unforgettable experience that tackles taboo subjects with humour and finesse. The chemistry between the performers is electric.",
        location: "White Bear Theatre — 2024",
        source: "Beyond the Curtain",
      },
      clowns: {
        quote:
          "Nothing is off-limits, and Inès Amoura's direction strikes the perfect balance between sincerity and madness. It's personal, it's vulnerable, and it's bloody funny!",
        location: "London — 2024",
        source: "There Ought To Be Clowns",
      },
      londonpub: {
        quote:
          "Hilarious and thought-provoking, the Hysterical Ladies are like Loose Women on steroids. A surprisingly profound cabaret / musical / stand-up — and even a little moving.",
        location: "London — 2024",
        source: "London Pub Theatre Magazine",
      },
      everything: {
        quote:
          "A creation as unpredictable as a surprise orgasm! A show that fascinates with its daring and inventiveness, handled with tact, humour and intelligence.",
        location: "London — 2024",
        source: "Everything Theatre",
      },
      peg: {
        quote:
          "Let's talk about sex. An entertaining romp through a selection of sexual anxieties. These women guide us with charm and humour through the labyrinthine world of sex and its challenges.",
        location: "London — 2024",
        source: "The PEG Reviews",
      },
      infoedmonton: {
        quote:
          "If you've ever wondered how women navigate their sexuality, don't miss The Catalogue of Sexual Anxieties.",
        location: "Edmonton Fringe — 2023",
        source: "Info Edmonton",
      },
      "12thnight": {
        quote: "Let's play “Who's the deviant?” — a Fringe review.",
        location: "Edmonton — 2023",
        source: "Liz Nichols · 12thnight.ca",
      },
    },
    upcoming: {
      whitebear: { city: "London", dates: "17 – 28 September 2025" },
      essaion: { city: "Paris", dates: "To be confirmed" },
    },
    home: {
      label: "N° 01 — The Show",
      badge: "N° 01 — The Show",
      ctaTour: "Tour dates",
      ctaBook: "Book now",
      apercu: {
        label: "N° 02 — Gallery",
        heading: "Take a look at the gallery to follow our escapades.",
        body: "Paris, London, Edmonton — every venue adds a page to the catalogue. Discover stage photos, behind-the-scenes moments and memories from the tours that have shaped our story.",
        cta: "View the gallery",
      },
      upcoming: {
        label: "N° 03 — Upcoming",
        heading: "Discover our next tour dates.",
        body: "We're criss-crossing theatres and festivals: Paris, London, and many more. Sign up so you don't miss a thing.",
        cta: "Tour dates",
      },
      support: {
        label: "N° 04 — Support",
        heading: "Support our tour.",
        body: "The Catalogue of Sexual Anxieties thrives thanks to a devoted audience. Your donation funds costumes, original music, venues and the troupe's travel. Every contribution keeps the tour going one more night.",
        cta: "Make a donation",
      },
      news: {
        label: "N° 05 — News",
        heading: "What the press says about us.",
        body: "BilletRéduc, There Ought To Be Clowns, London Pub Theatre Magazine, Everything Theatre, Info Edmonton… Read the reviews from the theatres and festivals where we've performed.",
        cta: "Read the reviews",
      },
      contact: {
        label: "N° 06 — Contact",
        heading: "Programmer, press, or simply curious?",
        body: "Write to us with any question about tours, programming or collaborations.",
        cta: "Get in touch",
      },
    },
    about: {
      pageTitle: "About",
      metaDescription:
        "Discover the story of the Hysterical Ladies, their team and their musical cabaret The Catalogue of Sexual Anxieties.",
      headerLabel: "N° 01 — The Show",
      subhead:
        "A musical cabaret exploring the sexual awakenings and escapades of three “hysterical girls”.",
      synopsis: {
        p1a: "Much like Monty Python, we set off on a quest. A quest on behalf of women everywhere to answer one of the great existential questions: ",
        question: "Am I sexually normal?",
        p2: "With original songs inspired by the Andrew Sisters, we travel through hilarious chapters that mirror our own journeys of sexual anxiety, repression, and even liberation!",
        p3: "So come aboard with us as we open our bible of blasphemies and tell you a little story…",
      },
      ctaBook: "Book your tickets",
      storyLabel: "N° 02 — Our story",
      storyHeading: "Three friends, one rainy afternoon.",
      story: {
        p1: "One rainy afternoon, three friends took shelter in a café and settled in to chat, debate and dissect their love lives. After several rounds of “Is it just me?”, “Oh, you've got that rogue hair too?”, “Is your O-face as weird as mine?”, it quickly became clear how much our sexual anxieties overlapped, despite our sexual, cultural and religious differences.",
        p2: "We also wondered how women throughout history had faced the same questions, especially at a time when simply voicing a thought was enough to brand a woman as “hysterical”.",
        p3a: "And so the idea for a show began to take shape. Our ambition: ",
        p3strong: "to normalise the abnormal!",
        p3b: " By sharing our own sexual anxieties, we hoped to shine a light on issues every woman faces. Life is far too short to worry about the size of your vagina!",
        p4a: "We had the honour of collaborating with the acclaimed composer ",
        p4b: ", who elevated our lyrics with his musical genius.",
        p5: "The Catalogue of Sexual Anxieties is a one-of-a-kind theatre piece set to an original score inspired by 1940s jazz. Our use of traditional swing music echoes hegemonic femininity, playing on the contrast between flawless harmonies and wonderfully off-beat jokes.",
        p6: "So hold on tight — and why not… strap yourselves in too, for a wild ride.",
      },
      teamLabel: "N° 03 — The team",
      teamHeading: "Our team",
      ctaLabel: "Next step",
      ctaHeading: "See the show.",
      ctaTour: "Tour dates",
    },
    upcomingPage: {
      pageTitle: "Upcoming",
      metaDescription: "Upcoming tour dates for The Catalogue of Sexual Anxieties.",
      headerLabel: "N° 01 — Schedule",
      h1: "Upcoming",
      subhead: "Our next stops. Book your seats before it's too late.",
      instagramCta: "Follow us on Instagram for announcements",
      performance: "Performance",
      cityLabel: "City",
      datesLabel: "Dates",
      book: "Book now",
    },
    galleryPage: {
      pageTitle: "Gallery",
      metaDescription:
        "Photo gallery of the Hysterical Ladies' tours in Paris, London and Edmonton.",
      headerLabel: "N° 01 — Gallery",
      h1: "Gallery",
      subhead: "Take a look at the gallery to follow our current and past escapades.",
    },
    newsPage: {
      pageTitle: "News",
      metaDescription: "News, reviews and press coverage of The Hysterical Ladies.",
      headerLabel: "N° 01 — Press & reviews",
      h1: "News & Reviews",
      subhead: "What the press and the public say about the show.",
      featuredQuote:
        "If you've ever wondered how women navigate their sexuality, don't miss",
      featuredAttribution: "Info Edmonton · August 2023",
    },
    contactPage: {
      pageTitle: "Contact",
      metaDescription:
        "Contact The Hysterical Ladies with any question about tours and programming.",
      headerLabel: "N° 01 — Get in touch",
      h1: "Contact",
      subhead: "Questions about our tours, programming, press or collaborations.",
      formLabel: "Form",
      formHeading: "Send us a message",
      detailsLabel: "Details",
      detailsHeading: "Au Haz Art",
      emailLabel: "Email",
      phoneLabel: "Phone",
      addressLabel: "Address",
      address: "29 ST3 Tour Cortina, 41 rue du Disque, 75013 Paris, France",
      socialsLabel: "Socials",
      representative: "Represented by Clémentine Marcès",
      licenseWord: "License",
    },
    form: {
      name: "Your name",
      email: "Your email",
      message: "Your message",
      send: "Send your message",
      sending: "Sending…",
      sentNote: "Thank you! Your mail client will open to finish sending.",
      subjectPrefix: "Website contact —",
      fromLabel: "From:",
    },
    footer: {
      productionPrefix: "An ",
      productionSuffix: " production.",
      sitemap: "Sitemap",
      contact: "Contact",
      legal: "Legal",
      licenseWord: "License",
      rights: "All rights reserved.",
      craftedBy: "Crafted with love by",
    },
  },

  // ─────────────────────────────── ESPAÑOL ──────────────────────────────────
  es: {
    langLabel: "Español",
    subtitle: "El Catálogo de las Angustias Sexuales",
    tagline: "Un cabaret musical inspirado en las Andrew Sisters",
    banner: "The Catalogue of Sexual Anxieties — White Bear Theatre · 17 – 28 de septiembre",
    metaDescription:
      "Un cabaret musical que explora las angustias sexuales femeninas con humor y sátira. Inspirado en las Andrew Sisters.",
    nav: {
      home: "Inicio",
      about: "Nosotras",
      upcoming: "Próximamente",
      gallery: "Galería",
      news: "Novedades",
      contact: "Contacto",
    },
    skipToContent: "Saltar al contenido",
    boldOriginal: "“ It's a bold original ”",
    heroQuotes: [
      "Como si las Andrew Sisters cantaran sobre verrugas genitales y masturbación",
      "Un trío sexy revela los secretos ocultos e inconfesables de la feminidad",
      "Una mezcla de relatos auténticos y hechos históricos, envueltos en armonías suntuosas",
      "Seguro que aprenderás una o dos cosas",
    ],
    starsLabel: (n) => `${n} estrellas`,
    teamRoles: {
      charlotte: "Autora y actriz",
      marion: "Autora y actriz",
      aniqa: "Autora y actriz",
      ines: "Directora",
      mallory: "Coreógrafa",
      patrice: "Compositor musical",
      jessica: "Pianista",
      yeohyeon: "Regidora",
      anthony: "Asistente de producción",
      clementine: "Presidenta de la asociación Au Haz Art",
    },
    galleries: {
      essaion: { title: "Teatro Essaïon, París", date: "Octubre 2024" },
      whitebear: { title: "White Bear Theatre, Londres", date: "Septiembre 2024" },
      skirts: { title: "Skirts of Fire Festival", date: "Marzo 2024" },
      paris2022: { title: "París", date: "2022" },
    },
    reviews: {
      billetreduc: {
        quote:
          "Una exploración audaz, ingeniosa y desinhibida de la sexualidad femenina. Imposible no reír a carcajadas y reflexionar a fondo al mismo tiempo.",
        location: "Teatro Essaïon — 2024",
        source: "BilletRéduc, París",
      },
      beyond: {
        quote:
          "Una experiencia inolvidable que aborda temas tabú con humor y delicadeza. La química entre las artistas es eléctrica.",
        location: "White Bear Theatre — 2024",
        source: "Beyond the Curtain",
      },
      clowns: {
        quote:
          "Nada es tabú, y la dirección de Inès Amoura encuentra el equilibrio justo entre la sinceridad y la locura. Es personal, es vulnerable y es tremendamente divertido.",
        location: "Londres — 2024",
        source: "There Ought To Be Clowns",
      },
      londonpub: {
        quote:
          "Hilarantes y estimulantes, las Hysterical Ladies son como Loose Women con esteroides. Un cabaret / musical / monólogo sorprendentemente profundo — e incluso algo conmovedor.",
        location: "Londres — 2024",
        source: "London Pub Theatre Magazine",
      },
      everything: {
        quote:
          "¡Una creación tan impredecible como un orgasmo sorpresa! Un espectáculo que fascina por su audacia e inventiva, tratado con tacto, humor e inteligencia.",
        location: "Londres — 2024",
        source: "Everything Theatre",
      },
      peg: {
        quote:
          "Hablemos de sexo. Una escapada divertida a través de una selección de angustias sexuales. Estas mujeres nos guían con encanto y humor por el laberíntico mundo del sexo y sus desafíos.",
        location: "Londres — 2024",
        source: "The PEG Reviews",
      },
      infoedmonton: {
        quote:
          "Si alguna vez te has preguntado cómo viven las mujeres su sexualidad, no te pierdas The Catalogue of Sexual Anxieties.",
        location: "Edmonton Fringe — 2023",
        source: "Info Edmonton",
      },
      "12thnight": {
        quote: "Juguemos a «¿Quién es la desviada?» — una reseña del Fringe.",
        location: "Edmonton — 2023",
        source: "Liz Nichols · 12thnight.ca",
      },
    },
    upcoming: {
      whitebear: { city: "Londres", dates: "17 – 28 de septiembre de 2025" },
      essaion: { city: "París", dates: "Por confirmar" },
    },
    home: {
      label: "N° 01 — El Espectáculo",
      badge: "N° 01 — El Espectáculo",
      ctaTour: "Fechas de gira",
      ctaBook: "Reservar",
      apercu: {
        label: "N° 02 — Galería",
        heading: "Echa un vistazo a la galería para seguir nuestras escapadas.",
        body: "París, Londres, Edmonton — cada sala añade una página al catálogo. Descubre las fotos de escena, el detrás de cámaras y los recuerdos de las giras que han marcado nuestra historia.",
        cta: "Ver la galería",
      },
      upcoming: {
        label: "N° 03 — Próximamente",
        heading: "Descubre nuestras próximas fechas de gira.",
        body: "Recorremos teatros y festivales: París, Londres y muchos más. Apúntate para no perderte nada.",
        cta: "Fechas de gira",
      },
      support: {
        label: "N° 04 — Contribuir",
        heading: "Apoya nuestra gira.",
        body: "El Catálogo de las Angustias Sexuales vive gracias a un público comprometido. Tu donación financia el vestuario, la música original, las salas y los desplazamientos de la compañía. Cada contribución prolonga la gira una noche más.",
        cta: "Hacer una donación",
      },
      news: {
        label: "N° 05 — Novedades",
        heading: "Lo que dice la prensa sobre nosotras.",
        body: "BilletRéduc, There Ought To Be Clowns, London Pub Theatre Magazine, Everything Theatre, Info Edmonton… Lee las críticas de los teatros y festivales donde hemos actuado.",
        cta: "Leer las críticas",
      },
      contact: {
        label: "N° 06 — Contacto",
        heading: "¿Programador, prensa o simplemente curioso?",
        body: "Escríbenos para cualquier consulta sobre giras, programación o colaboraciones.",
        cta: "Escríbenos",
      },
    },
    about: {
      pageTitle: "Nosotras",
      metaDescription:
        "Descubre la historia de las Hysterical Ladies, su equipo y su cabaret musical El Catálogo de las Angustias Sexuales.",
      headerLabel: "N° 01 — El Espectáculo",
      subhead:
        "Un cabaret musical que explora los despertares y las escapadas sexuales de tres «chicas histéricas».",
      synopsis: {
        p1a: "Al igual que Monty Python, nos lanzamos a una búsqueda. Una búsqueda en nombre de las mujeres de todo el mundo para responder a una de las grandes preguntas existenciales: ",
        question: "¿Soy sexualmente normal?",
        p2: "Con canciones originales inspiradas en las Andrew Sisters, viajamos a través de capítulos hilarantes que reflejan nuestros propios recorridos de angustia sexual, represión e incluso liberación.",
        p3: "Así que embárcate con nosotras mientras abrimos nuestra biblia de blasfemias y te contamos una pequeña historia…",
      },
      ctaBook: "Reserva tus entradas",
      storyLabel: "N° 02 — Nuestra historia",
      storyHeading: "Tres amigas, una tarde lluviosa.",
      story: {
        p1: "Una tarde lluviosa, tres amigas se refugiaron en un café y se acomodaron para charlar, debatir y diseccionar su vida amorosa. Tras varias rondas de «¿Soy solo yo?», «¿A ti también te sale ese pelo rebelde?», «¿Tu cara al llegar al orgasmo es tan rara como la mía?», pronto quedó claro cuánto se solapaban nuestras angustias sexuales, pese a nuestras diferencias sexuales, culturales y religiosas.",
        p2: "También nos preguntamos cómo habían afrontado las mujeres a lo largo de la historia las mismas preguntas, sobre todo en una época en la que basta con expresar un pensamiento para tachar a una mujer de «histérica».",
        p3a: "Y así empezó a germinar la idea de un espectáculo. Nuestra ambición: ",
        p3strong: "¡normalizar lo anormal!",
        p3b: " Al compartir nuestras propias angustias sexuales, esperábamos arrojar luz sobre problemas a los que se enfrentan todas las mujeres. ¡La vida es demasiado corta para preocuparse por el tamaño de tu vagina!",
        p4a: "Tuvimos el honor de colaborar con el reconocido compositor ",
        p4b: ", que sublimó nuestras letras gracias a su genio musical.",
        p5: "El Catálogo de las Angustias Sexuales es una pieza teatral única sobre una partitura original inspirada en el jazz de los años 40. Nuestro uso del swing tradicional hace eco de la feminidad hegemónica, jugando con el contraste entre armonías impecables y chistes deliciosamente descarados.",
        p6: "Así que agárrate fuerte y, por qué no… átate también, para un viaje desenfrenado.",
      },
      teamLabel: "N° 03 — El equipo",
      teamHeading: "Nuestro equipo",
      ctaLabel: "Siguiente paso",
      ctaHeading: "Ver el espectáculo.",
      ctaTour: "Fechas de gira",
    },
    upcomingPage: {
      pageTitle: "Próximamente",
      metaDescription: "Próximas fechas de gira de El Catálogo de las Angustias Sexuales.",
      headerLabel: "N° 01 — Programación",
      h1: "Próximamente",
      subhead: "Nuestras próximas paradas. Reserva tus entradas antes de que sea tarde.",
      instagramCta: "Síguenos en Instagram para los anuncios",
      performance: "Función",
      cityLabel: "Ciudad",
      datesLabel: "Fechas",
      book: "Reservar",
    },
    galleryPage: {
      pageTitle: "Galería",
      metaDescription:
        "Galería de fotos de las giras de las Hysterical Ladies en París, Londres y Edmonton.",
      headerLabel: "N° 01 — Galería",
      h1: "Galería",
      subhead: "Echa un vistazo a la galería para seguir nuestras escapadas actuales y pasadas.",
    },
    newsPage: {
      pageTitle: "Novedades",
      metaDescription: "Novedades, críticas y prensa sobre The Hysterical Ladies.",
      headerLabel: "N° 01 — Prensa y críticas",
      h1: "Novedades y Críticas",
      subhead: "Lo que dicen la prensa y el público sobre el espectáculo.",
      featuredQuote:
        "Si alguna vez te has preguntado cómo viven las mujeres su sexualidad, no te pierdas",
      featuredAttribution: "Info Edmonton · Agosto 2023",
    },
    contactPage: {
      pageTitle: "Contacto",
      metaDescription:
        "Contacta con The Hysterical Ladies para cualquier consulta sobre giras y programación.",
      headerLabel: "N° 01 — Escríbenos",
      h1: "Contacto",
      subhead: "Consultas sobre nuestras giras, programación, prensa o colaboraciones.",
      formLabel: "Formulario",
      formHeading: "Envíanos un mensaje",
      detailsLabel: "Datos",
      detailsHeading: "Au Haz Art",
      emailLabel: "Correo",
      phoneLabel: "Teléfono",
      addressLabel: "Dirección",
      address: "29 ST3 Tour Cortina, 41 rue du Disque, 75013 París, Francia",
      socialsLabel: "Redes",
      representative: "Representada por Clémentine Marcès",
      licenseWord: "Licencia",
    },
    form: {
      name: "Tu nombre",
      email: "Tu correo",
      message: "Tu mensaje",
      send: "Enviar tu mensaje",
      sending: "Enviando…",
      sentNote: "¡Gracias! Tu cliente de correo se abrirá para completar el envío.",
      subjectPrefix: "Contacto web —",
      fromLabel: "De:",
    },
    footer: {
      productionPrefix: "Una producción de ",
      productionSuffix: ".",
      sitemap: "Mapa del sitio",
      contact: "Contacto",
      legal: "Aviso legal",
      licenseWord: "Licencia",
      rights: "Todos los derechos reservados.",
      craftedBy: "Desarrollado con amor por",
    },
  },
};

// ───────────────────────────── Resolver ─────────────────────────────────────
export type SiteContent = ReturnType<typeof getContent>;

export function getContent(locale: Locale) {
  const d = dictionaries[locale];
  const prefix = (path: string) => `/${locale}${path}`;

  return {
    locale,
    dict: d,
    site: {
      title: shared.title,
      subtitle: d.subtitle,
      tagline: d.tagline,
      banner: d.banner,
      contact: { ...shared.contact, address: d.contactPage.address, representative: d.contactPage.representative },
      socials: shared.socials,
      ticketsUrl: shared.ticketsUrl,
      bookingUrl: shared.bookingUrl,
    },
    nav: navOrder.map((key) => ({
      key,
      href: prefix(routePaths[key]),
      label: d.nav[key],
    })),
    languages: locales.map((code) => ({
      code,
      label: dictionaries[code].langLabel,
      href: `/${code}`,
    })),
    routes: {
      home: prefix(routePaths.home),
      about: prefix(routePaths.about),
      upcoming: prefix(routePaths.upcoming),
      gallery: prefix(routePaths.gallery),
      news: prefix(routePaths.news),
      contact: prefix(routePaths.contact),
    },
    team: teamBase.map((m) => ({ name: m.name, image: m.image, role: d.teamRoles[m.id] })),
    galleries: galleryBase.map((g) => ({
      title: d.galleries[g.id].title,
      date: d.galleries[g.id].date,
      photos: g.photos as readonly string[],
    })),
    reviews: reviewBase.map((r) => ({
      quote: d.reviews[r.id].quote,
      location: d.reviews[r.id].location,
      source: d.reviews[r.id].source,
      url: r.url,
      stars: r.stars,
    })),
    upcomingShows: upcomingBase.map((u) => ({
      venue: u.venue,
      city: d.upcoming[u.id].city,
      dates: d.upcoming[u.id].dates,
      bookingUrl: u.bookingUrl,
    })),
  };
}
