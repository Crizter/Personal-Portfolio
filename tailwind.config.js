/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: '#f5f5f5',
        customGray: '#e6e6e6',
      },
    },
  },
  plugins: [],
}

