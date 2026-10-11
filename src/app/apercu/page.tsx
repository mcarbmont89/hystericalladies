import Image from 'next/image'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import fr from '@/data/fr'

export const metadata: Metadata = {
  title: `Aperçu — ${fr.meta.title}`,
  description: 'Galerie photos du Catalogue des Angoisses Sexuelles — Essaïon, White Bear, Skirts of Fire, Edmonton.',
}

export default function GalleryPage() {
  const c = fr
  const g = c.gallery

  return (
    <>
      <NavBar links={c.nav} currentLang="fr" currentPath="/apercu" />
      <main id="main" className="pt-nav">

        <section className="section-dark section-pad">
          <div className="content-wrap">
            <h1 className="text-display md:text-hero font-black text-text mb-12">{g.heading}</h1>

            <div className="flex flex-col gap-16">
              {g.groups.map(group => (
                <div key={`${group.venue}-${group.year}`}>
                  <h2 className="text-xl font-bold text-muted mb-6 font-sans not-italic">
                    {group.venue} <span className="text-border-input">·</span> {group.year}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {group.photos.map((photo, i) => (
                      <div key={i} className="relative aspect-square bg-surface rounded-sm overflow-hidden">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          loading="lazy"
                          className="object-cover hover:scale-105 transition-transform duration-[350ms]"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Pin-up illustration */}
            <div className="mt-16 relative h-64 md:h-80">
              <Image
                src="/images/apercu-pinup.png"
                alt="Illustration vintage — aperçu"
                fill
                className="object-contain object-right"
                sizes="100vw"
              />
            </div>
          </div>
        </section>

      </main>
      <Footer content={c} />
    </>
  )
}
