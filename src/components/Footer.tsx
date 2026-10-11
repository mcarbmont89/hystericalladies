import type { SiteContent } from '@/data/types'
import SocialIconBar from './SocialIconBar'

interface Props {
  content: SiteContent
}

export default function Footer({ content }: Props) {
  const { footer, contact } = content
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-content mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-muted">
        <address className="not-italic leading-relaxed">
          <p className="font-semibold text-text mb-2">{footer.company}</p>
          <p>{contact.address}</p>
          <p className="mt-2">
            <a href="tel:+447737135135" className="hover:text-text transition-colors">+44 7737 135135</a>
            {' · '}
            <a href="tel:+33688078873" className="hover:text-text transition-colors">+33 6 88 07 88 73</a>
          </p>
          <p className="mt-1">
            <a href="mailto:manager@hystericalladies.net" className="hover:text-accent transition-colors">
              manager@hystericalladies.net
            </a>
          </p>
          <p className="mt-2 text-xs">{contact.siret}</p>
        </address>

        <div className="flex flex-col gap-3">
          <p className="font-semibold text-text">{contact.manager}</p>
          <SocialIconBar />
        </div>

        <div className="text-xs leading-relaxed">
          <p>© {new Date().getFullYear()} {footer.company}</p>
          <p className="mt-1">{footer.devCredit}</p>
        </div>
      </div>
    </footer>
  )
}
