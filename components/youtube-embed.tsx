"use client";

import { useState } from "react";
import { Play } from "lucide-react";

type YouTubeEmbedProps = {
  id: string;
  title: string;
  /** Accessible label for the play button, e.g. "Play video" (localized). */
  playLabel?: string;
};

export default function YouTubeEmbed({ id, title, playLabel = "Play video" }: YouTubeEmbedProps) {
  const [active, setActive] = useState(false);

  return (
    <figure className="overflow-hidden rounded-2xl bg-paper-deep">
      <div className="relative aspect-video w-full">
        {active ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label={`${playLabel}: ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/30 transition-colors group-hover:bg-ink/20" aria-hidden />
            <span
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-carmine text-ink shadow-lg transition-transform duration-300 group-hover:scale-110"
              aria-hidden
            >
              <Play className="ml-1 h-7 w-7 fill-current" strokeWidth={0} />
            </span>
          </button>
        )}
      </div>
      <figcaption className="border-t border-ink/10 px-5 py-4 font-display text-base font-semibold tracking-tight text-ink">
        {title}
      </figcaption>
    </figure>
  );
}
