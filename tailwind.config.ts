import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Playbill palette — aged paper, ink, theatre carmine, oxidised brass.
        paper: "#F1E8D9",
        "paper-deep": "#E8DCC7",
        ink: "#181311",
        "ink-soft": "#3A2E27",
        carmine: "#A8243A",
        "carmine-deep": "#7E1A2C",
        brass: "#B08A3A",
        powder: "#E2C8B8",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        catalog: "0.22em",
      },
      maxWidth: {
        prose: "62ch",
      },
    },
  },
  plugins: [],
};

export default config;
