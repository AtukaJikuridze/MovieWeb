import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import LeftsideNav from "./components/LeftsideNav/LeftsideNav";
import RightsideNav from "./components/RightsideNav/RightsideNav";

function App() {
  const [continueWatching, setContinueWatchList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  return (
    <div className="App">
      <LeftsideNav />
      <Main />
      <RightsideNav watchList={watchList} continueWatching={continueWatching} />
    </div>
  );
}

export default App;
