import Image from 'next/image'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import EventCard from '@/components/EventCard'
import en from '@/data/en'

export const metadata: Metadata = { title: `Upcoming — ${en.meta.title}` }

export default function UpcomingPageEn() {
  const c = en; const u = c.upcoming
  const upcoming = u.events.filter(e => e.status === 'upcoming')
  return (
    <>
      <NavBar links={c.nav} currentLang="en" currentPath="/en/upcoming" />
      <main id="main" className="pt-nav">
        <section className="section-red section-pad">
          <div className="content-wrap grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-10">
              <h1 className="text-display md:text-hero font-black text-on-accent">{u.heading}</h1>
              {upcoming.length > 0
                ? upcoming.map((e, i) => <EventCard key={i} event={e} ticketLabel={u.ticketLabel} />)
                : <p className="text-on-accent/80 text-lg">{u.stayTuned}</p>}
            </div>
            <div className="relative h-80 md:h-[480px]">
              <Image src="/images/upcoming-pinup.png" alt="Vintage illustration — upcoming dates"
                fill className="object-contain object-right" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </section>
      </main>
      <Footer content={c} />
    </>
  )
}
