import { Star } from "lucide-react";
import type { Review } from "@/lib/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-[#051650] p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1">
      <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < review.rating ? "size-4 fill-primary text-primary" : "size-4 text-border"
            }
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white">
        “{review.text}”
      </blockquote>
      <figcaption className="mt-5 border-t border-border pt-4 text-sm text-lime font-semibold">
        {review.name}
        <span className="block text-xs font-normal text-muted-foreground">{review.area}</span>
      </figcaption>
    </figure>
  );
}
