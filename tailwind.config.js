/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-dark-blue',
    'bg-light-gray',
    'bg-gold',
    'bg-gray',
    'bg-white',
    'text-dark-blue',
    'text-light-gray',
    'text-gold',
    'text-gray',
    'text-white',
    'border-dark-blue',
    'border-light-gray',
    'border-gold',
    'border-gray',
    'border-white',
    'hover:bg-dark-blue',
    'hover:bg-light-gray',
    'hover:bg-gold',
    'hover:bg-gray',
    'hover:bg-white',
    'hover:text-dark-blue',
    'hover:text-light-gray',
    'hover:text-gold',
    'hover:text-gray',
    'hover:text-white',
    'glass-morphism',
    'glass-morphism-dark',
    'neon-glow',
    'neon-text',
    'card-3d',
    'card-3d-inner',
    'shiny-button',
    'gradient-underline',
    'animate-float',
    'animate-float-slow',
    'animate-spin-slow',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0f2b46', // Dark blue
        'dark-blue-800': '#163a5f',
        'dark-blue-700': '#1d4974',
        'light-gray': '#f7f9fc', // Light gray 
        'light-gray-200': '#eef1f6',
        'light-gray-300': '#e4e9f2',
        'gold': '#c8a951',       // Gold color
        'gold-light': '#f0c674',
        'gold-dark': '#a38a45',
        'gray': '#4a5568',       // Gray
        'white': '#FFFFFF',      // White
        'accent-blue': '#3498db',
        'accent-purple': '#9b59b6',
        'accent-green': '#2ecc71',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, transparent 25%, rgba(255, 255, 255, 0.3) 50%, transparent 75%)',
        'noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'shine': 'shine 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          'from': { backgroundPosition: '-200% center' },
          'to': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'neon-gold': '0 0 5px rgba(240, 198, 116, 0.5), 0 0 20px rgba(240, 198, 116, 0.3)',
        'neon-blue': '0 0 5px rgba(52, 152, 219, 0.5), 0 0 20px rgba(52, 152, 219, 0.3)',
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 40px -5px rgba(0, 0, 0, 0.15), 0 0 10px rgba(0, 0, 0, 0.02)',
        '3d': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.1)',
        'md': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'lg': '0 8px 16px rgba(0, 0, 0, 0.1)',
        'neon': '0 0 5px rgba(240, 198, 116, 0.7), 0 0 10px rgba(240, 198, 116, 0.5)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.8,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                'opacity': 1,
                'color': '#c8a951',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-md': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-neon': {
          textShadow: '0 0 5px rgba(240, 198, 116, 0.7), 0 0 10px rgba(240, 198, 116, 0.5)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 