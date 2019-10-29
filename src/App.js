import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/BasicInfo";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/register" component={Register} />
          <Route path="/register/?basicinfo=:id" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
