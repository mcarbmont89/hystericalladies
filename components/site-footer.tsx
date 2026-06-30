import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";
import type { SiteContent } from "@/lib/content";

export default function SiteFooter({ content }: { content: SiteContent }) {
  const { site, nav, routes, partners, dict } = content;
  const f = dict.footer;

  return (
    <footer className="border-t border-ink/10 bg-paper-deep text-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-4 lg:px-16 lg:py-20">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href={routes.home} className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold italic text-carmine">The Hysterical</span>
            <span className="font-display text-2xl font-extrabold tracking-tightest">Ladies</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-ink-soft">
            {f.productionPrefix}
            <a
              href="https://auhazart.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-brass underline-offset-4 hover:text-brass"
            >
              Au Haz Art
            </a>
            {f.productionSuffix}
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-ink-soft transition-colors hover:text-carmine"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={site.socials.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="text-ink-soft transition-colors hover:text-carmine"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-ink-soft transition-colors hover:text-carmine"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-sans text-xs uppercase tracking-catalog text-brass">{f.sitemap}</h3>
          <ul className="mt-5 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-sans text-xs uppercase tracking-catalog text-brass">{f.contact}</h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-soft">
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <a href={`mailto:${site.contact.email}`} className="break-all hover:text-ink">
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <div className="flex flex-col gap-0.5">
                <a href={`tel:${site.contact.phoneUK.replace(/\s/g, "")}`} className="hover:text-ink">
                  {site.contact.phoneUK}
                </a>
                <a href={`tel:${site.contact.phoneFR.replace(/\s/g, "")}`} className="hover:text-ink">
                  {site.contact.phoneFR}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>{site.contact.address}</span>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-sans text-xs uppercase tracking-catalog text-brass">{f.legal}</h3>
          <ul className="mt-5 space-y-1.5 text-sm text-ink-soft">
            <li>SIRET {site.contact.siret}</li>
            <li>{site.contact.representative}</li>
            <li>{f.licenseWord} {site.contact.license}</li>
          </ul>
        </div>
      </div>

      {/* Partners */}
      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:px-10 lg:px-16">
          <p className="font-sans text-[0.65rem] uppercase tracking-catalog text-brass">
            {f.partnersLabel}
          </p>
          <ul className="flex flex-wrap items-center gap-8">
            {partners.map((p) => (
              <li key={p.id}>
                <a href={p.url} target="_blank" rel="noreferrer" aria-label={p.name}>
                  <div className="relative h-12 w-28 opacity-70 transition-opacity hover:opacity-100">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="112px"
                      className="object-contain object-left"
                    />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-ink-soft sm:flex-row sm:px-10 lg:px-16">
          <p>© {new Date().getFullYear()} Au Haz Art. {f.rights}</p>
          <p>
            {f.craftedBy}{" "}
            <a
              href="https://quailabs.tech/"
              target="_blank"
              rel="noreferrer"
              className="text-carmine underline decoration-carmine underline-offset-4 hover:text-ink"
            >
              QuAI Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
