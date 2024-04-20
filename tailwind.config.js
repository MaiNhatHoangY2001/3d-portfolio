/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'tech-primary': '#1a202c', // Deep shades of blue or green
        'tech-accent': '#38b2ac', // Electric blue or neon green
        'tech-dark': '#2d3748', // Dark gray or charcoal
        // Add more colors as needed
      },
    },
  },
  plugins: [],
};
