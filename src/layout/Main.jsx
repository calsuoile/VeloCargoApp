import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function Main(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Main;
