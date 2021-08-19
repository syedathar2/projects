import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import TV from "./TV";
import { Route } from "react-router-dom";
import Linker from "./Linker";

function App() {
  return (
    <div className="app">
      <Linker />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/films" component={HomePage} />
      <Route exact path="/tv-series" component={TV} />
    </div>
  );
}

export default App;
