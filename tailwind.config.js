/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Keep your app files
    "./src/app/**/*.{js,ts,jsx,tsx}",
    
    // ADD these important paths:
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",      // If using pages directory
    "./src/views/**/*.{js,ts,jsx,tsx}",      // If using views
    "./src/layouts/**/*.{js,ts,jsx,tsx}",    // If using layouts
    "./public/**/*.html",                    // For any HTML files
    
    // Also add the root layout file if it's outside app
    "./src/**/*.{js,ts,jsx,tsx}",
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
          500: '#F59E0B',
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