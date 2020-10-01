import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import useLocalStorage from "./hooks/useLocalStorage"
import useDarkMode from "./hooks/useLocalStorage"

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode('dark',false);
  //We deconstruct out the value from darkmode varible and the setter from setDarkmode
  //We need to do this to be able to pass it into our navbar on line 28
  //Where we toggle the on and off of the Darknesss

  
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};
// In Navbar 


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
