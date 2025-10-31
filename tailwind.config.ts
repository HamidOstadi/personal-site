import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // 👈 this is the important line
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
