/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        'simple': '3px 3px 0px 0px rgba(0,0,0,0.1)',
      }
    },
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#60c9ca",
          "secondary": "#6d69c1",
          // "accent": "#d65d40",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#60c9ca",
          "secondary": "#6d69c1",
          // "accent": "#d65d40",
        },
      },
    ],
  },
}

