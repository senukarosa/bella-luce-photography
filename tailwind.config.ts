import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand accents
        amber: {
          DEFAULT: "#FFBF00",
          50:  "#FFFBEA",
          100: "#FFF3C4",
          200: "#FFE680",
          300: "#FFD33D",
          400: "#FFBF00",
          500: "#E6AA00",
          600: "#B38600",
          700: "#7C5C00",
          800: "#4A3700",
          900: "#291F00",
        },
        cyber: {
          DEFAULT: "#00A3FF",
          50:  "#E6F5FF",
          100: "#BFDFFF",
          200: "#80C3FF",
          300: "#40A8FF",
          400: "#00A3FF",
          500: "#0093E6",
          600: "#0072B3",
          700: "#00527D",
          800: "#003249",
          900: "#001A29",
        },
        orange: {
          DEFAULT: "#FF5C00",
          50:  "#FFF0E6",
          100: "#FFD4B8",
          200: "#FFAA80",
          300: "#FF8040",
          400: "#FF5C00",
          500: "#E65300",
          600: "#B34100",
          700: "#7D2E00",
          800: "#4A1C00",
          900: "#290F00",
        },
        // Surface grays
        surface: {
          DEFAULT: "#1A1A1A",
          alt: "#222222",
          border: "#2E2E2E",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        "open-sans": ["var(--font-open-sans)", "system-ui", "sans-serif"],
        jetbrains: ["var(--font-jetbrains)", "Courier New", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      gridTemplateColumns: {
        "bento-12": "repeat(12, minmax(0, 1fr))",
      },
      gridAutoRows: {
        bento: "90px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition:  "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-14px)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(24px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-glow-amber": {
          "0%, 100%": { boxShadow: "0 0 15px rgba(255,191,0,0.3)" },
          "50%":      { boxShadow: "0 0 30px rgba(255,191,0,0.6)" },
        },
        "pulse-glow-cyber": {
          "0%, 100%": { boxShadow: "0 0 15px rgba(0,163,255,0.3)" },
          "50%":      { boxShadow: "0 0 30px rgba(0,163,255,0.6)" },
        },
      },
      animation: {
        "accordion-down":      "accordion-down 0.2s ease-out",
        "accordion-up":        "accordion-up 0.2s ease-out",
        shimmer:               "shimmer 1.5s infinite",
        float:                 "float 6s ease-in-out infinite",
        "fade-in-up":          "fade-in-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slide-in-right":      "slide-in-right 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "pulse-glow-amber":    "pulse-glow-amber 2s ease-in-out infinite",
        "pulse-glow-cyber":    "pulse-glow-cyber 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
