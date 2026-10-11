import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ReviewCard from '@/components/ReviewCard'
import EventCard from '@/components/EventCard'
import SocialIconBar from '@/components/SocialIconBar'
import StarRating from '@/components/StarRating'
import en from '@/data/en'

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
}

export default function HomePageEn() {
  const c = en
  const upcomingEvents = c.upcoming.events.filter(e => e.status === 'upcoming')

  return (
    <>
      <NavBar links={c.nav} currentLang="en" currentPath="/en" />
      <main id="main">

        <section aria-label="Show introduction" className="relative w-full pt-nav">
          <div className="relative w-full aspect-[16/7] md:aspect-[16/6]">
            <Image src="/images/hero-pinup.png" alt={c.home.heroAlt}
              fill priority className="object-cover object-center" sizes="100vw" />
          </div>
        </section>

        <section aria-label="The show" className="section-dark section-pad">
          <div className="content-wrap flex flex-col gap-8 items-center text-center">
            {c.home.taglines.map((t, i) => (
              <p key={i} className={`font-display italic text-text max-w-3xl
                ${i === 0 ? 'text-xl md:text-display font-black' : 'text-lg md:text-xl font-bold text-muted'}`}>
                &ldquo;{t}&rdquo;
              </p>
            ))}
            <div className="flex flex-col items-center gap-2 mt-4">
              <StarRating rating={c.home.endorsement.rating} size="lg" />
              <p className="text-muted text-sm italic">{c.home.endorsement.quote}</p>
            </div>
          </div>
        </section>

        <section id="upcoming" aria-labelledby="upcoming-en" className="section-red section-pad">
          <div className="content-wrap grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <h2 id="upcoming-en" className="text-3xl md:text-display font-black text-on-accent">
                {c.home.sectionTitles.upcoming}
              </h2>
              {upcomingEvents.length > 0
                ? upcomingEvents.map((e, i) => <EventCard key={i} event={e} ticketLabel={c.upcoming.ticketLabel} />)
                : <p className="text-on-accent/80">{c.upcoming.stayTuned}</p>}
              <Link href="/en/upcoming"
                className="self-start text-on-accent font-bold font-display italic text-lg
                           border-2 border-on-accent px-6 py-2 rounded-sm hover:bg-on-accent hover:text-accent
                           transition-colors duration-[200ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-accent">
                {c.home.upcomingCta} →
              </Link>
            </div>
            <div className="relative h-72 md:h-96">
              <Image src="/images/upcoming-pinup.png" alt="Retro illustration — upcoming dates"
                fill className="object-contain object-right" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </section>

        <section aria-labelledby="contribute-en" className="section-dark section-pad">
          <div className="content-wrap grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-72 md:h-96 order-2 md:order-1">
              <Image src="/images/contribuer-pinup.png" alt="Retro illustration — support the show"
                fill className="object-contain object-left" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="flex flex-col gap-6 order-1 md:order-2">
              <h2 id="contribute-en" className="text-3xl md:text-display font-black text-text">
                {c.home.sectionTitles.contribute}
              </h2>
              <p className="text-muted leading-relaxed">{c.home.contributeText}</p>
              <a href="mailto:manager@hystericalladies.net?subject=Donation"
                className="self-start bg-accent text-on-accent font-bold font-display italic text-lg
                           px-8 py-3 rounded-sm hover:opacity-90 transition-opacity">
                {c.home.contributeButton}
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="news-en" className="section-dark section-pad">
          <div className="content-wrap">
            <h2 id="news-en" className="text-3xl md:text-display font-black text-text mb-10">
              {c.home.sectionTitles.news}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.news.reviews.slice(0, 3).map((r, i) => <ReviewCard key={i} review={r} />)}
            </div>
            <div className="mt-10">
              <Link href="/en/news" className="font-bold font-display italic text-lg text-accent hover:opacity-80 transition-opacity">
                All press →
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="contact-en" className="section-red section-pad">
          <div className="content-wrap grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h2 id="contact-en" className="text-3xl md:text-display font-black text-on-accent">
                {c.home.sectionTitles.contact}
              </h2>
              <p className="text-on-accent/80 text-sm">
                <a href="mailto:manager@hystericalladies.net" className="underline underline-offset-2 hover:text-on-accent">
                  manager@hystericalladies.net
                </a>
              </p>
              <SocialIconBar className="[&_a]:text-on-accent/70 [&_a:hover]:text-on-accent" />
              <Link href="/en/contact"
                className="self-start text-on-accent font-bold font-display italic text-lg
                           border-2 border-on-accent px-6 py-2 rounded-sm hover:bg-on-accent hover:text-accent transition-colors">
                Send a message →
              </Link>
            </div>
            <div className="relative h-72 md:h-96">
              <Image src="/images/contact-pinup.png" alt="The Hysterical Ladies in rehearsal"
                fill className="object-contain object-right" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </section>

      </main>
      <Footer content={c} />
    </>
  )
}
