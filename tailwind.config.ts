import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B6B",
        // secondary: "#F5741C",
        secondary: "#97233F",
        tertiary: "#97233F",
        darkBg: "#131424",
      },
      backgroundImage: {
        "gradient-cover": "linear-gradient(90.21deg, rgba(170,54,124,0.5) -5.91%, rgba(74,47,189,0.5) 111.58%)",
      },
    },
  },
  plugins: [],
};
export default config;
