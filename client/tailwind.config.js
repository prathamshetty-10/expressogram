/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}","./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')],
}
