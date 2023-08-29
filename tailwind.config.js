/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
    },
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#6dc1c3",
          "primary-focus": "#508e90",
          "secondary": "#595bb4",
          "secondary-focus": "#3f4181",
          "primary-content": colors.neutral[`800`],
          "secondary-content": colors.neutral[`200`],

          "--rounded-box": ".75rem",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#6dc1c3",
          "primary-focus": "#508e90",
          "secondary": "#595bb4",
          "secondary-focus": "#3f4181",
          "primary-content": colors.neutral[`800`],
          "secondary-content": colors.neutral[`200`],

          "--rounded-box": ".75rem",
        },
      },
    ],
  },
}

