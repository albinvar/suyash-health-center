import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0066CC",
          light: "#1E88E5",
          dark: "#004C99",
        },
        secondary: {
          DEFAULT: "#00C853",
          light: "#43A047",
          dark: "#009624",
        },
        accent: {
          DEFAULT: "#FF6F00",
          light: "#FF8F00",
          dark: "#E65100",
        },
        background: {
          DEFAULT: "#FFFFFF",
          light: "#F5F9FC",
        },
        text: {
          primary: "#212121",
          secondary: "#424242",
          light: "#757575",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
