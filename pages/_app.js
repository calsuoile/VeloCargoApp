import React from "react";
import Footer from "../sources/layout/Footer";
import Home from "../sources/view/home/Home";
import "../styles/globals.css";
import ListArticles from "../sources/view/articles/view/ListArticles";
import ViewArticle from "../sources/view/articles/view/ViewArticle";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../sources/theme";
import ListArticlesHomePage from "../sources/view/articles/view/ListArticlesHomePage";

function MyApp() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
        {/* <ViewArticle /> */}
        <ListArticles />
        {/* <ListArticlesHomePage /> */}
        {/* <ContactForm/> */}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
