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
          "primary-content": colors.stone[`900`],
          "secondary-content": colors.stone[`200`]
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#6dc1c3",
          "primary-focus": "#508e90",
          "secondary": "#595bb4",
          "secondary-focus": "#3f4181",
          "primary-content": colors.stone[`900`],
          "secondary-content": colors.stone[`100`]
        },
      },
    ],
  },
}

