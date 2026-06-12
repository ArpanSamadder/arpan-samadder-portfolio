import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
      },
      colors: {
        royal: {
          50: "#eff6ff",
          100: "#dbeafe",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          950: "#07111f",
        },
        neon: {
          cyan: "#4de8ff",
          blue: "#3a7bff",
          violet: "#8b5cf6",
        },
      },
      boxShadow: {
        glow: "0 0 50px rgba(59, 130, 246, 0.35)",
        card: "0 24px 80px rgba(5, 20, 50, 0.42)",
      },
      backgroundImage: {
        "radial-royal": "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.28), transparent 30%), radial-gradient(circle at 80% 0%, rgba(77, 232, 255, 0.16), transparent 28%), linear-gradient(135deg, #061020 0%, #081a38 52%, #031027 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
