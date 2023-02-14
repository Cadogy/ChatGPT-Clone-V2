/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightMode-primary':'#FFF',
        'lightMode-secondary':'#E6E6E6',
        'lightMode-neutral':'#CFCFCF',
        'lightMode-success':'#66CC8A',
        'lightMode-fail':'#EA5234',
        'lightMode-header':'#181A2A',
        'lightMode-text': '#333C4D',
        'lightMode-cta': '#377CFB',
        'darkMode-primary':'#282A36',
        'darkMode-secondary':'#242631',
        'darkMode-neutral':'#20222C',
        'darkMode-success':'#1FD65F',
        'darkMode-fail':'#EA5234',
        'darkMode-header':'#F8F8F2',
        'darkMode-text': '#EBEBEB',
        'darkMode-cta': '#BD93F9',
      },
      backgroundImage: {
        'main-rainbowbg': 'linear-gradient(180deg,#fff 4.32%,rgba(255,255,255,0.2) 100%),linear-gradient(270deg,rgba(0,255,253,0.2) 0,rgba(236,0,255,0.2) 51.26%,rgba(255,103,0,0.2) 100%)',
        'main-rainbowbg-reverse': 'linear-gradient(180deg,#fff 4.32%,rgba(255,255,255,0.2) 100%),linear-gradient(270deg,rgba(0,255,253,0.2) 0,rgba(236,0,255,0.2) 51.26%,rgba(255,103,0,0.2) 100%)',
      },
    },
  },
  plugins: [],
}
