const palette = {
  common: { black: "#000", white: "#fff" },
  background: {
    paper: "rgba(255, 255, 255, 1)", //blanc
    default: "rgba(255, 255, 255, 1)",
  },
  type: "light",
  primary: {
    light: "rgba(252, 242, 55, 1)", // jaune clair vif
    main: "rgba(164, 222, 163, 1)", // vert
    dark: "rgba(154, 212, 154, 1)", // vert clair moins vif
    contrastText: "rgba(255, 255, 255, 1)", // blanc
  },
  secondary: {
    light: "rgba(237, 162, 116, 1)", //orange terra cota
    main: "rgba(255, 196, 0, 1)", // jaune foncé
    dark: "rgba(255, 209, 73, 1)", // jaune clair doux
    contrastText: "rgba(252, 248, 247, 1)", // blanc
  },
  error: {
    light: "rgba(237, 162, 116, 1)", // orange terra cota
    main: "rgba(237, 162, 116, 1)", // orange terra cota
    dark: "rgba(237, 162, 116, 1)", // orange terra cota
    contrastText: "#fff", // blanc
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(59, 63, 53, 1)",
    disabled: "rgba(237, 162, 116, 1)",
    hint: "rgba(0, 0, 0, 0.38)",
  },
};
export default palette;
