/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7dac28',
          50: '#f4f8ec',
          100: '#e6f0d3',
          200: '#cfe2ac',
          300: '#b0cf7a',
          400: '#91bb52',
          500: '#7dac28',
          600: '#608a1e',
          700: '#4a691a',
          800: '#3d551a',
          900: '#34471a',
        },
        secondary: {
          DEFAULT: '#c66013',
          50: '#fef7ed',
          100: '#fdebd5',
          200: '#fad4aa',
          300: '#f6b574',
          400: '#f0893c',
          500: '#c66013',
          600: '#b8520f',
          700: '#963f10',
          800: '#7a3314',
          900: '#642b14',
        },
        neutral: {
          DEFAULT: '#b3b3b3',
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e1e1e1',
          300: '#cfcfcf',
          400: '#b3b3b3',
          500: '#999999',
          600: '#808080',
          700: '#666666',
          800: '#4d4d4d',
          900: '#333333',
        },
        accent: {
          DEFAULT: '#76c488',
          50: '#f2fdf4',
          100: '#e0fae5',
          200: '#c4f3cd',
          300: '#96e8a7',
          400: '#76c488',
          500: '#4cb55f',
          600: '#389547',
          700: '#2f763a',
          800: '#295e31',
          900: '#234e2a',
        }
      }
    }
  },
  plugins: [
    require('tailwindcss-rtl')
  ],
}
