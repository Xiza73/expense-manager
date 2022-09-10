module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        100: "#ebefe3",
        150: "#e8eddf",
        200: "#c8d4b2",
        "d-100": "#464946",
        "d-150": "#333533",
        "d-200": "#282a28",
      },
      secondary: {
        100: "#d7e1dc",
        150: "#cfdbd5",
        200: "#acc0b6",
        "d-100": "#373737",
        "d-150": "#202020",
        "d-200": "#1b1b1b",
      },
      strong: {
        100: "#f6d474",
        150: "#f5cb5c",
        200: "#f2bd2d",
        "d-100": "#ffd829",
        "d-150": "#FFD100",
        "d-200": "#e6bb00",
      },
      weak: {
        100: "#fff154",
        150: "#FFEE32",
        200: "#ffeb11",
        "d-100": "#505350",
        "d-150": "#333533",
        "d-200": "#2a2c2a",
      },
      neutral: {
        100: "#454544",
        150: "#242423",
        200: "#1f1f1e",
        "d-100": "#e2e2e2",
        "d-150": "#D6D6D6",
        "d-200": "#cbcbcb",
      },
      light: {
        100: "#f8f9fa",
        150: "#f1f2f3",
        200: "#e9ecef",
      },
      dark: {
        100: "#212529",
        150: "#1b1c1d",
        200: "#0f1011",
      },
    },
    extend: {},
  },
  plugins: [],
};
