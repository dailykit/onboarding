import React from "react";
import "../App";
import logo from "../assets/image.png";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

const startRegistration = () => {};

function LandingPage() {
  return (
    <div>
      <div className="left-panel">
        <img src={logo} className="App-logo" alt="logo" />

        <p className="company"> Tell us about your company</p>
        <p className="company-caption">
          {" "}
          so we prepare everything as per your needs{" "}
        </p>

        <p className="host">Host your Dailykit </p>
        <p className="host-caption">
          {" "}
          with us or self-host and invite your team
        </p>
      </div>

      <div className="right-panel">
        <p className="main-text">
          Set up your account with us in 2 simple steps
        </p>
        <p className="caption">Lets get started</p>
        <Link to={`/register/?basicinfo=#step1`}>
          {" "}
          <Button
            variant="success"
            className="button"
            onClick={startRegistration}
          >
            <span style={{ color: "#FFFFFF" }}>LETS BEGIN </span>
          </Button>
        </Link>
        ;
      </div>
    </div>
  );
}

export default LandingPage;
