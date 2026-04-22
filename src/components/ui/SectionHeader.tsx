interface SectionHeaderProps {
  eyebrow: string
  heading: string
  subtext?: string
  centered?: boolean
}

export function SectionHeader({ eyebrow, heading, subtext, centered = false }: SectionHeaderProps) {
  const align = centered ? 'text-center' : ''
  const subAlign = centered ? 'mx-auto' : ''

  return (
    <div className={`mb-14 ${align}`}>
      <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">{eyebrow}</p>
      <h2 className="font-display text-4xl md:text-5xl font-medium">{heading}</h2>
      {subtext && (
        <p className={`mt-4 text-lg text-muted-foreground max-w-xl leading-relaxed ${subAlign}`}>{subtext}</p>
      )}
    </div>
  )
}
