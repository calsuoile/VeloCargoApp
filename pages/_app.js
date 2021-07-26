import React, { useEffect, useState } from "react";
import UserContext from "../sources/context/user";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../sources/theme";
import Main from "../sources/layout/Main";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../sources/styles.css";




export default function VeloCargo({ Component, pageProps }) {
  const [connectedUser, setConnectedUser] = useState({});

  useEffect(() => {
    const connectUser = async () => {
      const accessToken = localStorage.getItem("userToken");
      if (accessToken) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        axios
          .get(`${process.env.NEXT_PUBLIC_API_URL}users/me`, config)
          .then((userProfile) => setConnectedUser(userProfile.data))
          .catch((err) => console.error(err));
      }
    };

    connectUser();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ connectedUser, setConnectedUser }}>
        <Main>
          <CssBaseline />
          <Component {...pageProps} />
          <ToastContainer />
        </Main>
      </UserContext.Provider>
    </ThemeProvider>
  );
}
