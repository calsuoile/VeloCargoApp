import React from 'react';
import Footer from '../sources/layout/Footer';
import Home from '../sources/view/home/Home'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  {/* <Component {...pageProps} /> */}
  <Home />
  <Footer />
  </>
  )
}

export default MyApp
