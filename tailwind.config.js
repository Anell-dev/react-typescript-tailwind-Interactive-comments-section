/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-out forwards',
      },
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
