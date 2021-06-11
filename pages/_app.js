import React from "react";
import ListArticles from "../sources/view/articles/view/ListArticles";
import ViewArticle from "../sources/view/articles/view/ViewArticle";
import "../styles/globals.css";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import "../styles/globals.css";
import theme from "../sources/theme";
import Home from "../sources/view/home/Home";
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
      </ThemeProvider>
    </>
  );
}

export default MyApp;
