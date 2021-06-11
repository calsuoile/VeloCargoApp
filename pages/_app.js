import React from 'react';
import Footer from '../sources/layout/Footer';
import Home from '../sources/view/home/Home'
import Contact from '../sources/view/Form/Contact'
import '../styles/globals.css'
import ListArticles from "../sources/view/articles/view/ListArticles";
import ListArticlesHomePage from "../sources/view/articles/view/ListArticlesHomePage";
import ViewArticle from "../sources/view/articles/view/ViewArticle";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../sources/theme";

function MyApp() {
  return (
    <>
      <ListArticlesHomePage />
      {/* <ViewArticle /> */}
      {/* <ListArticles /> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
     <Home />
      </ThemeProvider>
  <Footer />
  {/* <Contact /> */}
  </>
  
  );
}

export default MyApp;
