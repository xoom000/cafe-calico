/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        accent: 'hsl(var(--accent))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        border: 'hsl(var(--border))',
      },
      boxShadow: {
        elegant: '0 4px 32px -4px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.08)',
        soft: '0 2px 12px rgba(0,0,0,0.08)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.28) 50%, rgba(0,0,0,0.08) 100%)',
        'gradient-warm': 'linear-gradient(135deg, hsl(var(--primary) / 0.08) 0%, hsl(var(--secondary) / 0.12) 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
