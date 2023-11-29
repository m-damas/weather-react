import React from "react";
import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <WeatherApp />
      <p>
        <a
          href="https://github.com/m-damas/weather-design"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <b>Open-source code</b>{" "}
        </a>
        by Melissa Damas
      </p>
    </div>
  );
}

export default App;
