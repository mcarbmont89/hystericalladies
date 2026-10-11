import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Hysterical Ladies',
  description: 'Un spectacle de cabaret musical — Le Catalogue des Angoisses Sexuelles',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <a href="#main" className="skip-link">Aller au contenu</a>
        {children}
      </body>
    </html>
  )
}
