import Image from "next/image";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getContent, isLocale } from "@/lib/content";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = isLocale(params.lang) ? params.lang : "fr";
  const t = getContent(lang).dict.upcomingPage;
  return { title: t.pageTitle, description: t.metaDescription };
}

export default function UpcomingPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const { site, upcomingShows, dict } = getContent(params.lang);
  const t = dict.upcomingPage;

  return (
    <>
      <section className="border-b border-ink/10 bg-paper-deep section">
        <div className="mx-auto max-w-7xl">
          <p className="catalog-label">{t.headerLabel}</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold tracking-tightest leading-[1.02] sm:text-6xl lg:text-7xl">
            {t.h1}
          </h1>
          <p className="mt-6 max-w-2xl font-display text-xl italic text-ink-soft sm:text-2xl">
            {t.subhead}
          </p>
          <a href={site.socials.instagram} target="_blank" rel="noreferrer" className="btn-ghost mt-10">
            {t.instagramCta}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-paper-deep">
            <Image
              src="/images/affiche-tour.png"
              alt={site.subtitle}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <ul className="space-y-10">
            {upcomingShows.map((show, i) => (
              <li key={`${show.venue}-${i}`} className="border-b border-ink/15 pb-10 last:border-b-0">
                <p className="font-sans text-[0.65rem] uppercase tracking-catalog text-brass">
                  {t.performance} {String(i + 1).padStart(2, "0")}
                </p>

                <h2 className="mt-3 font-display text-3xl font-bold tracking-tightest leading-tight sm:text-4xl">
                  {show.venue}
                </h2>

                <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 text-carmine" aria-hidden />
                    <dt className="sr-only">{t.cityLabel}</dt>
                    <dd className="text-base text-ink-soft">{show.city}</dd>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Calendar className="h-4 w-4 text-carmine" aria-hidden />
                    <dt className="sr-only">{t.datesLabel}</dt>
                    <dd className="text-base text-ink-soft">{show.dates}</dd>
                  </div>
                </dl>

                <a href={show.bookingUrl} target="_blank" rel="noreferrer" className="btn-primary mt-8">
                  {t.book}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
