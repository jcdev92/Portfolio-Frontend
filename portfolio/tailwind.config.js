/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "milky-way" : "url('../public/img/pexels-photo-924824.webp')"
      }
    },
    animation: {
      'gradient-x': 'gradient-x 15s ease infinite',
    },
    keyframes: {
      'gradient-x': {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center',
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center',
        },
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      bebas: ["Bebas Neue", "sans-serif"],
      exo: ['"Exo 2"', "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin"), require('tailwind-scrollbar')({ nocompatible: true })],
};
