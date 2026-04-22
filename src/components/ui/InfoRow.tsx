import type { ReactNode } from 'react'

interface InfoRowProps {
  icon: ReactNode
  label: string
  children: ReactNode
}

export function InfoRow({ icon, label, children }: InfoRowProps) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-11 h-11 rounded-full bg-background flex items-center justify-center shadow-soft text-primary">
        {icon}
      </div>
      <div>
        <div className="font-display text-lg font-semibold mb-0.5">{label}</div>
        {children}
      </div>
    </div>
  )
}
