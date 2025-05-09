/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-uk-blue',
    'bg-uk-red',
    'bg-uk-white',
    'bg-gold',
    'bg-silver',
    'text-uk-blue',
    'text-uk-red',
    'text-uk-white',
    'text-gold',
    'text-silver',
  ],
  theme: {
    extend: {
      colors: {
        'uk-blue': '#012169', // UK flag blue
        'uk-red': '#C8102E',  // UK flag red
        'uk-white': '#FFFFFF', // UK flag white
        'gold': '#FFD700',    // Gold
        'silver': '#C0C0C0',  // Silver
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 