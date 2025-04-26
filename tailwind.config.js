/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#8b5cf6',        // Purple (for buttons/icons)
        surface: '#ffffff',        // Cards
        background: '#f9fafb',     // Page background
        border: '#e5e7eb',         // Light borders
        text: '#111827',           // Main text
        subtle: '#6b7280',         // Subheadings
      },
      boxShadow: {
        card: '0 1px 3px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        card: '1rem',
      },
    },
  },
  
  plugins: [],
};
