import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { getContent, isLocale } from "@/lib/content";
import { notFound } from "next/navigation";
import YouTubeEmbed from "@/components/youtube-embed";

export default function HomePage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const { site, routes, dict } = getContent(params.lang);
  const t = dict.home;
  const quotes = dict.heroQuotes;

  return (
    <>
      {/* ─────────────────── HERO ─────────────────── */}
      <section className="relative overflow-hidden bg-paper text-ink">
        <div
          className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-carmine/20 blur-[120px]"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-16 lg:py-32">
          <div>
            <p className="catalog-label text-ink-soft">
              <span>{t.badge}</span>
            </p>

            <h1 className="mt-8 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tightest text-ink sm:text-[3.6rem] lg:text-[4.75rem]">
              <span className="text-carmine">«&nbsp;</span>
              {quotes[0]}
              <span className="text-carmine">&nbsp;»</span>
            </h1>

            <div className="mt-10 flex items-center gap-1 text-carmine" aria-label={dict.starsLabel(5)}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-3 font-display text-lg font-semibold italic text-ink">
              {dict.boldOriginal}
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link href={routes.upcoming} className="btn-primary">
                {t.ctaTour}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a href={site.ticketsUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                {t.ctaBook}
              </a>
            </div>
          </div>

          <aside className="space-y-6 border-l border-ink/15 pl-8 lg:pl-10">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-paper-deep shadow-lg">
              <Image
                src="/images/hero-bg.png"
                alt={`${site.title} — ${site.subtitle}`}
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            {quotes.slice(1).map((q, i) => (
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

      {/* ─────────────────── TRAILER ─────────────────── */}
      <section className="section bg-paper-deep">
        <div className="mx-auto max-w-4xl">
          <p className="catalog-label justify-center text-center">{t.video.label}</p>
          <h2 className="mt-6 text-center font-display text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">
            {t.video.heading}
          </h2>
          <div className="mt-10">
            <YouTubeEmbed
              id={site.videos.home.id}
              title={site.videos.home.title}
              playLabel={dict.playVideo}
            />
          </div>
        </div>
      </section>

      {/* ─────────────────── GALLERY TEASER ─────────────────── */}
      <section className="section bg-paper">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-paper-deep">
              <Image
                src="/images/apercu-banner.png"
                alt={t.apercu.heading}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="catalog-label">{t.apercu.label}</p>
              <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">
                {t.apercu.heading}
              </h2>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-soft">
                {t.apercu.body}
              </p>
              <Link href={routes.gallery} className="btn-ghost mt-10">
                {t.apercu.cta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── UPCOMING TEASER ─────────────────── */}
      <section className="section bg-paper-deep">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="lg:order-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-paper">
                <Image
                  src="/images/upcoming-banner.png"
                  alt={t.upcoming.heading}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:order-1">
              <p className="catalog-label">{t.upcoming.label}</p>
              <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">
                {t.upcoming.heading}
              </h2>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-soft">
                {t.upcoming.body}
              </p>
              <Link href={routes.upcoming} className="btn-ghost mt-10">
                {t.upcoming.cta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── SUPPORT ─────────────────── */}
      <section className="section bg-carmine text-ink">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-20">
          <div>
            <p className="catalog-label text-ink before:bg-ink">{t.support.label}</p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl bg-carmine-deep/40">
              <Image
                src="/images/contribute.png"
                alt={t.support.heading}
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">
              {t.support.heading}
            </h2>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-ink/90">
              {t.support.body}
            </p>
            <Link
              href={routes.contact}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-paper px-8 py-3.5 font-sans text-sm font-semibold text-ink transition-colors hover:bg-paper-deep"
            >
              {t.support.cta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────── NEWS TEASER ─────────────────── */}
      <section className="section bg-paper">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper-deep">
              <Image
                src="/images/press/banner-london.png"
                alt={t.news.heading}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="catalog-label">{t.news.label}</p>
              <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">
                {t.news.heading}
              </h2>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-soft">
                {t.news.body}
              </p>
              <Link href={routes.news} className="btn-ghost mt-10">
                {t.news.cta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── CONTACT TEASER ─────────────────── */}
      <section className="section bg-paper-deep">
        <div className="mx-auto max-w-3xl text-center">
          <p className="catalog-label justify-center">{t.contact.label}</p>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">
            {t.contact.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-soft">{t.contact.body}</p>
          <Link href={routes.contact} className="btn-primary mt-10">
            {t.contact.cta}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
