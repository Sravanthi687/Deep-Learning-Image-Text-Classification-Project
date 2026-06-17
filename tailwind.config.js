/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bce0ff',
          300: '#8ecdff',
          400: '#59b0ff',
          500: '#338dff',
          600: '#1b6cf5',
          700: '#1557e1',
          800: '#1747b6',
          900: '#193f8f',
          950: '#142757',
        },
        accent: {
          50: '#edfff7',
          100: '#d5ffed',
          200: '#aeffdc',
          300: '#70ffc3',
          400: '#2bfda2',
          500: '#00e682',
          600: '#00bf67',
          700: '#009654',
          800: '#067545',
          900: '#07603b',
          950: '#003721',
        },
        surface: {
          50: '#f8f9fc',
          100: '#f1f3f9',
          200: '#e5e8f2',
          300: '#d1d6e3',
          400: '#b3baca',
          500: '#9aa3b2',
          600: '#838c9d',
          700: '#6d7585',
          800: '#5c6370',
          900: '#4e535d',
          950: '#363940',
        },
      },
    },
  },
  plugins: [],
};
