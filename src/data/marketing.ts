import type { FeaturedItem, Highlight, Review } from '../types'

export const highlights: Highlight[] = [
  {
    title: 'Rotating Lattes',
    description: 'A new flavor lineup each season — pancake, salted caramel, lavender honey and more.',
    icon: 'coffee',
  },
  {
    title: 'Made to Order',
    description: 'Sandwiches, salads and smoothies built fresh from quality, locally-sourced ingredients.',
    icon: 'sandwich',
  },
  {
    title: 'Sunny Patio',
    description: 'Comfortable outdoor seating perfect for catching up, working, or a quiet morning.',
    icon: 'sun',
  },
]

export const featuredItems: FeaturedItem[] = [
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

export const reviews: Review[] = [
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
