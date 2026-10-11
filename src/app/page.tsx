import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ReviewCard from '@/components/ReviewCard'
import EventCard from '@/components/EventCard'
import SocialIconBar from '@/components/SocialIconBar'
import StarRating from '@/components/StarRating'
import fr from '@/data/fr'

export const metadata: Metadata = {
  title: fr.meta.title,
  description: fr.meta.description,
}

export default function HomePage() {
  const c = fr
  const upcomingEvents = c.upcoming.events.filter(e => e.status === 'upcoming')

  return (
    <>
      <NavBar links={c.nav} currentLang="fr" currentPath="/" />

      <main id="main">

        {/* S01 — Hero */}
        <section aria-label="Présentation du spectacle" className="relative w-full pt-nav">
          <div className="relative w-full aspect-[16/7] md:aspect-[16/6]">
            <Image
              src="/images/hero-pinup.png"
              alt={c.home.heroAlt}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </section>

        {/* Taglines — dark section */}
        <section aria-label="Le spectacle" className="section-dark section-pad">
          <div className="content-wrap flex flex-col gap-8 items-center text-center">
            {c.home.taglines.map((t, i) => (
              <p key={i}
                className={`font-display italic text-text max-w-3xl
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

        {/* Upcoming — red section with marquee pin-up */}
        <section id="a-venir" aria-labelledby="upcoming-heading" className="section-red section-pad">
          <div className="content-wrap grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <h2 id="upcoming-heading" className="text-3xl md:text-display font-black text-on-accent">
                {c.home.sectionTitles.upcoming}
              </h2>
              {upcomingEvents.length > 0 ? (
                <div className="flex flex-col gap-6">
                  {upcomingEvents.map((e, i) => (
                    <EventCard key={i} event={e} ticketLabel={c.upcoming.ticketLabel} />
                  ))}
                </div>
              ) : (
                <p className="text-on-accent/80">{c.upcoming.stayTuned}</p>
              )}
              <Link href="/a-venir"
                className="self-start text-on-accent font-bold font-display italic text-lg
                           border-2 border-on-accent px-6 py-2 rounded-sm hover:bg-on-accent
                           hover:text-accent transition-colors duration-[200ms]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-accent focus-visible:ring-offset-2 focus-visible:ring-offset-accent">
                {c.home.upcomingCta} →
              </Link>
            </div>
            <div className="relative h-72 md:h-96">
              <Image
                src="/images/upcoming-pinup.png"
                alt="Illustration rétro — dates à venir"
                fill
                className="object-contain object-right"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Contribute — dark section with pin-up */}
        <section aria-labelledby="contribute-heading" className="section-dark section-pad">
          <div className="content-wrap grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-72 md:h-96 order-2 md:order-1">
              <Image
                src="/images/contribuer-pinup.png"
                alt="Illustration rétro — soutenir le spectacle"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-6 order-1 md:order-2">
              <h2 id="contribute-heading" className="text-3xl md:text-display font-black text-text">
                {c.home.sectionTitles.contribute}
              </h2>
              <p className="text-muted leading-relaxed">{c.home.contributeText}</p>
              <a href="mailto:manager@hystericalladies.net?subject=Don"
                className="self-start bg-accent text-on-accent font-bold font-display italic text-lg
                           px-8 py-3 rounded-sm hover:opacity-90 transition-opacity duration-[200ms]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg">
                {c.home.contributeButton}
              </a>
            </div>
          </div>
        </section>

        {/* Overview / Aperçu — red section */}
        <section aria-labelledby="overview-heading" className="section-red section-pad">
          <div className="content-wrap grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h2 id="overview-heading" className="text-3xl md:text-display font-black text-on-accent">
                {c.home.sectionTitles.overview}
              </h2>
              <p className="text-on-accent/80 leading-relaxed">
                Un spectacle musical où trois femmes explorent, avec humour et sans tabous, les mystères et les angoisses de la sexualité féminine.
              </p>
              <Link href="/apercu"
                className="self-start text-on-accent font-bold font-display italic text-lg
                           border-2 border-on-accent px-6 py-2 rounded-sm hover:bg-on-accent
                           hover:text-accent transition-colors duration-[200ms]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-accent">
                Voir les photos →
              </Link>
            </div>
            <div className="relative h-72 md:h-96">
              <Image
                src="/images/apercu-pinup.png"
                alt="Illustration rétro — aperçu du spectacle"
                fill
                className="object-contain object-right"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* News preview — dark section */}
        <section aria-labelledby="news-heading" className="section-dark section-pad">
          <div className="content-wrap">
            <h2 id="news-heading" className="text-3xl md:text-display font-black text-text mb-10">
              {c.home.sectionTitles.news}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.news.reviews.slice(0, 3).map((r, i) => (
                <ReviewCard key={i} review={r} />
              ))}
            </div>
            <div className="mt-10">
              <Link href="/actualites"
                className="font-bold font-display italic text-lg text-accent hover:opacity-80 transition-opacity">
                Toute la presse →
              </Link>
            </div>
          </div>
        </section>

        {/* Contact teaser — red section */}
        <section aria-labelledby="contact-heading" className="section-red section-pad">
          <div className="content-wrap grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h2 id="contact-heading" className="text-3xl md:text-display font-black text-on-accent">
                {c.home.sectionTitles.contact}
              </h2>
              <div className="text-on-accent/80 space-y-1 text-sm">
                <p>
                  <a href="mailto:manager@hystericalladies.net"
                    className="hover:text-on-accent transition-colors underline underline-offset-2">
                    manager@hystericalladies.net
                  </a>
                </p>
                <p>+44 7737 135135 · +33 6 88 07 88 73</p>
              </div>
              <SocialIconBar className="[&_a]:text-on-accent/70 [&_a:hover]:text-on-accent" />
              <Link href="/contact"
                className="self-start text-on-accent font-bold font-display italic text-lg
                           border-2 border-on-accent px-6 py-2 rounded-sm hover:bg-on-accent
                           hover:text-accent transition-colors duration-[200ms]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-accent">
                Écrire un message →
              </Link>
            </div>
            <div className="relative h-72 md:h-96">
              <Image
                src="/images/contact-pinup.png"
                alt="Les Hysterical Ladies en répétition"
                fill
                className="object-contain object-right"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

      </main>

      <Footer content={c} />
    </>
  )
}
