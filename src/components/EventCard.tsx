import type { Event } from '@/data/types'

interface Props {
  event: Event
  ticketLabel: string
}

export default function EventCard({ event, ticketLabel }: Props) {
  return (
    <article className="relative flex flex-col items-center gap-6">
      {/* Marquee sign */}
      <div className="relative border-4 border-text rounded-lg px-10 py-6 bg-bg text-center
                      before:content-[''] before:absolute before:-inset-2 before:rounded-xl
                      before:border-2 before:border-muted/30">
        {/* Light bulb dots */}
        <div className="absolute -inset-1 rounded-lg pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i}
              className="absolute w-2 h-2 rounded-full bg-text/80"
              style={{
                left:  i < 5  ? `${(i + 0.5) * 20}%` : i < 10 ? '100%'              : i < 15 ? `${(14.5 - i) * 20}%` : '0%',
                top:   i < 5  ? '0%'                  : i < 10 ? `${(i - 4.5) * 20}%`: i < 15 ? '100%'               : `${(19.5 - i) * 20}%`,
                transform: 'translate(-50%, -50%)',
              }} />
          ))}
        </div>

        <p className="font-display font-black italic text-xl text-text mb-1">{event.city}</p>
        <p className="text-sm text-muted mb-3">{event.venue}</p>
        <p className="text-sm font-semibold text-text whitespace-pre-line">{event.dates}</p>
      </div>

      {event.ticketUrl && event.status === 'upcoming' && (
        <a href={event.ticketUrl}
          target="_blank" rel="noopener noreferrer"
          aria-label={`${ticketLabel} — ${event.venue}, ${event.city}`}
          className="inline-block bg-accent text-on-accent font-bold font-display italic
                     text-lg px-8 py-3 rounded-sm hover:opacity-90 transition-opacity
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg">
          {ticketLabel}
        </a>
      )}
    </article>
  )
}
