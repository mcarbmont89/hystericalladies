import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Heart } from "lucide-react";
import { heroQuotes, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ─────────────────── HERO — BLACK STAGE ─────────────────── */}
      <section className="relative overflow-hidden bg-paper text-ink">
        {/* Soft scarlet glow */}
        <div
          className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-carmine/20 blur-[120px]"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-16 lg:py-32">
          <div>
            <p className="catalog-label text-ink-soft">
              <span>N° 01 — Le Spectacle</span>
            </p>

            <h1 className="mt-8 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tightest text-ink sm:text-[3.6rem] lg:text-[4.75rem]">
              <span className="text-carmine">«&nbsp;</span>
              {heroQuotes[0]}
              <span className="text-carmine">&nbsp;»</span>
            </h1>

            <div className="mt-10 flex items-center gap-1 text-carmine" aria-label="5 étoiles">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-3 font-display text-lg font-semibold italic text-ink">
              « It&apos;s a bold original »
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/a-venir" className="btn-primary">
                Dates de tournée
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={site.ticketsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Réserver
              </a>
            </div>
          </div>

          {/* Side quote stack */}
          <aside className="space-y-6 border-l border-ink/15 pl-8 lg:pl-10">
            {heroQuotes.slice(1).map((q, i) => (
              <blockquote
                key={i}
                className="font-display text-lg font-medium italic leading-snug text-ink-soft sm:text-xl"
              >
                <span className="text-carmine">“</span>
                {q}
                <span className="text-carmine">”</span>
              </blockquote>
            ))}
          </aside>
        </div>
      </section>

      {/* ─────────────────── APERÇU ─────────────────── */}
      <section className="section bg-paper">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-paper-deep">
              <Image
                src="/images/apercu-banner.png"
                alt="Aperçu du spectacle"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="catalog-label">N° 02 — Aperçu</p>
              <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">
                Jetez un coup d&apos;œil à la galerie pour suivre nos escapades.
              </h2>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-soft">
                Paris, Londres, Edmonton — chaque salle ajoute une page au catalogue.
                Découvrez les photos de scène, les coulisses et les souvenirs des tournées
                qui ont jalonné notre histoire.
              </p>
              <Link href="/apercu" className="btn-ghost mt-10">
                Voir la galerie
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── À VENIR ─────────────────── */}
      <section className="section bg-paper-deep">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="lg:order-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-paper">
                <Image
                  src="/images/upcoming-banner.png"
                  alt="Affiche prochaine tournée"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:order-1">
              <p className="catalog-label">N° 03 — À venir</p>
              <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">
                Découvrez nos prochaines dates de tournée.
              </h2>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-soft">
                Nous écumons les théâtres et les festivals : Paris, Londres, et bien d&apos;autres.
                Inscrivez-vous pour ne rien manquer.
              </p>
              <Link href="/a-venir" className="btn-ghost mt-10">
                Dates de tournée
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── CONTRIBUER — RED FEATURE ─────────────────── */}
      <section className="section bg-carmine text-ink">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-20">
          <div>
            <p className="catalog-label text-ink before:bg-ink">N° 04 — Contribuer</p>
            <Heart className="mt-8 h-12 w-12 fill-ink text-ink" strokeWidth={1.5} aria-hidden />
          </div>
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">
              Soutenez notre tournée.
            </h2>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-ink/90">
              Le Catalogue des Angoisses Sexuelles vit grâce à un public engagé. Votre don
              finance les costumes, la musique originale, les salles et les déplacements de
              la troupe. Chaque contribution prolonge la tournée d&apos;un soir de plus.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-paper px-8 py-3.5 font-sans text-sm font-semibold text-ink transition-colors hover:bg-paper-deep"
            >
              Faire un don
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────── ACTUALITÉS ─────────────────── */}
      <section className="section bg-paper">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper-deep">
              <Image
                src="/images/press/banner-london.png"
                alt="Presse et critiques"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="catalog-label">N° 05 — Actualités</p>
              <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">
                Ce que la presse dit de nous.
              </h2>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-soft">
                BilletRéduc, There Ought To Be Clowns, London Pub Theatre Magazine, Everything
                Theatre, Info Edmonton… Lisez les critiques des théâtres et festivals où nous
                avons joué.
              </p>
              <Link href="/actualites" className="btn-ghost mt-10">
                Lire les critiques
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── CONTACT TEASER ─────────────────── */}
      <section className="section bg-paper-deep">
        <div className="mx-auto max-w-3xl text-center">
          <p className="catalog-label justify-center">N° 06 — Contact</p>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">
            Programmateurs, presse, ou simple curieux ?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            Écrivez-nous pour toute question relative aux tournées, à la programmation ou aux
            collaborations.
          </p>
          <Link href="/contact" className="btn-primary mt-10">
            Nous écrire
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
