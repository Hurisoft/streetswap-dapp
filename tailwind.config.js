/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#FA920C',
        yellow: '#EDD413EB',
      },
      boxShadow: {
        golden: '0 2px 5px rgba(237, 212, 19, 0.28)',
      },
      fontFamily: {
        sans: "'Inter', serif",
        oswald: "'Oswald', sans-serif",
      },
    },
  },
  plugins: [],
};
