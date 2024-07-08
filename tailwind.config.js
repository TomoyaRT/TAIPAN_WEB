import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      screens: {
        "mobile-sm": "375px",
        "mobile-md": "414px",
        "tablet-sm": "768px",
        "tablet-md": "1024px",
        "desktop-sm": "1280px",
        "desktop-md": "1366px",
        "desktop-lg": "1536px",
        "desktop-xl": "1920px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
