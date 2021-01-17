module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        orange: {
          DEFAULT: "#FF5B3A"
        },
        yellow: {
          light: "#fef5dc"
        },
        gray: {
          lighter: "#676471",
          light: "#47465B",
          DEFAULT: "#33334E"
        },
        peach: "#FDCEBD"
      }
    }
  },
  variants: {
    extend: {},
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"]
  },
  plugins: []
};
