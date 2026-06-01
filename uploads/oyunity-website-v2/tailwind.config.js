const relumeTailwind = require("@relume_io/relume-tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [relumeTailwind],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oyunity: {
          gold: "#C9A961",
          "gold-dark": "#B08D3D",
          blue: "#1E3A8A",
          "blue-soft": "#E8F0F8",
          navy: "#0B1B3B",
          soft: "#FAFAF8",
        },
      },
      fontFamily: {
        serif: ['"DM Serif Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
