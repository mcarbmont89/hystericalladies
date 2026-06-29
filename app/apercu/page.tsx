import Image from "next/image";
import { galleries } from "@/lib/content";

export const metadata = {
  title: "Aperçu",
  description: "Galerie photo des tournées des Hysterical Ladies à Paris, Londres, Edmonton.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-paper-deep section">
        <div className="mx-auto max-w-7xl">
          <p className="catalog-label">N° 01 — Galerie</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-light leading-[1.05] sm:text-6xl lg:text-7xl">
            Aperçu
          </h1>
          <p className="mt-6 max-w-2xl font-display text-xl italic text-ink-soft sm:text-2xl">
            Jetez un coup d'œil à la galerie pour suivre nos escapades actuelles et passées.
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
                <h2 className="mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl">
                  {gallery.title}
                </h2>
              </div>
              <p className="font-display text-base italic text-ink-soft sm:text-lg">
                {gallery.date}
              </p>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {gallery.photos.map((src, i) => (
                <li key={src}>
                  <div
                    className={`relative ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"} overflow-hidden bg-paper-deep`}
                  >
                    <Image
                      src={src}
                      alt={`${gallery.title} — photo ${i + 1}`}
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
