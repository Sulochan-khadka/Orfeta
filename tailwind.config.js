/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['roboto', 'sans-serif'],
        poppins: ['poppins', 'sans-serif'],
      },
      colors: {
        lblue: '#00a3e9',
      },
    },
  },
  plugins: [],
};
