import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './single-file-demo.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5a4',
        accent1: '#ffb454',
        accent2: '#7c5cff',
        backgroundDark: '#050712',
        mutedText: '#aeb6cf',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-orbitron)', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        planet: 'inset 0 8px 18px rgba(255,255,255,0.08), 0 10px 28px rgba(0,0,0,0.45)'
      },
      keyframes: {
        'orbit-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'fade-zoom-in': {
          '0%': { opacity: '0', transform: 'scale(1.02)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      animation: {
        orbit: 'orbit-rotate var(--orbit-duration, 12s) linear infinite',
        'fade-zoom-in': 'fade-zoom-in 800ms ease-out both'
      }
    }
  },
  plugins: [],
}
export default config