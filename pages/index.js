<<<<<<< HEAD
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import Header from '../sources/layout/Header/Header';
import theme from '../sources/theme';
import Footer from '../sources/layout/Footer';
import Home from '../sources/view/home/Home';
import CreateAds from '../sources/view/ads/create_ads/CreateAds';
import Ads from '../sources/view/ads/view_ads/Ads';
import Marketplace from '../sources/view/marketplace/Marketplace'
=======
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
>>>>>>> origin/dev

function index(props) {
  return (
    <div>
      <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <CssBaseline />
      <Header/>
    
      <Home />
      <Footer />
      
    
=======
        {/* <CssBaseline />
        <Header />
        <Home />
        <Footer /> */}
        <ListArticles />
        <ViewArticle />
>>>>>>> origin/dev
      </ThemeProvider>
    </div>
  );
}

export default index;
