import palette from "./palette";

const typography = {
  h1: {
    color: palette.primary.main,
    fontWeight: 900,
    fontSize: "40px",
    lineHeight: 1.1,
    fontFamily: "Staatliches, cursive",
  },
  h2: {
    color: palette.text.primary,
    fontWeight: 900,
    fontSize: "38px",
    lineHeight: 1.5,
    fontFamily: "Staatliches, cursive",
  },
  h3: {
    color: palette.text.primary,
    fontWeight: 900,
    fontSize: "32px",
    lineHeight: 1.25,
  },
  h4: {
    color: palette.text.primary,
    fontWeight: 900,
    fontSize: "24px",
    lineHeight: 1.35,
  },
  h5: {
    color: palette.text.primary,
    fontWeight: 900,
    fontSize: "20px",
    lineHeight: 1.4,
  },
  h6: {
    color: palette.secondary.light,
    fontWeight: 900,
    fontSize: "18px",
    lineHeight: 1.45,
    fontFamily: "Open Sans Condensed, sans-serif",
  },
  subtitle1: {
    color: palette.text.primary,
    fontSize: "16px",
    lineHeight: 1.4,
  },
  subtitle2: {
    color: palette.text.secondary,
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: 1.4,
  },
  body1: {
    color: palette.text.primary,
    fontSize: "14px",
    lineHeight: 1.3,
    fontFamily: "Open Sans Condensed, sans-serif",
  },
  body2: {
    color: palette.text.secondary,
    fontSize: "14px",
    lineHeight: 1.3,
  },
  button: {
    color: palette.primary.light,
    fontSize: "14px",
    fontWeight: 900,
    lineHeight: 1.3,
  },
  caption: {
    color: palette.text.secondary,
    fontSize: "12px",
    lineHeight: 1.35,
  },
  overline: {
    fontSize: "13px",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  outlined: {
    fontFamily: "Open Sans Condensed"
  },
};

export default typography;
