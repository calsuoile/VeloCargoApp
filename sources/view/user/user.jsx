import React from "react";
import Favorites from "./components/Favorites";
import MyProfil from "./components/MyProfil";
import MyAds from "./components/MyAds";

function User({userProfil}) {
  return (
    <div>
      <MyProfil userProfil={userProfil} />
      <MyAds />
      <Favorites />
    </div>
  );
}

export default User;
