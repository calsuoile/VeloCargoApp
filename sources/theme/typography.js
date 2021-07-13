import { common } from "@material-ui/core/colors";
import palette from "./palette";

// A utiliser dans des balises <Typrography> avec variant="...". 
const typography = {
  h1: {
    color: palette.primary.light,
    fontWeight: 900,
    fontSize: "40px",
    lineHeight: 1.1,
    fontFamily: "Staatliches, cursive",
    // Gros titre épais et vert clair. 
  },
  h2: {
    color: palette.primary.light, 
    fontWeight: 400,
    fontSize: "38px",
    lineHeight: 1.5,
    fontFamily: "Open Sans Condensed, sans-serif",
    textTransform: "uppercase",
    // Sous titre fin et vert en majuscule. 
  },
  h3: {
    color: palette.primary.light,
    fontWeight: 400,
    fontSize: "32px",
    lineHeight: 1.25,
    fontFamily: "Staatliches, cursive",
    // Titre regular jaune foncé GROSSE LETTRE majucule
  },
  h4: {
    color: palette.primary.light,
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: 1.35,
    fontfamily: "Raleway"
    // Titre lettre arrondie et jaune clair. 
  },
  h5: {
    color: palette.primary.main, 
    fontWeight: 400,
    fontSize: "38px",
    lineHeight: 1.5,
    fontFamily: "Open Sans Condensed, sans-serif",
    textTransform: "uppercase",
    // Même titre que h2 en Noir. 
  },
  h6: {
    color: common.white,
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
    // Typo pour paragraphe et texte. (petite taille)
  },
  body2: {
    color: common.black,
    fontSize: "16px",
    lineHeight: 1.3,
    fontFamily: "Raleway",
    // Typo pour paragraphe et texte, lettre arrondie (taille moyenne)
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
    color: palette.secondary.light
  },
  // sous titre petite lettre en majuscule, terra cotta. 
  outlined: {
    fontFamily: "Open Sans Condensed",
   
  },
};



export default typography;
