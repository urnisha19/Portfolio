/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 8s ease infinite',
      },
      keyframes: {
        'pulse': {
          '0%, 100%': { letterSpacing: '0px' },
          '50%': { letterSpacing: '20px' },
        },
      },
      colors: {
        lavender: '#E6E6FA', // Define your custom lavender color
        rebeccapurple: '#663399'
      },
    },
    variants: {
      extend: {
        rotate: ['hover'],
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light"],
  },
};
