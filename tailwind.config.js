/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:'#D6FE7A',
        primaryDark: '#B0F75A',
        defaultDark:'#13141F',
        mediumDark: '#3E4044',
        gradientDark: 'linear-gradient(to bottom, #000000, #000000);'
      },
    },
  },
  plugins: [],
}