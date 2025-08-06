/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        'sans': ['var(--font-poppins)', 'system-ui', 'sans-serif'], // Poppins como default
      },
    },
  },
  plugins: [],
}
