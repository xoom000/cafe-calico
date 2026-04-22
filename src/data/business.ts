import type { BusinessInfo, HoursEntry } from '../types'

export const businessInfo: BusinessInfo = {
  name: 'Café Calico',
  address: '2191 Ferry St, Anderson, CA 96007',
  addressNote: 'Just 10 minutes from downtown Redding',
  phone: '(530) 378-5559',
  phoneHref: 'tel:+15303785559',
  phoneNote: 'Phone orders welcome',
  instagram: 'https://www.instagram.com/cafecalico2191',
  website: 'https://cafecalico.com',
  mapsEmbed: 'https://www.google.com/maps?q=2191+Ferry+St,+Anderson,+CA+96007&output=embed',
  mapsLink: 'https://maps.google.com/?q=Café+Calico+2191+Ferry+St+Anderson+CA',
}

export const hours: HoursEntry[] = [
  { day: 'Monday – Friday', time: '7am – 3pm' },
  { day: 'Saturday', time: '8am – 2pm' },
  { day: 'Sunday', time: 'Closed' },
]

export const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#about' },
  { label: 'Hours', href: '#hours' },
]
