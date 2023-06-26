/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          // "primary": "#60c9ca",
          // "secondary": "#6d69c1",
          // "accent": "#d65d40",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          // "primary": "#60c9ca",
          // "secondary": "#6d69c1",
          // "accent": "#d65d40",
        },
      },
    ],
  },
}

