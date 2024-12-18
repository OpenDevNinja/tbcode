/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        principal: "#00332e",  // Darker and richer teal for emphasis
        primary: {
          DEFAULT: '#121212',
          light: '#333333',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#1E1F28',
          light: '#2d2e38',
          dark: '#17181e',
        },
        accent: {
          DEFAULT: '#ffb55f',  // Warmer accent color
          light: '#ffcb88',
          dark: '#e69a47',
          hover: '#ffd48b',
        },
        teal: {
          DEFAULT: '#6a55e8',  // Richer teal for balance
          light: '#00897b',
          dark: '#004c45',
          hover: '#007d6f',
        },
        sand: {
          DEFAULT: '#ebd6b5',
          light: '#f5e7c8',
          dark: '#d4c5af',
        },
        paragraph: '#a0aab3',  // Softer contrast for readability
        success: '#34d399',
        warning: '#fbbf24',
        error: '#f87171',
        background: {
          light: '#f8fafc',
          dark: '#1a202e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'medium': '0 6px 15px rgba(0, 0, 0, 0.1)',
        'hard': '0 8px 30px rgba(0, 0, 0, 0.15)',
        'accent': '0 4px 20px rgba(255, 181, 95, 0.4)',  // Accentuated shadow for focal elements
      },
      backgroundImage: theme => ({
        'grid': 'linear-gradient(to bottom right, rgba(255,255,255,0.05) 1px, transparent 1px)',
      })
    }
  },
  plugins: [],
}
