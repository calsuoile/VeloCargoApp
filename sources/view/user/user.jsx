import React from "react";
import Favorites from "./Favoris";
import MyProfil from "./Myprofil";
import MyAds from "./MyAds";

function User(props) {
  return (
    <div>
      <MyProfil />
      <MyAds />
      <Favorites />
    </div>
  );
}

export default User;
