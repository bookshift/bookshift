import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "tertiary-color": "var(--tertiary-color)",
        "background-color": "var(--background-color)",
        "form-background-color": "var(--form-background-color)",
        "purple-alt-color": "var(--purple-alt-color)",
        "pink-alt-color": "var(--pink-alt-color)",
        "primary-grey-color": "var(--primary-grey-color)",
      },
    },
  },
  plugins: [],
};
export default config;
