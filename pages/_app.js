import React, { useEffect, useState } from "react";
import UserContext from "../sources/context/user";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../sources/theme";
import Header from "../sources/layout/Header/Header";
import axios from "axios";


export default function VeloCargo({ Component, pageProps }) {
  // const [connectedUser, setConnectedUser] = useState({});

  // useEffect(() => {
  //   const connectUser = async () => {
  //     const accessToken = localStorage.getItem("userToken");
  //     if (accessToken) {
  //       const config = {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
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
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      {/* </UserContext.Provider> */}
    </ThemeProvider>
  );
}
