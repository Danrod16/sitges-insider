const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/views/**/*.html.erb",
  ],
  safelist: [
    { pattern: /form-.+/, },
    { pattern: /btn-.+/, }
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.indigo,
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
