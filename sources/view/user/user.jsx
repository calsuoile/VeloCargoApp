import React from "react";
import Favoris from "./Favoris";
import MyProfil from "./Myprofil";
import MyAds from "./MyAds";



function User(props) {
  return (
    <div>
      <MyProfil />

      <MyAds />

      <Favoris />
    </div>
  );
}

export default User;
