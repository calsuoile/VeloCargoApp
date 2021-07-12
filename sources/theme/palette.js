const palette = {
  common: { black: "#000", white: "#fff" },
  background: {
    paper: "rgba(255, 255, 255, 1)", //blanc
    default: "rgba(255, 255, 255, 1)",
  },
  type: "light",
  primary: {
    light: "#B4B8D4", // bleu clair
    main: "#5E77EB", // bleu 
    dark: "#B4B8D4", // bleu clair
    contrastText: "rgba(255, 255, 255, 1)", // blanc
  },
  secondary: {
    light: "#FCDCB2", //orange terra cota
    main: "#F27A06", // orange
    dark: "#FADF54", // jaune clair doux
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
