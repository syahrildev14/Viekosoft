/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#050C9C',
        secondary: '#3572EF',
        accent: '#3ABEF9',
      },
    },
  },
  plugins: [],
}

