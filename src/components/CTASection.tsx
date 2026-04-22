import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { businessInfo, hours } from '../data/menu'

export function CTASection() {
  return (
    <section id="hours" className="py-24 md:py-32 bg-gradient-warm relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — CTA */}
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] mb-8 text-balance">
              Stop by for your
              <br />
              <span className="italic font-light">next favorite cup.</span>
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-background flex items-center justify-center shadow-soft">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold mb-0.5">Find us</div>
                  <div className="text-muted-foreground">{businessInfo.address}</div>
                  <div className="text-sm text-muted-foreground/80">{businessInfo.addressNote}</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-background flex items-center justify-center shadow-soft">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold mb-0.5">Call ahead</div>
                  <a
                    href={businessInfo.phoneHref}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {businessInfo.phone}
                  </a>
                  <div className="text-sm text-muted-foreground/80">{businessInfo.phoneNote}</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-background flex items-center justify-center shadow-soft">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold mb-0.5">Hours</div>
                  <div className="space-y-1">
                    {hours.map((h) => (
                      <div key={h.day} className="flex gap-4 text-muted-foreground">
                        <span className="w-36 shrink-0">{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram link */}
            <a
              href={businessInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Follow Café Calico on Instagram
            </a>
          </div>

          {/* Right — Map */}
          <div className="rounded-2xl overflow-hidden shadow-elegant border border-border/30 aspect-square md:aspect-auto md:h-96">
            <iframe
              src={businessInfo.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Café Calico location map"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
