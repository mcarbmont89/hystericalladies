import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getContent, isLocale } from "@/lib/content";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = isLocale(params.lang) ? params.lang : "fr";
  const t = getContent(lang).dict.about;
  return { title: t.pageTitle, description: t.metaDescription };
}

export default function AboutPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const { site, routes, team, dict } = getContent(params.lang);
  const t = dict.about;

  return (
    <>
      {/* Header */}
      <section className="border-b border-ink/10 bg-paper-deep section">
        <div className="mx-auto max-w-7xl">
          <p className="catalog-label">{t.headerLabel}</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold tracking-tightest leading-[1.05] sm:text-6xl lg:text-7xl">
            {site.subtitle}
          </h1>
          <p className="mt-6 max-w-2xl font-display text-xl italic text-ink-soft sm:text-2xl">
            {t.subhead}
          </p>
        </div>
      </section>

      {/* Synopsis */}
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-paper-deep">
            <Image
              src="/images/about-hero.png"
              alt={site.subtitle}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-base leading-relaxed text-ink-soft">
              {t.synopsis.p1a}
              <strong className="text-ink">{t.synopsis.question}</strong>
            </p>
            <div className="rule-carmine" />
            <p className="text-base leading-relaxed text-ink-soft">{t.synopsis.p2}</p>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">{t.synopsis.p3}</p>

            <a href={site.ticketsUrl} target="_blank" rel="noreferrer" className="btn-primary mt-10">
              {t.ctaBook}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-paper-deep">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <p className="catalog-label">{t.storyLabel}</p>
            <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tightest leading-tight sm:text-5xl">
              {t.storyHeading}
            </h2>
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl bg-paper">
              <Image
                src="/images/story-1.jpg"
                alt={t.storyHeading}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink-soft">
            <p>{t.story.p1}</p>
            <p>{t.story.p2}</p>
            <p>
              {t.story.p3a}
              <strong className="text-ink">{t.story.p3strong}</strong>
              {t.story.p3b}
            </p>
            <p>
              {t.story.p4a}
              <strong className="text-ink">Patrice Peyrieras</strong>
              {t.story.p4b}
            </p>
            <p>{t.story.p5}</p>
            <p>{t.story.p6}</p>
          </div>
        </div>
      </section>

      {/* Story banner */}
      <section className="bg-paper">
        <div className="relative h-56 w-full overflow-hidden sm:h-72 lg:h-96">
          <Image
            src="/images/story-2.jpg"
            alt={site.subtitle}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Team grid */}
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <p className="catalog-label">{t.teamLabel}</p>
          <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tightest leading-tight sm:text-5xl">
            {t.teamHeading}
          </h2>

          <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {team.map((member, i) => (
              <li key={member.name}>
                <div className="relative aspect-[3/4] overflow-hidden bg-paper-deep">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  />
                </div>
                <p className="mt-4 font-sans text-[0.65rem] uppercase tracking-catalog text-brass">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-display text-xl font-medium">{member.name}</h3>
                <p className="mt-0.5 font-display text-base italic text-ink-soft">{member.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-paper-deep text-ink">
        <div className="mx-auto max-w-3xl text-center">
          <p className="catalog-label justify-center">{t.ctaLabel}</p>
          <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tightest leading-tight sm:text-5xl">
            {t.ctaHeading}
          </h2>
          <Link href={routes.upcoming} className="btn-primary mt-10">
            {t.ctaTour}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
