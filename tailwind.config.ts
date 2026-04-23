import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a2744',
          dark: '#111b33',
          light: '#243260',
        },
        cream: {
          DEFAULT: '#faf8f4',
          dark: '#f0ece3',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#d4b96a',
          dark: '#a8872e',
        },
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-assistant)', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 20px rgba(26,39,68,0.08)',
        'card-hover': '0 8px 32px rgba(26,39,68,0.14)',
      },
      borderRadius: {
        card: '0.75rem',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}

export default config
