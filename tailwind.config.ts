import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f0f4ff",
        surface: "#ffffff",
        border: "rgba(0,0,0,0.06)",
        "text-primary": "#1a1a2e",
        "text-secondary": "rgba(26,26,46,0.55)",
        "text-tertiary": "rgba(26,26,46,0.35)",
        accent: "#4f6ef7",
        "accent-dim": "rgba(79,110,247,0.08)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(3rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "600" }],
        "section": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "500" }],
      },
      borderRadius: {
        "card": "16px",
        "btn": "10px",
      },
    },
  },
  plugins: [],
};
export default config;
