import { businessInfo } from '../data/menu'

export function Footer() {
  return (
    <footer className="py-8 bg-foreground text-background/60 border-t border-background/10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <span className="font-display font-medium text-background">{businessInfo.name}</span>
        <span>{businessInfo.address}</span>
        <a
          href={businessInfo.phoneHref}
          className="hover:text-background transition-colors"
        >
          {businessInfo.phone}
        </a>
      </div>
    </footer>
  )
}
