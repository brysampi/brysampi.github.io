/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        gaming: {
          dark: '#0a0a0a',
          darker: '#050505',
          yellow: '#ffd700',
          'yellow-glow': '#ffed4e',
          neon: '#ffff00',
        },
      },
      fontFamily: {
        gaming: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'yellow-glow': '0 0 20px rgba(255, 215, 0, 0.5)',
        'yellow-glow-lg': '0 0 40px rgba(255, 215, 0, 0.7)',
        'neon': '0 0 10px #ffff00, 0 0 20px #ffff00, 0 0 30px #ffff00',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #ffd700, 0 0 10px #ffd700' },
          '100%': { boxShadow: '0 0 20px #ffd700, 0 0 30px #ffd700, 0 0 40px #ffd700' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

