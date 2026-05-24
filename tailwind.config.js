/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        ripple: 'ripple 2.8s ease-out infinite',
        blob: 'blob 7s infinite',
      },
      keyframes: {
        ripple: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(0.9)',
            opacity: '0.9',
            boxShadow: '0 0 0px hsl(var(--primary) / 0.5)',
          },
          '40%': {
            transform: 'translate(-50%, -50%) scale(1.4)',
            opacity: '0.35',
            boxShadow: '0 0 20px hsl(var(--accent) / 0.4)',
          },
          '70%': {
            transform: 'translate(-50%, -50%) scale(1.2)',
            opacity: '0.25',
            boxShadow: '0 0 12px hsl(var(--foreground) / 0.3)',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: '0.15',
            boxShadow: '0 0 0px hsl(var(--foreground) / 0.15)',
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    "ripple",]
};
