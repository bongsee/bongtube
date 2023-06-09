/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // brand color definitions
        brand: "#FF0000",
      },
    },
  },
  plugins: [
    import('@tailwindcss/line-clamp')
  ],
}
