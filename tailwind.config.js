/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{html,js,jsx,ts,tsx}',
  './node_modules/flowbite/**/*.js',
]
export const darkMode = 'class'
export const theme = {
  fontFamily: {
    headeing: ['Long Cang'],
  },
  extend: {},
}
export const plugins = [
  require('@tailwindcss/typography'),
  require('flowbite/plugin'),
]
