/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Cremona: ["Cremona", "sans-serif"],
        Urbanist: ["Urbanist", "sans-serif"],
        UrbanistMedium: ["UrbanistMedium", "sans-serif"],
        UrbanistSemibold: ["UrbanistSemibold", "sans-serif"],
        UrbanistBold: ["UrbanistBold", "sans-serif"],
      },
      colors: {
        palette: {
          Auburn: "#AA302B",
          SoftAuburn: "#C25A5C",
          Peach: "#F8B791",
          SoftPeach: "#F8B8AF",
          OldRose: "#AE7886",
          OrchidPink: "#DEB2BF",
          ChampagnePink: "#F1DDD6",
        },
      },
      boxShadow: {
        "t-xl": "0px -2px 22px 0px rgba(0,0,0,0.3)",
      },
      gridTemplateColumns: {
        special: "repeat(auto-fit, minmax(280px, 1fr))",
      },
    },
  },
}
