import React from "react";
import Favoris from "./Favoris";
import MyProfil from "./Myprofil";
import MesBiens from "./MesBiens";



function User(props) {
  return (
    <div>
      <MyProfil />

      <MesBiens />

      <Favoris />
    </div>
  );
}

export default User;
