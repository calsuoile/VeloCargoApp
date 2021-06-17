import React from "react";
import Footer from "../sources/layout/Footer";
import Home from "../sources/view/home/Home";
import ListArticles from "../sources/view/articles/view/ListArticles";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../sources/theme";
import Ads from "../sources/view/ads/view_ads/Ads";
import ViewArticle from "../sources/view/articles/view/ViewArticle";
import Hero from "../sources/view/articles/view/Hero";
import { ContactPhoneTwoTone } from "@material-ui/icons";

function MyApp() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        {/* <Home /> */}
        {/* <Ads /> */}
        {/* <ListArticles /> */}
        <ViewArticle />
        {/* <Footer /> */}
        {/* <Hero
          cover={{ src: "https://source.unsplash.com/random?bike/1" }}
        /> */}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
