import React, { useEffect, useState } from "react";
import UserContext from "../sources/context/user";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../sources/theme";
import Header from "../sources/layout/Header/Header";
import Home from "../sources/view/home/Home";
import Footer from "../sources/layout/Footer/Footer";
import CreationArticle from "../sources/view/articles/create-article/CreateArticle";
import Loading from "../sources/common/components/Loading";
import Marketplace from "../sources/view/marketplace/Marketplace";
import ButtonBase from "../sources/view/home/ButtonBases";
import Login from "../sources/view/connexion/Connection";
import Connection from "../sources/view/connexion/Connection";
import Registration from "../sources/view/connexion/components/Register";
import CardAdsList from "../sources/view/home/CardAdsList";
import CreateAds from "../sources/view/ads/create_ads/CreateAds";
import FormAds from "../sources/view/ads/create_ads/components/FormAds";
import Main from "../sources/layout/Main";

export default function VeloCargo({ Component, pageProps }) {
  const [connectedUser, setConnectedUser] = useState({});

  // useEffect(() => {
  //   const connectUser = async () => {
  //     const accessToken = localStorage.getItem("userToken");
  //     if (accessToken) {
  //       const config = {
  //         headers: {
  //           Authorization: Bearer ${accessToken},
  //         },
  //       };

  //       const userProfile = await axios.get(
  //         // "https://",
  //         config
  //       );

  //       setConnectedUser(userProfile.data);
  //     }
  //   };

  //   connectUser();
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* <UserContext.Provider value={{ connectedUser, setConnectedUser }}> */}
      <Main>
        <CssBaseline />
        <Component {...pageProps} />
      </Main>
      {/* </UserContext.Provider> */}
    </ThemeProvider>
  );
}
