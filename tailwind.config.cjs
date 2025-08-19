/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral-0': 'hsl(0, 0%, 100%)',
        'neutral-300': 'hsl(252, 6%, 83%)',
        'neutral-500': 'hsl(245, 15%, 58%)',
        'neutral-700': 'hsl(245, 19%, 35%)',
        'neutral-900': 'hsl(248, 70%, 10%)',
        'orange-500': 'hsl(7, 88%, 67%)',
        'orange-700': 'hsl(7, 71%, 60%)',
      },
      fontFamily: {
        sans: ['Inconsolata', 'monospace'],
      },
    },
  },
  plugins: [],
}