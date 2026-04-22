import { X } from 'lucide-react'
import { menuSections } from '../data/menu'

interface MenuModalProps {
  onClose: () => void
}

export function MenuModal({ onClose }: MenuModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />
      <div
        className="relative bg-background rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-elegant flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 md:px-10 pt-8 pb-5 border-b border-border bg-muted/40 flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium mb-2">Café Calico</p>
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
