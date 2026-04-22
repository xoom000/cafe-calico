import { MapPin, Phone } from 'lucide-react'
import { businessInfo } from '../data/menu'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80"
        alt="A latte with delicate latte art beside a fresh croissant on a sunlit wooden table at Café Calico"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-foreground/10" />

      {/* Content */}
      <div className="container relative z-10 pb-16 md:pb-24 pt-32">
        <div className="max-w-3xl animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-background/40 mb-6 shadow-soft">
            <MapPin className="w-3.5 h-3.5 text-primary fill-primary" />
            <span className="text-xs font-medium text-foreground">Anderson, CA · Near Redding</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.02] text-background text-balance">
            Slow mornings,
            <br />
            <span className="italic font-light">good company,</span>
            <br />
            great coffee.
          </h1>

          <p className="mt-7 text-lg md:text-xl text-background/85 max-w-xl leading-relaxed text-balance">
            A cozy neighborhood café in Anderson, just minutes from Redding. House-roasted coffee,
            scratch-made sandwiches, and a sunny patio waiting for you.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 h-11 rounded-full px-6 text-sm font-semibold bg-background text-foreground hover:bg-background/90 transition-colors shadow-soft"
            >
              View full menu
            </a>
            <a
              href={businessInfo.phoneHref}
              className="inline-flex items-center gap-2 h-11 rounded-full px-6 text-sm font-semibold border border-background/50 text-background hover:bg-background/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call to order — </span>
              {businessInfo.phone}
            </a>
            <a
              href={businessInfo.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 rounded-full px-6 text-sm font-semibold border border-background/50 text-background hover:bg-background/10 transition-colors"
            >
              Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
