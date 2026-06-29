// Single source of truth for the site content (French primary).
// Swap any field here and it updates across every page.

export const site = {
  title: "The Hysterical Ladies",
  subtitle: "Le Catalogue des Angoisses Sexuelles",
  tagline: "Un cabaret musical inspiré des Andrew Sisters",
  banner: "The Catalogue of Sexual Anxieties — White Bear Theatre · 17 – 28 septembre",
  contact: {
    email: "manager@hystericalladies.net",
    phoneUK: "+44 7737 135135",
    phoneFR: "+33 6 88 07 88 73",
    address: "29 ST3 Tour Cortina, 41 rue du Disque, 75013 Paris",
    siret: "82398276400024",
    representative: "Représentée par Clémentine Marcès",
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

export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/a-venir", label: "À venir" },
  { href: "/apercu", label: "Aperçu" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

export const languages = [
  { code: "fr", label: "Français", href: "/" },
  { code: "en", label: "English", href: "/en" },
  { code: "es", label: "Español", href: "/es" },
];

export const heroQuotes = [
  "Si les Andrew Sisters chantaient sur les verrues génitales et la masturbation",
  "Un trio sexy dévoile les secrets cachés et inavoués de la féminité",
  "Un mélange de récits authentiques, de faits historiques, enveloppés dans des harmonies somptueuses",
  "Vous allez certainement apprendre une ou deux choses",
];

export const team = [
  { name: "Charlotte Szabo", role: "Autrice et comédienne", image: "/images/team/charlotte.png" },
  { name: "Marion Poli", role: "Autrice et comédienne", image: "/images/team/marion.png" },
  { name: "Aniqa Charania", role: "Autrice et comédienne", image: "/images/team/aniqa.png" },
  { name: "Inès Amoura", role: "Metteure en scène", image: "/images/team/ines.jpg" },
  { name: "Mallory Cheminet", role: "Chorégraphe", image: "/images/team/mallory.jpg" },
  { name: "Patrice Peyrieras", role: "Compositeur musical", image: "/images/team/patrice.jpg" },
  { name: "Jessica Rock", role: "Pianiste", image: "/images/team/jessica.jpg" },
  { name: "YeoHyeon Jung", role: "Stage Manager", image: "/images/team/yeohyeon.jpg" },
  { name: "Anthony Nyro", role: "Assistant de production", image: "/images/team/anthony.jpg" },
  { name: "Clémentine Marcès", role: "Présidente de l'association Au Haz Art", image: "/images/team/clementine.png" },
];

export const galleries = [
  {
    title: "Théâtre Essaïon, Paris",
    date: "Octobre 2024",
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
    title: "White Bear Theatre, Londres",
    date: "Septembre 2024",
    photos: [
      "/images/gallery/whitebear-01.jpg",
      "/images/gallery/whitebear-02.jpg",
      "/images/gallery/whitebear-03.jpg",
    ],
  },
  {
    title: "Skirts of Fire Festival",
    date: "Mars 2024",
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
    title: "Paris",
    date: "2022",
    photos: [
      "/images/gallery/paris2022-01.jpg",
      "/images/gallery/paris2022-02.jpg",
      "/images/gallery/paris2022-03.jpg",
    ],
  },
];

export const reviews = [
  {
    quote:
      "Une exploration audacieuse, spirituelle et décomplexée de la sexualité féminine. Impossible de ne pas rire aux éclats et de ne pas réfléchir profondément.",
    source: "BilletRéduc, Paris",
    location: "Essaïon Théâtre — 2024",
    url: "https://www.billetreduc.com/spectacle/the-catalogue-of-sexual-anxieties-355517",
    stars: 5,
  },
  {
    quote:
      "Une expérience inoubliable qui aborde des sujets tabous avec humour et finesse. L'alchimie entre les artistes est électrique.",
    source: "Beyond the Curtain",
    location: "White Bear Theatre — 2024",
    url: "https://www.beyondthecurtain.co.uk/2024/09/the-catalogue-of-sexual-anxieties.html",
    stars: 5,
  },
  {
    quote:
      "Rien n'est tabou, et la mise en scène d'Inès Amoura trouve le juste équilibre entre sincérité et folie. C'est personnel, c'est vulnérable, et c'est foutrement drôle !",
    source: "There Ought To Be Clowns",
    location: "Londres — 2024",
    url: "https://oughttobeclowns.com/2024/09/review-the-catalogue-of-sexual-anxieties-white-bear-theatre.html/",
    stars: 5,
  },
  {
    quote:
      "Hilarantes et stimulantes, les Hysterical Ladies sont comme Loose Women sous stéroïdes. Un cabaret / comédie musicale / stand-up étonnamment profond — et même un peu émouvant.",
    source: "London Pub Theatre Magazine",
    location: "Londres — 2024",
    url: "https://www.londonpubtheatres.com/review-the-catalogue-of-sexual-anxieties-at-white-bear-theatre-27-28-september-2024",
    stars: 4,
  },
  {
    quote:
      "Une création aussi imprévisible qu'un orgasme surprise ! Un spectacle fascinant par son audace et son inventivité, traité avec tact, humour et intelligence.",
    source: "Everything Theatre",
    location: "Londres — 2024",
    url: "https://everything-theatre.co.uk/2024/09/review-the-catalogue-of-sexual-insecurities-white-bear-theatre/",
    stars: 4,
  },
  {
    quote:
      "Parlons de sexe. Une escapade divertissante à travers une sélection d'angoisses liées à la sexualité. Ces femmes nous guident avec charme et humour dans le monde labyrinthique du sexe et ses défis.",
    source: "The PEG Reviews",
    location: "Londres — 2024",
    url: "#",
    stars: 3,
  },
  {
    quote:
      "Si vous vous êtes déjà demandé comment les femmes gèrent leur sexualité, ne manquez pas The Catalogue of Sexual Anxieties.",
    source: "Info Edmonton",
    location: "Edmonton Fringe — 2023",
    url: "https://infoedmonton.com/article/fringe-show-recommendations-2023-ongoing/",
    stars: 5,
  },
  {
    quote:
      "Jouons à « Qui est le déviant ? » — un Fringe review.",
    source: "Liz Nichols · 12thnight.ca",
    location: "Edmonton — 2023",
    url: "https://12thnight.ca/2023/08/19/lets-play-whos-the-deviant-the-catalogue-of-sexual-anxieties-a-fringe-review/",
    stars: 5,
  },
];

export const upcomingShows = [
  {
    venue: "The White Bear Theatre",
    city: "Londres",
    dates: "17 – 28 septembre 2025",
    bookingUrl:
      "https://www.whitebeartheatre.co.uk/whatson/the-catalogue-of-sexual-anxieties",
  },
  {
    venue: "Théâtre Essaïon",
    city: "Paris",
    dates: "À confirmer",
    bookingUrl: "https://essaion-theatre.com/spectacle/the-catalogue-of-sexual-anxieties/",
  },
];
