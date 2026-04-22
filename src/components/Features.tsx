import { Coffee, Sandwich, Sun, type LucideIcon } from 'lucide-react'
import { highlights } from '../data/marketing'

const iconMap: Record<string, LucideIcon> = {
  coffee: Coffee,
  sandwich: Sandwich,
  sun: Sun,
}

export function Features() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          {highlights.map((item) => {
            const Icon = item.icon ? iconMap[item.icon] : Coffee
            return (
              <div key={item.title} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
