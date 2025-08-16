/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0065F8',
        secondary: '#00CAFF',
        accent: '#3ABEF9',
      },
    },
  },
  plugins: [],
}

