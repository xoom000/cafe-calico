import { useState } from 'react'
import { BookOpen } from 'lucide-react'
import { featuredItems } from '../data/marketing'
import { MenuModal } from './MenuModal'
import { SectionHeader } from './ui/SectionHeader'

export function MenuSection() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section id="menu" className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <SectionHeader
            eyebrow="What we make"
            heading="Fresh every day."
            subtext="Everything is made to order from quality, locally-sourced ingredients."
            centered
          />

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {featuredItems.map((item) => (
              <div key={item.section} className="bg-background rounded-2xl p-7 shadow-soft border border-border/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{item.category}</p>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{item.section}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{item.description}</p>
                <ul className="space-y-1.5">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 h-12 rounded-full px-7 text-sm font-semibold bg-primary text-background hover:bg-primary/90 transition-colors shadow-soft"
            >
              <BookOpen className="w-4 h-4" />
              View full menu
            </button>
          </div>
        </div>
      </section>

      {open && <MenuModal onClose={() => setOpen(false)} />}
    </>
  )
}
