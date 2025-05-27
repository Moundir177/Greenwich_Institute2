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
    'border-gray-200',
    'border-gray-300',
    'border-gray-700',
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
    'animate-fadeIn',
    'animate-slideUpIn',
    'animate-slideDownIn',
    'shadow-soft',
    'shadow-sharp',
    'shadow-inner-light',
    'shadow-gold',
    'shadow-blue',
    'btn',
    'btn-3d',
    'btn-hoverglow',
    'btn-ripple',
    'scrollbar-hide',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0f2b46', // Dark blue
        'dark-blue-800': '#163a5f',
        'dark-blue-700': '#1d4974',
        'uk-blue': '#0f2b46',
        'uk-blue-light': '#1e5c87',
        'uk-blue-dark': '#072a43',
        'light-gray': '#f7f9fc', // Light gray 
        'light-gray-200': '#eef1f6',
        'light-gray-300': '#e4e9f2',
        'gold': '#c8a951',       // Gold color
        'gold-light': '#f0c674',
        'gold-dark': '#a38a45',
        'amber': {
          '500': '#f59e0b',
          '600': '#d97706'
        },
        'gray': '#4a5568',       // Gray
        'gray-100': '#f7fafc',
        'gray-200': '#edf2f7',
        'gray-300': '#e2e8f0',
        'gray-400': '#cbd5e0',
        'gray-500': '#a0aec0',
        'gray-600': '#718096',
        'gray-700': '#4a5568',
        'gray-800': '#2d3748',
        'gray-900': '#1a202c',
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
        'noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        'gradient-blue': 'linear-gradient(135deg, var(--uk-blue-light), var(--uk-blue-dark))',
        'gradient-gold': 'linear-gradient(135deg, var(--gold-light), var(--gold-dark))',
        'gradient-primary': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'shine': 'shine 8s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'slideUpIn': 'slideUpIn 0.4s ease-out',
        'slideDownIn': 'slideDownIn 0.4s ease-out',
        'ripple': 'ripple 1s ease-out',
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
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUpIn: {
          'from': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideDownIn: {
          'from': { 
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        ripple: {
          '0%': {
            transform: 'scale(0, 0)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'scale(30, 30)',
            opacity: '0',
          },
        },
      },
      boxShadow: {
        'neon-gold': '0 0 5px rgba(240, 198, 116, 0.5), 0 0 20px rgba(240, 198, 116, 0.3)',
        'neon-blue': '0 0 5px rgba(52, 152, 219, 0.5), 0 0 20px rgba(52, 152, 219, 0.3)',
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 40px -5px rgba(0, 0, 0, 0.15), 0 0 10px rgba(0, 0, 0, 0.02)',
        '3d': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'soft': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'sharp': 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
        'inner-light': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'gold': '0 10px 15px -3px rgba(212, 175, 55, 0.2), 0 4px 6px -2px rgba(212, 175, 55, 0.1)',
        'blue': '0 10px 15px -3px rgba(1, 33, 105, 0.2), 0 4px 6px -2px rgba(1, 33, 105, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '10px',
        'lg': '20px',
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.1)',
        'md': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'lg': '0 8px 16px rgba(0, 0, 0, 0.1)',
        'neon': '0 0 5px rgba(240, 198, 116, 0.7), 0 0 10px rgba(240, 198, 116, 0.5)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      transitionDuration: {
        '400': '400ms',
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
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
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.2)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.3)',
        },
        '.dark-glass': {
          'background': 'rgba(0, 0, 0, 0.2)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 