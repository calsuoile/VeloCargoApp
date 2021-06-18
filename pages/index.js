import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Header from "../sources/layout/Header/Header";
import theme from "../sources/theme";
import Footer from "../sources/layout/Footer";
import Home from "../sources/view/home/Home";
import ViewArticle from "../sources/view/articles/view-articles/ViewArticle";
import ListArticlesHomePage from "../sources/view/articles/view-articles/ListArticlesHomePage";
import ListArticles from "../sources/view/articles/view-articles/ListArticles";

function index(props) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline />
        <Header />
        <Home />
        <Footer /> */}
        <ListArticles />
        <ViewArticle />
      </ThemeProvider>
    </div>
  );
}

export default index;
