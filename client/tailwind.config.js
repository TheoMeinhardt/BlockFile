// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        coolvetica: ['Coolvetica', 'sans-serif'],
        lemonmilk: ['Lemon Milk', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        super: '20px 20px 20px -10px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
};
