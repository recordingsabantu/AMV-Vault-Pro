import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'vault-gold': '#C5A059',
        'vault-dark': '#0F0908',
        'vault-brown': '#1E1412',
      },
    },
  },
  plugins: [],
};
export default config;
