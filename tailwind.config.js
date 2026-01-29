/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#0066cc',
          600: '#174585',
          700: '#13386A',
        },
        secondary: {
          500: '#4CAF50',
          600: '#388E3C',
          700: '#2E7D32',
        },
        accent: {
          500: '#F59E0B', // amber for alerts
        },
        success: {
          500: '#10B981',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};