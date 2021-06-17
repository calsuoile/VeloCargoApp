import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import Header from '../sources/layout/Header/Header';
import theme from '../sources/theme';
import Footer from '../sources/layout/Footer';
import Home from '../sources/view/home/Home';

function index(props) {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <Home />
      <Footer />
      </ThemeProvider>
    </div>
  );
}

export default index;
