import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import { getContent, isLocale } from "@/lib/content";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = isLocale(params.lang) ? params.lang : "fr";
  const t = getContent(lang).dict.contactPage;
  return { title: t.pageTitle, description: t.metaDescription };
}

export default function ContactPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const { site, dict } = getContent(params.lang);
  const t = dict.contactPage;

  return (
    <>
      <section className="border-b border-ink/10 bg-paper-deep section">
        <div className="mx-auto max-w-7xl">
          <p className="catalog-label">{t.headerLabel}</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold tracking-tightest leading-[1.02] sm:text-6xl lg:text-7xl">
            {t.h1}
          </h1>
          <p className="mt-6 max-w-2xl font-display text-xl italic text-ink-soft sm:text-2xl">
            {t.subhead}
          </p>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-paper">
        <div className="relative h-56 w-full overflow-hidden sm:h-72 lg:h-[26rem]">
          <Image
            src="/images/contact-banner.png"
            alt={t.h1}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          {/* Form */}
          <div>
            <p className="catalog-label">{t.formLabel}</p>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tightest leading-tight sm:text-4xl">
              {t.formHeading}
            </h2>
            <div className="mt-10">
              <ContactForm form={dict.form} email={site.contact.email} />
            </div>
          </div>

          {/* Contact details */}
          <div className="lg:border-l lg:border-ink/15 lg:pl-12">
            <p className="catalog-label">{t.detailsLabel}</p>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tightest leading-tight sm:text-4xl">
              {t.detailsHeading}
            </h2>

            <dl className="mt-10 space-y-6 text-base text-ink-soft">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-carmine" aria-hidden />
                <div>
                  <dt className="font-sans text-[0.65rem] uppercase tracking-catalog text-ink-soft/60">
                    {t.emailLabel}
                  </dt>
                  <dd className="mt-1">
                    <a href={`mailto:${site.contact.email}`} className="hover:text-carmine">
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-carmine" aria-hidden />
                <div>
                  <dt className="font-sans text-[0.65rem] uppercase tracking-catalog text-ink-soft/60">
                    {t.phoneLabel}
                  </dt>
                  <dd className="mt-1 flex flex-col gap-0.5">
                    <a href={`tel:${site.contact.phoneUK.replace(/\s/g, "")}`} className="hover:text-carmine">
                      {site.contact.phoneUK}
                    </a>
                    <a href={`tel:${site.contact.phoneFR.replace(/\s/g, "")}`} className="hover:text-carmine">
                      {site.contact.phoneFR}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-carmine" aria-hidden />
                <div>
                  <dt className="font-sans text-[0.65rem] uppercase tracking-catalog text-ink-soft/60">
                    {t.addressLabel}
                  </dt>
                  <dd className="mt-1">{site.contact.address}</dd>
                </div>
              </div>
            </dl>

            <div className="rule-carmine" />

            <p className="catalog-label">{t.socialsLabel}</p>
            <ul className="mt-5 flex gap-4">
              <li>
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-11 w-11 items-center justify-center border border-ink/20 text-ink-soft transition-colors hover:border-carmine hover:text-carmine"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  href={site.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="inline-flex h-11 w-11 items-center justify-center border border-ink/20 text-ink-soft transition-colors hover:border-carmine hover:text-carmine"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  href={site.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-11 w-11 items-center justify-center border border-ink/20 text-ink-soft transition-colors hover:border-carmine hover:text-carmine"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </li>
            </ul>

            <div className="rule-carmine" />

            <p className="text-xs leading-relaxed text-ink-soft/70">
              {site.contact.representative}
              <br />
              SIRET {site.contact.siret} — {t.licenseWord} {site.contact.license}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
