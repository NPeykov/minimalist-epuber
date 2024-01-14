/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html,js,jsx,ts,tsx}']
export const darkMode = 'class'
export const theme = {
  fontFamily: {
    longCang: ['Long Cang'],
  },
  extend: {
    colors: {
      darker: {
        //##171717 https://tailcolor.com/palettes/171717
        50: '#e8e8e8',
        100: '#d1d1d1',
        200: '#a2a2a2',
        300: '#747474',
        400: '#454545',
        500: '#171717',
        600: '#121212',
        700: '#0e0e0e',
        800: '#090909',
        900: '#050505',
      },
      darkViolet: {
        //##89467D https://tailcolor.com/palettes/89467d
        50: '#f3edf2',
        100: '#e7dae5',
        200: '#d0b5cb',
        300: '#b890b1',
        400: '#a16b97',
        500: '#89467d',
        600: '#6e3864',
        700: '#522a4b',
        800: '#371c32',
        900: '#1b0e19',
      },
    },
  },
}
export const plugins = [require('@tailwindcss/typography')]
