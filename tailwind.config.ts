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
        "jade-and-brogue": {
          primary: "#1D3960",
          teal: "#00B2A9",
          text: "#1D2635",
          "gray-text": "#566375",
          darkbg: "#171A1E",
          neutral: {
            10: "#101E14",
            20: "#344639",
            30: "#4E5F53",
            40: "#748178",
            50: "#A1AAA4",
            60: "#CDD6D0",
            70: "#E3E8E5",
            80: "#F4F5F5",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
