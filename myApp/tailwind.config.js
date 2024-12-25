/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your source files
    "./node_modules/@ionic/react/**/*.js", // Include Ionic components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
