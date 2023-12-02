import React from "react";
import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp defaultCity="New York" />
        <p>
          This project was coded by Melissa Damas and is
          <a
            href="https://github.com/m-damas/weather-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <b>open-sourced on GitHub</b>{" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
