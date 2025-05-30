/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Clash Grotesk', 'var(--font-sans)', 'sans-serif'],
        chillax: ['var(--font-chillax)', 'sans-serif'],
        borel: ['Borel', 'cursive'],
        noto: ['Noto Serif JP', 'serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "120p": "120%", // For width
        "1550p": "1550%", // For height
      },
      inset: {
        "-10p": "-10%", // For left
      },
      borderRadius: {
        half: "50%", // For border-radius
      },
      boxShadow: {
        custom: "0px 60px 50px rgba(0, 0, 0, 0.748)", // For box-shadow
      },
      fontWeight: {
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
    },
  },
  plugins: [],
};
