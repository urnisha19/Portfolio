/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: '#E6E6FA',
        rebeccapurple: '#663399',
        steelBlue: '#4682B4', // Added based on your projects page
        slateGray: '#708090',
      },
      fontFamily: {
        // You can customize this or add a Google font here
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        pulseSlow: 'pulse 8s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { letterSpacing: '0px' },
          '50%': { letterSpacing: '20px' },
        },
      },
    },
    variants: {
      extend: {
        rotate: ['hover', 'focus'],
        ringWidth: ['focus'],
        ringColor: ['focus'],
        backgroundColor: ['hover', 'focus'],
        textColor: ['hover', 'focus'],
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ['light'],
  },
};
