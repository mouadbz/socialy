import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        primary: "#9333EA",
        darker: "rgb(9,14,26)",
        dark: "rgb(10,16,30)",
        primaryLight: "rgb(66 165 245)",
        secondaryLight: "rgb(149 127 239)",
        secondary: "rgb(113 97 239)",
      },
    },
  },
  plugins: [],
};
export default config;
