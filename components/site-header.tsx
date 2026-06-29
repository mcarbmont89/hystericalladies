"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { navigation, languages, site } from "@/lib/content";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur">
      {/* Announcement banner */}
      <div className="bg-ink text-paper">
        <p className="mx-auto max-w-7xl px-4 py-2 text-center text-[0.7rem] uppercase tracking-catalog sm:text-xs">
          {site.banner}
        </p>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-10 lg:px-16">
        {/* Logotype */}
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-display text-xl italic text-carmine sm:text-2xl">
            The Hysterical
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Ladies
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm uppercase tracking-catalog text-ink-soft transition-colors hover:text-carmine"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-none border border-ink/20 px-3 py-2 text-xs uppercase tracking-catalog text-ink-soft transition-colors hover:border-carmine hover:text-carmine"
              aria-haspopup="menu"
              aria-expanded={langOpen}
            >
              <Globe className="h-3.5 w-3.5" aria-hidden />
              FR
            </button>
            {langOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-1 min-w-[10rem] border border-ink/15 bg-paper shadow-lg"
              >
                {languages.map((l) => (
                  <Link
                    key={l.code}
                    href={l.href}
                    className="block px-4 py-2 text-xs uppercase tracking-catalog text-ink-soft transition-colors hover:bg-paper-deep hover:text-carmine"
                    role="menuitem"
                    onClick={() => setLangOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-ink/10 bg-paper lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink/10 py-3 font-sans text-sm uppercase tracking-catalog text-ink-soft transition-colors hover:text-carmine"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
