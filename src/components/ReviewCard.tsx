import type { Review } from '@/data/types'
import StarRating from './StarRating'

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="bg-surface border border-border rounded-md p-6 flex flex-col gap-4 shadow-card">
      {review.rating && <StarRating rating={review.rating} />}
      <blockquote className="text-base text-text leading-relaxed italic flex-1">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <footer className="flex items-center justify-between text-xs text-muted">
        <cite className="not-italic font-semibold">{review.source}</cite>
        <span>{review.city} · {review.date}</span>
      </footer>
    </article>
  )
}
