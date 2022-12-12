/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['"Gill Sans"', '"Gill Sans MT"', 'Calibri', 'sans-serif'],
      display: ['PP Supply Sans', 'PPSupplySans', 'PPSupplySans-Regular'],
      mono: [
        'Fira Code',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    extend: {
      colors: {
        base: 'var(--base)',
        border: 'var(--border)',
        surface: 'var(--surface)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        semi: 'var(--semi)',
        onMedia: 'var(--onMedia)',
        'red': 'var(--red)',
        'red-light': 'var(--red-light)',
        'orange': 'var(--orange)',
        'orange-light': 'var(--orange-light)',
        'yellow': 'var(--yellow)',
        'yellow-light': 'var(--yellow-light)',
        'green': 'var(--green)',
        'green-light': 'var(--green-light)',
        'blue': 'var(--blue)',
        'blue-light': 'var(--blue-light)',
        'aqua': 'var(--aqua)',
        'aqua-light': 'var(--aqua-light)',
        'purple': 'var(--purple)',
        'purple-light': 'var(--purple-light)',
        transparent: 'transparent',
      },
      borderRadius: {
        big: '32px',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
