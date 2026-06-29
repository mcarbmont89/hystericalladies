import Link from "next/link";
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { site, navigation } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-4 lg:px-16 lg:py-20">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display text-xl italic text-powder">The Hysterical</span>
            <span className="font-display text-2xl font-semibold">Ladies</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-paper/70">
            Une production{" "}
            <a
              href="https://auhazart.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-brass underline-offset-4 hover:text-brass"
            >
              Au Haz Art
            </a>
            .
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-paper/70 transition-colors hover:text-brass"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={site.socials.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="text-paper/70 transition-colors hover:text-brass"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-paper/70 transition-colors hover:text-brass"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-sans text-xs uppercase tracking-catalog text-brass">Plan du site</h3>
          <ul className="mt-5 space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-paper/80 transition-colors hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-sans text-xs uppercase tracking-catalog text-brass">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-paper/80">
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <a href={`mailto:${site.contact.email}`} className="break-all hover:text-paper">
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <div className="flex flex-col gap-0.5">
                <a href={`tel:${site.contact.phoneUK.replace(/\s/g, "")}`} className="hover:text-paper">
                  {site.contact.phoneUK}
                </a>
                <a href={`tel:${site.contact.phoneFR.replace(/\s/g, "")}`} className="hover:text-paper">
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
          <h3 className="font-sans text-xs uppercase tracking-catalog text-brass">Mentions légales</h3>
          <ul className="mt-5 space-y-1.5 text-sm text-paper/70">
            <li>SIRET {site.contact.siret}</li>
            <li>{site.contact.representative}</li>
            <li>Licence {site.contact.license}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-paper/60 sm:flex-row sm:px-10 lg:px-16">
          <p>© {new Date().getFullYear()} Au Haz Art. Tous droits réservés.</p>
          <p>
            Développé avec amour par{" "}
            <a
              href="https://quailabs.tech/"
              target="_blank"
              rel="noreferrer"
              className="text-brass underline decoration-brass underline-offset-4 hover:text-paper"
            >
              QuAI Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
