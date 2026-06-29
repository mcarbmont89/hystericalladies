import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Heart } from "lucide-react";
import { heroQuotes, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ─────────────────── HERO — DARK PLAYBILL ─────────────────── */}
      <section className="relative overflow-hidden bg-ink text-paper">
        {/* Theatre curtain hatching */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #F1E8D9 0, #F1E8D9 1px, transparent 1px, transparent 80px)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-16 lg:py-32">
          <div>
            <p className="catalog-label text-brass before:bg-brass">
              <span>N° 01 — Le Spectacle</span>
            </p>

            <h1 className="mt-8 font-display text-[2.5rem] font-light leading-[1.05] tracking-tight sm:text-[3.5rem] lg:text-[4.5rem]">
              <span className="italic text-powder">«&nbsp;</span>
              {heroQuotes[0]}
              <span className="italic text-powder">&nbsp;»</span>
            </h1>

            <div className="mt-10 flex items-center gap-1 text-brass" aria-label="5 étoiles">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-3 font-display text-lg italic text-paper/70">
              « It's a bold original »
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/a-venir"
                className="inline-flex items-center gap-2 bg-carmine px-7 py-3.5 font-sans text-sm uppercase tracking-catalog text-paper transition-colors hover:bg-carmine-deep"
              >
                Dates de tournée
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={site.ticketsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-paper/40 px-7 py-3.5 font-sans text-sm uppercase tracking-catalog text-paper transition-colors hover:border-brass hover:text-brass"
              >
                Réserver
              </a>
            </div>
          </div>

          {/* Side quote stack — vintage program style */}
          <aside className="space-y-6 border-l border-paper/20 pl-8 lg:pl-10">
            {heroQuotes.slice(1).map((q, i) => (
              <blockquote key={i} className="font-display text-lg italic text-paper/80 sm:text-xl">
                <span className="text-brass">“</span>
                {q}
                <span className="text-brass">”</span>
              </blockquote>
            ))}
          </aside>
        </div>
      </section>

      {/* ─────────────────── APERÇU ─────────────────── */}
      <section className="section bg-paper">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative aspect-[3/4] overflow-hidden bg-paper-deep">
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
              <h2 className="mt-6 font-display text-4xl font-light leading-tight sm:text-5xl">
                Jetez un coup d'œil à la galerie pour suivre nos escapades.
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
              <div className="relative aspect-[3/4] overflow-hidden bg-paper-deep">
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
              <h2 className="mt-6 font-display text-4xl font-light leading-tight sm:text-5xl">
                Découvrez nos prochaines dates de tournée.
              </h2>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-soft">
                Nous écumons les théâtres et les festivals : Paris, Londres, et bien d'autres.
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

      {/* ─────────────────── CONTRIBUER ─────────────────── */}
      <section className="section bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-20">
          <div>
            <p className="catalog-label text-brass before:bg-brass">N° 04 — Contribuer</p>
            <Heart className="mt-8 h-10 w-10 text-carmine" strokeWidth={1.5} aria-hidden />
          </div>
          <div>
            <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">
              Soutenez notre tournée.
            </h2>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-paper/80">
              Le Catalogue des Angoisses Sexuelles vit grâce à un public engagé. Votre don
              finance les costumes, la musique originale, les salles et les déplacements de
              la troupe. Chaque contribution prolonge la tournée d'un soir de plus.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 bg-carmine px-7 py-3.5 font-sans text-sm uppercase tracking-catalog text-paper transition-colors hover:bg-carmine-deep"
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
            <div className="relative aspect-[4/3] overflow-hidden bg-paper-deep">
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
              <h2 className="mt-6 font-display text-4xl font-light leading-tight sm:text-5xl">
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
          <h2 className="mt-6 font-display text-4xl font-light leading-tight sm:text-5xl">
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
