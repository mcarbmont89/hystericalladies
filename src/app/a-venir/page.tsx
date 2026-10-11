import Image from 'next/image'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import EventCard from '@/components/EventCard'
import fr from '@/data/fr'

export const metadata: Metadata = {
  title: `À venir — ${fr.meta.title}`,
  description: 'Prochaines représentations du Catalogue des Angoisses Sexuelles.',
}

export default function UpcomingPage() {
  const c = fr
  const u = c.upcoming
  const upcoming = u.events.filter(e => e.status === 'upcoming')
  const past     = u.events.filter(e => e.status === 'past')

  return (
    <>
      <NavBar links={c.nav} currentLang="fr" currentPath="/a-venir" />
      <main id="main" className="pt-nav">

        <section className="section-red section-pad">
          <div className="content-wrap grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-10">
              <h1 className="text-display md:text-hero font-black text-on-accent">{u.heading}</h1>
              {upcoming.length > 0 ? (
                <div className="flex flex-col gap-8">
                  {upcoming.map((e, i) => (
                    <EventCard key={i} event={e} ticketLabel={u.ticketLabel} />
                  ))}
                </div>
              ) : (
                <p className="text-on-accent/80 text-lg">{u.stayTuned}</p>
              )}
            </div>
            <div className="relative h-80 md:h-[480px]">
              <Image
                src="/images/upcoming-pinup.png"
                alt="Illustration vintage — dates à venir"
                fill
                className="object-contain object-right"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {past.length > 0 && (
          <section aria-labelledby="past-heading" className="section-dark section-pad">
            <div className="content-wrap">
              <h2 id="past-heading" className="text-xl font-bold text-muted mb-8">Représentations passées</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {past.map((e, i) => (
                  <EventCard key={i} event={e} ticketLabel={u.ticketLabel} />
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer content={c} />
    </>
  )
}
