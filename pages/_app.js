import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../sources/theme";
import Header from "../sources/layout/Header/Header";
import Home from "../sources/view/home/Home";
import Footer from "../sources/layout/Footer";
import Marketplace from "../sources/view/marketplace/Marketplace";
import ButtonBase from "../sources/view/home/ButtonBase";
import Login from "../sources/view/connexion/Connection";
import Connection from "../sources/view/connexion/Connection";
import Registration from "../sources/view/connexion/components/Register";

export default function VeloCargo({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {/* <ButtonBase />
      <Connection /> */}
      {/* <Connection />
      <Registration /> */}
      <Home />
      {/* <Marketplace /> */}
      <Footer />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
