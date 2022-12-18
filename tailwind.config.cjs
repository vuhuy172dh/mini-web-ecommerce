const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '320px',
      tablet: '768px',
      laptop: '1024px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: '#0c192c',
        blue_lighter: '#4fc3dc',
        red: '#ff2d75',
        primary: '#4e4d93',
        dark_primary: '#2a254b',
        secondary: '#424242',
        dark_secondary: '#1b1b1b',
        light_grey: '#f9f9f9',
        border_grey: '#ebe8f4',
        border_dark: '#cac6da',
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
