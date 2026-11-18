/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sf: {
          blue: '#0176D3',
          'blue-dark': '#014486',
          'blue-light': '#1B96FF',
          navy: '#032D60',
          orange: '#FF5D2D',
          teal: '#06A59A',
          purple: '#9050E9',
          green: '#2E844A',
          yellow: '#FFC849',
          red: '#EA001E',
          'gray-1': '#F3F3F3',
          'gray-2': '#E5E5E5',
          'gray-3': '#DDDBDA',
          'gray-4': '#C9C7C5',
          'gray-5': '#969492',
          'gray-6': '#706E6B',
          'gray-7': '#514F4D',
          'gray-8': '#3E3E3C',
          'gray-9': '#2B2826',
        },
      },
      fontFamily: {
        sans: ['"Salesforce Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Fira Code"', '"Cascadia Code"', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'sf': '0 2px 8px rgba(0,0,0,0.12)',
        'sf-lg': '0 4px 16px rgba(0,0,0,0.16)',
      },
    },
  },
  plugins: [],
}
