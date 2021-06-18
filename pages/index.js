import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import Header from '../sources/layout/Header/Header';
import theme from '../sources/theme';
import Footer from '../sources/layout/Footer';
import Home from '../sources/view/home/Home';
import Marketplace from '../sources/view/marketplace/Marketplace';
import Login from '../sources/view/connexion/components/Login';
import ListArticles from "../sources/view/articles/view-articles/ListArticles";
import ViewArticle from "../sources/view/articles/view-articles/ViewArticle";
import CreateAds from '../sources/view/ads/create_ads/CreateAds';
import Ads from '../sources/view/ads/view_ads/Ads';

function index(props) {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <Home />
      <Footer />
      <Login />
      <Marketplace />
      <Ads />
      <CreateAds />
      <ListArticles />
      <ViewArticle />
      </ThemeProvider>
    </div>
  );
}

export default index;
