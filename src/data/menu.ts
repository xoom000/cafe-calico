import type { MenuSection } from '../types'

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
