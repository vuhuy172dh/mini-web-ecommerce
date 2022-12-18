const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: '#0c192c',
        blue_lighter: '#4fc3dc',
        red: '#ff2d75',
        brown_lighter: '#fbebe3',
        brown: '#de936d',
        black: '#35221d',
      },
      keyframes: {
        bubble: {
          '0%': { transform: 'translateY(100vh) scale(0)' },
          '100%': { transform: 'translateY(-10vh) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
