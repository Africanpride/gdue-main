import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
        ibm: ["IBMPlexSansCondensed-Regular", "sans-serif"], // For IBM Plex Sans Condensed
        inter: ["Inter", "sans-serif"], // For Inter font
        poppins: ["Poppins", "sans-serif"], // For Poppins font
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5.5rem",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require("preline/plugin"),
    require("tailwindcss-animated"),
  ],
};
