import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LeftsideNav from "./components/LeftsideNav/LeftsideNav";

function App() {
  return (
    <div className="App">
      <LeftsideNav />
      <Header />
    </div>
  );
}

export default App;
