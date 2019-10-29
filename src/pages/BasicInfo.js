import React from "react";
import "../App.css";
import logo from "../assets/Vector.png";

const BasicInfo = ({ match }) => {
  console.log(match);
  return (
    <div>
      <img className="icon" src={logo} alt="logo" />
      <div className="line"> </div>
    </div>
  );
};

export default BasicInfo;
