import Image from 'next/image'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import fr from '@/data/fr'

export const metadata: Metadata = {
  title: `À propos — ${fr.meta.title}`,
  description: fr.about.intro,
}

export default function AboutPage() {
  const c = fr
  const a = c.about

  return (
    <>
      <NavBar links={c.nav} currentLang="fr" currentPath="/a-propos" />
      <main id="main" className="pt-nav">

        {/* Hero */}
        <section className="section-dark section-pad">
          <div className="content-wrap grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-display md:text-hero font-black text-text">{a.heading}</h1>
              <p className="text-muted leading-relaxed text-base">{a.intro}</p>
            </div>
            <div className="relative h-80 md:h-[480px]">
              <Image
                src="/images/about-hero.png"
                alt="Charlotte Szabo, Marion Poli et Aniqa Charania sur scène"
                fill
                className="object-cover object-center rounded-md"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Performers — red section */}
        <section aria-labelledby="performers-heading" className="section-red section-pad">
          <div className="content-wrap">
            <h2 id="performers-heading" className="text-display font-black text-on-accent mb-10">
              Le trio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {a.performers.map(p => (
                <article key={p.name} className="flex flex-col gap-3">
                  <h3 className="text-xl font-black text-on-accent">{p.name}</h3>
                  <p className="text-sm font-semibold text-on-accent/70 uppercase tracking-wide">{p.role}</p>
                  <p className="text-on-accent/80 leading-relaxed text-sm">{p.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Creative team — dark section */}
        <section aria-labelledby="crew-heading" className="section-dark section-pad">
          <div className="content-wrap">
            <h2 id="crew-heading" className="text-display font-black text-text mb-10">
              Équipe artistique
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {a.crew.map(m => (
                <li key={m.name} className="bg-surface border border-border rounded-md p-5 shadow-card">
                  <p className="font-semibold text-text">{m.name}</p>
                  <p className="text-sm text-muted mt-1">{m.role}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted">
              <span className="font-semibold text-text">{a.associationLabel} :</span>{' '}
              {a.associationPerson}
            </p>
          </div>
        </section>

      </main>
      <Footer content={c} />
    </>
  )
}
