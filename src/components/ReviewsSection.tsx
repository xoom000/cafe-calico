import { reviews } from '../data/marketing'
import { hours } from '../data/business'
import { StarRating } from './ui/StarRating'

export function ReviewsSection() {
  const hoursLabel = hours
    .filter((h) => h.time !== 'Closed')
    .map((h) => `${h.day} · ${h.time}`)
    .join(' · ')

  return (
    <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-5">
            <StarRating count={5} size="md" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
            Loved by locals,
            <br />
            <span className="italic font-light text-background/70">one cup at a time.</span>
          </h2>
          <p className="mt-4 text-sm text-background/70">{hoursLabel}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="bg-background/[0.04] border border-background/10 rounded-2xl p-7 md:p-8 backdrop-blur-sm hover:bg-background/[0.07] transition-colors"
            >
              <div className="mb-5">
                <StarRating count={5} size="sm" />
              </div>
              <blockquote className="text-background/90 leading-relaxed mb-6">
                "{review.quote}"
              </blockquote>
              <figcaption>
                <div className="font-display text-sm font-semibold text-background">{review.name}</div>
                <div className="text-sm text-background/60">{review.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
