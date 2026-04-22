export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div className="md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] mb-6 text-balance">
              A little corner of calm in the North State.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>Pull up a patio chair, meet the regulars, and stay for a while. We're glad you're here.</p>
            </div>
          </div>

          {/* Image */}
          <div className="md:col-span-7 relative">
            <div className="absolute -inset-4 bg-secondary/15 rounded-3xl -rotate-1" aria-hidden="true" />
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
              alt="The cozy outdoor patio at Café Calico, with string lights, wooden tables and potted plants"
              className="relative rounded-2xl shadow-elegant w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
