import { Star } from 'lucide-react'

interface StarRatingProps {
  count?: number
  size?: 'sm' | 'md'
}

export function StarRating({ count = 5, size = 'md' }: StarRatingProps) {
  const className = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'
  return (
    <div className="flex">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`${className} fill-accent text-accent`} />
      ))}
    </div>
  )
}
