import React from "react";
// import logo from './logo.svg';
import logo from "./assets/image.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          <div className="button">
            <span className="button-text">LETS BEGIN</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

// <body>

// </body>
// <footer></footer>

//           <div className="outer-circle"> </div>
