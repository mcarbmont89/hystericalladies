import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Bold cabaret palette — black stage, scarlet spotlight, silver type.
        // NOTE: tokens are intentionally dark-first.
        //   paper / paper-deep  = dark section backgrounds
        //   ink / ink-soft      = light foreground text
        paper: "#0A0A0A",
        "paper-deep": "#151515",
        ink: "#F4F2EF",
        "ink-soft": "#A9A6A2",
        carmine: "#E10600",
        "carmine-deep": "#B00400",
        brass: "#C4C0BA",
        powder: "#F2B5B0",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        catalog: "0.22em",
        tightest: "-0.03em",
      },
      maxWidth: {
        prose: "62ch",
      },
    },
  },
  plugins: [],
};

export default config;
