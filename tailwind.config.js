/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        desktop: '1440px'
      },
      colors: {
        'moderate-blue': '#3a3d9f',
        'soft-red': '#f5586c',
        'light-grayish-blue': '#9a9dd4',
        'pale-red': '#fdd4d1',
        'dark-blue': '#2e3a4e',
        'grayish-blue': '#4f546f',
        'light-gray': '#d6d8de',
        'very-light-gray': '#e1e5e8',
        'white': '#ffffff',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
