import React from "react";
import Favorites from "./Favorites";
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
