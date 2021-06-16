import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import Header from '../sources/layout/Header/Header';
import theme from '../sources/theme';

function index(props) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <Header/>
      </ThemeProvider>
    </div>
  );
}

export default index;