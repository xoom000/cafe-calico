export interface MenuItem {
  name: string
  price: string
  note?: string
}

export interface MenuSection {
  title: string
  items: MenuItem[]
}

export interface FeaturedItem {
  category: string
  section: string
  description: string
  highlights: string[]
}

export interface Highlight {
  title: string
  description: string
  icon?: string
}

export interface Review {
  quote: string
  name: string
  role: string
}

export interface HoursEntry {
  day: string
  time: string
}

export interface BusinessInfo {
  name: string
  address: string
  addressNote: string
  phone: string
  phoneHref: string
  phoneNote: string
  instagram: string
  website: string
  mapsEmbed: string
  mapsLink: string
}
