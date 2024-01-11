/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html,js,jsx,ts,tsx}']
export const darkMode = 'class'
export const theme = {
  fontFamily: {
    longCang: ['Long Cang'],
  },
  extend: {},
}
export const plugins = [require('@tailwindcss/typography')]
