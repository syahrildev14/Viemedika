/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        primary: "#FBAA28",       // biru navy
        secondary: "#F59E0B",     // kuning amber
        accent: "#10B981", 
        hoverBtn: "#EB9A18",       // hijau emerald        // abu-abu netral    // abu terang   // warna border
        dark: {
          100: "#1F2937",
          200: "#111827",
        },
      },
    },
  },
  plugins: [],
}
