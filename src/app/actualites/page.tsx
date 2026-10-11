import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ReviewCard from '@/components/ReviewCard'
import fr from '@/data/fr'

export const metadata: Metadata = {
  title: `Actualités — ${fr.meta.title}`,
  description: 'Revue de presse du Catalogue des Angoisses Sexuelles — critiques et articles.',
}

export default function NewsPage() {
  const c = fr
  const n = c.news

  return (
    <>
      <NavBar links={c.nav} currentLang="fr" currentPath="/actualites" />
      <main id="main" className="pt-nav">

        <section className="section-dark section-pad">
          <div className="content-wrap">
            <h1 className="text-display md:text-hero font-black text-text mb-12">{n.heading}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {n.reviews.map((r, i) => (
                <ReviewCard key={i} review={r} />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer content={c} />
    </>
  )
}
