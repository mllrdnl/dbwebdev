import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      smphone: "320px",
      phone: "425px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brick-pattern": "url('/images/brickbg.jpeg')",
      },
      boxShadow: {
        all: "0px 0px 10px 2px rgb(227,143,229,0.8)",
        link: "2px 3px 7px rgb(255, 255, 255, 0.4)",
        linkb: "2px 3px 7px rgb(168, 162, 158, 0.6)",
      },
      fontFamily: {
        mendlSansDawn: "var(--font-mendlSansDawn)",
        mendlSansDusk: "var(--font-mendlSansDusk)",
        rollerScript: "var(--font-rollerScript)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
