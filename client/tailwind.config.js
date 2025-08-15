/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0b0f1a',
          800: '#111827',
          700: '#1f2937',
          600: '#374151',
          400: '#9ca3af'
        }
      }
    }
  },
  plugins: []
}
