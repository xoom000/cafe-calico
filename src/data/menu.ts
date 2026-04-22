export interface MenuItem {
  name: string
  price: string
  note?: string
}

export interface MenuSection {
  title: string
  items: MenuItem[]
}

export const menuSections: MenuSection[] = [
  {
    title: 'Espresso & Coffee',
    items: [
      { name: 'Drip Coffee', price: '$3' },
      { name: 'Cold Brew', price: '$4.5' },
      { name: 'Americano', price: '$3.5' },
      { name: 'Cappuccino', price: '$4.5' },
      { name: 'Latte', price: '$5' },
      { name: 'Vanilla / Caramel / Mocha Latte', price: '$5.5' },
      { name: 'Pancake Latte', price: '$6', note: 'seasonal' },
      { name: 'Iced Vanilla Cold Brew', price: '$5' },
      { name: 'Chai Latte', price: '$5' },
      { name: 'Matcha Latte', price: '$5.5' },
      { name: 'Hot Chocolate', price: '$4' },
    ],
  },
  {
    title: 'Smoothies & Refreshers',
    items: [
      { name: 'Berry Bliss Smoothie', price: '$7' },
      { name: 'Tropical Sunrise Smoothie', price: '$7' },
      { name: 'Green Garden Smoothie', price: '$7' },
      { name: 'Iced Tea (unsweetened / sweet)', price: '$3' },
      { name: 'Lemonade', price: '$3.5' },
      { name: 'Italian Soda', price: '$4' },
    ],
  },
  {
    title: 'Breakfast & Toast',
    items: [
      { name: 'Avocado Toast', price: '$9' },
      { name: 'Breakfast Sandwich', price: '$8' },
      { name: 'Bagel & Cream Cheese', price: '$5' },
      { name: 'Bagel with Lox', price: '$10' },
      { name: 'Yogurt Parfait', price: '$6.5' },
      { name: 'Daily Pastry', price: 'Market' },
    ],
  },
  {
    title: 'Sandwiches & Wraps',
    items: [
      { name: 'Turkey Pesto Sandwich', price: '$11' },
      { name: 'Sriracha Chicken (open-faced)', price: '$12' },
      { name: 'Classic BLT', price: '$10' },
      { name: 'Veggie Wrap', price: '$10' },
      { name: 'Chicken Caesar Wrap', price: '$11' },
      { name: 'Grilled Cheese', price: '$8' },
    ],
  },
  {
    title: 'Soups & Salads',
    items: [
      { name: 'House Tomato Basil Soup', price: '$6' },
      { name: 'Soup of the Day', price: '$6' },
      { name: 'Made-to-Order Salad', price: '$10' },
      { name: 'Chicken Caesar Salad', price: '$11' },
      { name: 'Cobb Salad', price: '$12' },
    ],
  },
  {
    title: 'Sweets',
    items: [
      { name: 'Salted Caramel Cheesecake Cup', price: '$5' },
      { name: 'Brownie', price: '$3.5' },
      { name: 'Cookie', price: '$3' },
      { name: 'Seasonal Cake Slice', price: 'Market' },
    ],
  },
]

export const featuredItems = [
  {
    category: 'Lunch favorites',
    section: 'Sandwiches & Soups',
    description:
      'Our signature Turkey Pesto, Sriracha Chicken open-faced, and a daily homemade soup. Pair anything with a side and make it a meal.',
    highlights: [
      'Turkey Pesto Sandwich',
      'Sriracha Chicken (open-faced)',
      'House Tomato Basil Soup',
      'Bagel & Cream Cheese',
    ],
  },
  {
    category: 'All-day breakfast',
    section: 'Breakfast & Toast',
    description:
      'Fluffy avocado toast, fresh bagels, and seasonal breakfast plates served until close. The perfect start — or restart — to your day.',
    highlights: ['Avocado Toast', 'Breakfast Sandwich', 'Salted Caramel Cheesecake Cup', 'Daily Pastry'],
  },
  {
    category: 'Sip & refresh',
    section: 'Smoothies, Salads & Coffee',
    description:
      'House-roasted espresso, rotating seasonal lattes, fruit-packed smoothies, and made-to-order salads with the freshest greens.',
    highlights: ['Pancake Latte (seasonal)', 'Iced Vanilla Cold Brew', 'Berry Bliss Smoothie', 'Made-to-Order Salad'],
  },
]

export const highlights = [
  {
    title: 'Rotating Lattes',
    description: 'A new flavor lineup each season — pancake, salted caramel, lavender honey and more.',
  },
  {
    title: 'Made to Order',
    description: 'Sandwiches, salads and smoothies built fresh from quality, locally-sourced ingredients.',
  },
  {
    title: 'Sunny Patio',
    description: 'Comfortable outdoor seating perfect for catching up, working, or a quiet morning.',
  },
]

export const reviews = [
  {
    quote:
      "Definitely worth stopping by for a quick breakfast or delicious coffee! They have a fun menu of rotating latte and mocha flavors — I got the pancake latte and it was incredible.",
    name: 'Yelp Reviewer',
    role: 'Local guide',
  },
  {
    quote:
      'Hidden gem near Redding. The turkey pesto sandwich is the best in the area and the patio is the perfect spot to read a book on a sunny morning.',
    name: 'Anderson local',
    role: 'Regular',
  },
  {
    quote:
      "Friendly staff, generous portions, and everything is made fresh. We drive 20 minutes just to get our coffee here on weekends.",
    name: 'Daniel R.',
    role: 'Redding regular',
  },
]

export const hours = [
  { day: 'Monday – Friday', time: '7am – 3pm' },
  { day: 'Saturday', time: '8am – 2pm' },
  { day: 'Sunday', time: 'Closed' },
]

export const businessInfo = {
  name: 'Café Calico',
  address: '2191 Ferry St, Anderson, CA 96007',
  addressNote: 'Just 10 minutes from downtown Redding',
  phone: '(530) 378-5559',
  phoneHref: 'tel:+15303785559',
  phoneNote: 'Phone orders welcome',
  instagram: 'https://www.instagram.com/cafecalico2191',
  website: 'https://cafecalico.com',
  mapsEmbed:
    'https://www.google.com/maps?q=2191+Ferry+St,+Anderson,+CA+96007&output=embed',
  mapsLink: 'https://maps.google.com/?q=Café+Calico+2191+Ferry+St+Anderson+CA',
}
