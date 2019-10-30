import React from "react";
import "../App.css";
import logo from "../assets/Vector.png";

const BasicInfo = ({ match }) => {
  console.log(match);
  return (
    <div>
      <table className="icon-table">
        <tbody>
          <tr>
            <th>
              <img className="icon" src={logo} alt="logo" />
            </th>
            <th>
              <div className="line"> </div>
            </th>

            <th>
              <div className="heading">Basic Information</div>
            </th>
          </tr>
        </tbody>
      </table>

      <div className="box">
        <table className="inner-table">
          <tbody>
            <tr>Register with your work address</tr>
            <tr>
              {" "}
              <input type="text" name="workemail" placeholder="work email" />
            </tr>
            <tr>
              <input type="text" name="password" placeholder="password" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicInfo;

// <div>
//
//
// </div>
