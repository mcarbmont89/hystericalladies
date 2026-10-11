import Image from 'next/image'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import SocialIconBar from '@/components/SocialIconBar'
import en from '@/data/en'

export const metadata: Metadata = { title: `Contact — ${en.meta.title}` }

export default function ContactPageEn() {
  const c = en; const ct = c.contact
  return (
    <>
      <NavBar links={c.nav} currentLang="en" currentPath="/en/contact" />
      <main id="main" className="pt-nav">
        <section className="section-red section-pad">
          <div className="content-wrap grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-8">
              <h1 className="text-display md:text-hero font-black text-on-accent">{ct.heading}</h1>
              <ContactForm content={ct} />
            </div>
            <div className="flex flex-col gap-8 pt-0 md:pt-24">
              <address className="not-italic text-on-accent/80 space-y-3 text-sm leading-relaxed">
                <p className="font-semibold text-on-accent">{ct.manager}</p>
                <p>{ct.address}</p>
                <p>
                  <a href="tel:+447737135135" className="hover:text-on-accent transition-colors">+44 7737 135135</a><br />
                  <a href="tel:+33688078873" className="hover:text-on-accent transition-colors">+33 6 88 07 88 73</a>
                </p>
                <p>
                  <a href="mailto:manager@hystericalladies.net"
                    className="underline underline-offset-2 hover:text-on-accent transition-colors">
                    manager@hystericalladies.net
                  </a>
                </p>
              </address>
              <SocialIconBar className="[&_a]:text-on-accent/70 [&_a:hover]:text-on-accent" />
              <div className="relative h-64">
                <Image src="/images/contact-pinup.png" alt="The Hysterical Ladies in rehearsal"
                  fill className="object-contain object-left" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer content={c} />
    </>
  )
}
