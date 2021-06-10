import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import ContactForm from "../sources/view/contactForm/ContactForm";
import "../styles/globals.css";
import theme from "../sources/theme";
import Home from "../sources/view/home/Home";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
     <Home />

        {/* <ContactForm/> */}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
