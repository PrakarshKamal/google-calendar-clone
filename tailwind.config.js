/** @type {import('tailwindcss').Config} */

const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
  "yellow",
  "cyan",
];

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [
      ...labelsClasses.map((label) => `bg-${label}-200`),
      ...labelsClasses.map((label) => `bg-${label}-500`),
      ...labelsClasses.map((label) => `text-${label}-400`),
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"],
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
