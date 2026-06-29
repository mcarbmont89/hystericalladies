import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getContent, isLocale } from "@/lib/content";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = isLocale(params.lang) ? params.lang : "fr";
  const t = getContent(lang).dict.galleryPage;
  return { title: t.pageTitle, description: t.metaDescription };
}

export default function GalleryPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const { galleries, dict } = getContent(params.lang);
  const t = dict.galleryPage;

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

      {galleries.map((gallery, idx) => (
        <section
          key={gallery.title}
          className={`section ${idx % 2 === 0 ? "bg-paper" : "bg-paper-deep"}`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex items-baseline justify-between gap-6 border-b border-ink/15 pb-6">
              <div>
                <p className="font-sans text-[0.65rem] uppercase tracking-catalog text-brass">
                  N° {String(idx + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tightest leading-tight sm:text-4xl">
                  {gallery.title}
                </h2>
              </div>
              <p className="font-display text-base italic text-ink-soft sm:text-lg">{gallery.date}</p>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {gallery.photos.map((src, i) => (
                <li key={src}>
                  <div
                    className={`relative ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"} overflow-hidden rounded-xl bg-paper-deep`}
                  >
                    <Image
                      src={src}
                      alt={`${gallery.title} — ${i + 1}`}
                      fill
                      sizes="(min-width: 1024px) 24vw, (min-width: 768px) 32vw, 48vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
