import React from "react";
import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp />
        <p>
          <a
            href="https://github.com/m-damas/weather-design"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <b>Open-sourced code</b>{" "}
          </a>
          by Melissa Damas
        </p>
      </div>
    </div>
  );
}

export default App;
