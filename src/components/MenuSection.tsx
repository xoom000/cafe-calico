import { useState } from 'react'
import { X, BookOpen } from 'lucide-react'
import { menuSections, featuredItems } from '../data/menu'

function MenuModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />
      <div
        className="relative bg-background rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-elegant flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 md:px-10 pt-8 pb-5 border-b border-border bg-muted/40 flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium mb-2">
              Café Calico
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">The full menu</h2>
          </div>
          <button
            onClick={onClose}
            className="mt-1 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable menu content */}
        <div className="overflow-y-auto px-6 md:px-10 py-6 space-y-8">
          {menuSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                {section.title}
              </h3>
              <div className="space-y-2.5">
                {section.items.map((item) => (
                  <div key={item.name} className="flex items-baseline justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-foreground">{item.name}</span>
                      {item.note && (
                        <span className="text-xs italic text-muted-foreground">{item.note}</span>
                      )}
                    </div>
                    <span className="font-display text-primary font-medium whitespace-nowrap shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function MenuSection() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section id="menu" className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          {/* Section header */}
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">What we make</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium">Fresh every day.</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Everything is made to order from quality, locally-sourced ingredients.
            </p>
          </div>

          {/* Featured sections grid */}
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

          {/* Full menu CTA */}
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
