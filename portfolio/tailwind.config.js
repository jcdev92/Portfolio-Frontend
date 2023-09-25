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
        "milky-way" : "url('../img/pexels-photo-924824.webp')"
      },
      scale: {
        '98' : '0.98',
      }
    },
    colors: {
      'odp-bg': '#1E2127',
      'odp-text': '#ABB2BF',
      'odp-text-light':'#282c38',
      'odp-pink-light': '#e06c75',
      'odp-foreground' : '#282c34',
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
      mono: ['"JetBrains Mono"', 'ui-monospace'],
      bebas: ["Bebas Neue", "sans-serif"],
      exo: ['"Exo 2"', "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin"), require('tailwind-scrollbar')({ nocompatible: true })],
};
