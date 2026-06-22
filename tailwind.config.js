/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#081226',
          900: '#0B1B33',
          800: '#11233F',
          700: '#1A3257',
          600: '#284472',
        },
        ivory: {
          DEFAULT: '#F7F4EC',
          warm: '#FFFDF8',
        },
        brass: {
          50: '#FBF6EA',
          100: '#F3E6C4',
          300: '#D9B873',
          400: '#C7A157',
          500: '#B68D40',
          600: '#967133',
        },
        slate: {
          ink: '#262B36',
          soft: '#5B6273',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
