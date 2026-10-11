import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ReviewCard from '@/components/ReviewCard'
import en from '@/data/en'

export const metadata: Metadata = { title: `News — ${en.meta.title}` }

export default function NewsPageEn() {
  const c = en
  return (
    <>
      <NavBar links={c.nav} currentLang="en" currentPath="/en/news" />
      <main id="main" className="pt-nav">
        <section className="section-dark section-pad">
          <div className="content-wrap">
            <h1 className="text-display md:text-hero font-black text-text mb-12">{c.news.heading}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.news.reviews.map((r, i) => <ReviewCard key={i} review={r} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer content={c} />
    </>
  )
}
