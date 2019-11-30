import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import HomePage from "./components/landingPage/homePage-component/homePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage></HomePage>
      </header>
    </div>
  );
}

export default connect()(App);
