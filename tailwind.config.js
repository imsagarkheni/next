/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10': ['0.625rem', '0.75rem'],
        '40': ['2.5rem', '.9'],
      },
      colors: {
        brightGray: '#eee',
        spiroDiscoBall: '#20C0E8',
        verified:"#13E1B0",
        japaneseIndigo: '#25364F',
        quicksilver: '#9BA6A8',
        water: '#D3F6FF',
        magicPotion: '#FE4D5F',
        caribbeanGreen: '#13E1B0',
        ufoGreen: '#36C66F',
    },
    boxShadow: {
      'shadow': '0px 0px 10px rgba(0, 0, 0, 0.09)',
    },
    },
  },
  plugins: [],
}

