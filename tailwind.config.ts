import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          500: "#f59e0b",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
