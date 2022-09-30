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
        'orange': 'var(--orange)',
        'yellow': 'var(--yellow)',
        'green': 'var(--green)',
        'blue': 'var(--blue)',
        'teal': 'var(--teal)',
        'purple': 'var(--purple)',
        transparent: 'transparent',
      },
      dropShadow: {
        'accent-teal': '4px 4px 0px var(--vibrant-teal)',
        'accent-green': '4px 4px 0px var(--vibrant-green)',
        'accent-yellow': '4px 4px 0px var(--vibrant-yellow)',
        'accent-orange': '4px 4px 0px var(--vibrant-orange)',
        'accent-purple': '4px 4px 0px var(--vibrant-purple)',
      },
      borderRadius: {
        big: '32px',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
