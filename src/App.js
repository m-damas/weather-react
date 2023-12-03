import React from "react";
import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp defaultCity="Atlanta" />
        <p>
          This project was coded by Melissa Damas and is
          <a
            href="https://github.com/m-damas/weather-design"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            {" "}
            <b>open-sourced on GitHub</b>{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://resonant-palmier-715d3f.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <b>hosted on Netlify</b>
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
