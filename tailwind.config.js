/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
      },
      colors:{
        teal: {955: "#075985"},
        gray: {955: "#C4C4C4"},
      },
      height:{
         "42": "10.625rem",
         "65": "17.375rem",
         "18": "4.5rem"
      },
      width:{
        "500": "32.0625rem",
        "18": "4.5rem",
        "110": "64.9375rem"
      }
    },
  },
  plugins: [],
}
