import palette from "./palette";
import typography from "./typography";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const theme = responsiveFontSizes(
    createMuiTheme({
      palette: palette,
      typography : typography, 
    })
  );

  export default theme; 