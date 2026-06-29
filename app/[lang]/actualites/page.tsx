import { ArrowUpRight, Star } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getContent, isLocale } from "@/lib/content";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = isLocale(params.lang) ? params.lang : "fr";
  const t = getContent(lang).dict.newsPage;
  return { title: t.pageTitle, description: t.metaDescription };
}

export default function NewsPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const { reviews, dict } = getContent(params.lang);
  const t = dict.newsPage;

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
        </div>
      </section>

      {/* Quote grid */}
      <section className="section bg-paper">
        <div className="mx-auto max-w-7xl">
          <ul className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {reviews.map((r, i) => (
              <li key={i} className="quote-card">
                {r.stars > 0 && (
                  <div className="mb-5 flex items-center gap-1 text-carmine" aria-label={dict.starsLabel(r.stars)}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`h-4 w-4 ${s < r.stars ? "fill-current" : "fill-none stroke-current opacity-30"}`}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                )}

                <blockquote className="font-display text-lg leading-snug text-ink sm:text-xl">
                  <span className="mr-1 font-display text-3xl italic text-carmine">“</span>
                  {r.quote}
                  <span className="ml-1 font-display text-3xl italic text-carmine">”</span>
                </blockquote>

                <footer className="mt-6 border-t border-ink/15 pt-5">
                  <p className="font-sans text-[0.7rem] uppercase tracking-catalog text-ink-soft">
                    {r.location}
                  </p>
                  {r.url && r.url !== "#" ? (
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 font-display text-base italic text-carmine hover:text-carmine-deep"
                    >
                      {r.source}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  ) : (
                    <p className="mt-1.5 font-display text-base italic text-ink-soft">{r.source}</p>
                  )}
                </footer>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured pull-quote */}
      <section className="section bg-carmine text-ink">
        <div className="mx-auto max-w-4xl text-center">
          <Star className="mx-auto h-7 w-7 fill-current text-ink" strokeWidth={0} aria-hidden />
          <blockquote className="mt-8 font-display text-3xl font-extrabold tracking-tightest leading-[1.08] sm:text-4xl lg:text-5xl">
            «&nbsp;{t.featuredQuote}{" "}
            <em className="not-italic underline decoration-ink/40 underline-offset-4">
              The Catalogue of Sexual Anxieties
            </em>
            .&nbsp;»
          </blockquote>
          <p className="mt-8 font-sans text-xs font-semibold uppercase tracking-catalog text-ink/80">
            {t.featuredAttribution}
          </p>
        </div>
      </section>
    </>
  );
}
