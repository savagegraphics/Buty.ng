import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gradientStops: {
        '20': '20%',
        '80': '80%',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        aeonik: ["var(--font-aeonik)"],
        madeMellow: ["var(--font-madeMellow)"],
      },
      colors: {
        eaziDark: "#515251",
        eaziGreen: "#11453B",
      },
      boxShadow: {
        button: "0px 8px 16px 0px rgba(17, 69, 59, 0.20)",
        container: "0px 20px 48px 0px rgba(170, 170, 170, 0.29)",
      },
      screens: {
        "3xl": "1840px",
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
};
export default config;
