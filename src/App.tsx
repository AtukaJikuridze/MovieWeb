import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LeftsideNav from "./components/LeftsideNav/LeftsideNav";
import RightsideNav from "./components/RightsideNav/RightsideNav";

function App() {
  const [continueWatching, setContinueWatchList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  return (
    <div className="App">
      <LeftsideNav />
      <Header />
      <RightsideNav watchList={watchList} continueWatching={continueWatching} />
    </div>
  );
}

export default App;
