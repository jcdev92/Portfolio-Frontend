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
        "milky-way" : "url('https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg')"
      }
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      bebas: ["Bebas Neue", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
