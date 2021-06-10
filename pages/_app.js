import React from "react";
import ListArticles from "../sources/view/articles/view/ListArticles";
import ListArticlesHomePage from "../sources/view/articles/view/ListArticlesHomePage";
import ViewArticle from "../sources/view/articles/view/ViewArticle";
import "../styles/globals.css";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import ContactForm from "../sources/view/contactForm/ContactForm";
import "../styles/globals.css";
import theme from "../sources/theme";
import Home from "../sources/view/home/Home";

function MyApp() {
  return (
    <>
      <ListArticlesHomePage />
      {/* <ViewArticle /> */}
      {/* <ListArticles /> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
     <Home />

        {/* <ContactForm/> */}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
