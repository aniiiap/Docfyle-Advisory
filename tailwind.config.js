/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./sections/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f0f7f6",
          100: "#dceeea",
          200: "#b8d9d2",
          500: "#2a7b8c",
          600: "#236570",
          700: "#1b4f5c",
          navy: "#1a2f3a",
          ink: "#2c2825",
          cloud: "#faf7f2",
          sand: "#f3ede4",
          cream: "#fffdf9",
          gold: "#c17f3a",
          orange: "#d97736",
          stone: "#5c554c",
        },
      },
      boxShadow: {
        soft: "0 12px 40px rgba(44, 40, 37, 0.07)",
        glow: "0 16px 48px rgba(42, 123, 140, 0.24)",
        card: "0 4px 28px rgba(44, 40, 37, 0.08)",
        warm: "0 20px 50px rgba(193, 127, 58, 0.12)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2a7b8c 0%, #1b4f5c 52%, #1a2f3a 100%)",
        "brand-gradient-warm":
          "linear-gradient(135deg, #2a7b8c 0%, #1b4f5c 45%, #1a2f3a 85%, rgba(193,127,58,0.15) 100%)",
        "hero-overlay":
          "linear-gradient(125deg, rgba(26,47,58,0.94) 0%, rgba(26,47,58,0.78) 42%, rgba(42,123,140,0.58) 100%)",
        "page-hero": "linear-gradient(145deg, #fffdf9 0%, #f3ede4 45%, #e8f4f2 100%)",
        "footer-gradient": "linear-gradient(180deg, #1a2f3a 0%, #152228 100%)",
      },
    },
  },
  plugins: [],
};
