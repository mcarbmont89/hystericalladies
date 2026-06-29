import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { getContent, isLocale, locales, type Locale } from "@/lib/content";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = isLocale(params.lang) ? params.lang : "fr";
  const { site } = getContent(lang);
  const localeMap: Record<Locale, string> = { fr: "fr_FR", en: "en_GB", es: "es_ES" };

  return {
    metadataBase: new URL("https://hystericalladies.net"),
    title: {
      default: `${site.title} — ${site.subtitle}`,
      template: `%s · ${site.title}`,
    },
    description: getContent(lang).dict.metaDescription,
    openGraph: {
      siteName: site.title,
      type: "website",
      locale: localeMap[lang],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isLocale(params.lang)) notFound();
  const content = getContent(params.lang);

  return (
    <html lang={params.lang} className={`${poppins.variable} ${inter.variable} bg-paper`}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-carmine focus:px-4 focus:py-2 focus:text-ink"
        >
          {content.dict.skipToContent}
        </a>
        <SiteHeader content={content} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter content={content} />
      </body>
    </html>
  );
}
