import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

import "./Weather.css";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [descritpion, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [temp, setTemp] = useState("");
  const [image, setimage] = useState("");

  function showWeather(response) {
    setTemp(<div>Temperature: {Math.round(response.data.main.temp)}°C </div>);
    setDescription(
      <div>Description: {response.data.weather[0].description}</div>
    );
    setHumidity(<div>Humidity: {response.data.main.humidity}% </div>);
    setWind(<div>Wind: {Math.round(response.data.wind.speed)} km/h </div>);
    setimage(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "6f5688286a7b5cd7f89135c7b3cafe9f";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="WeatherApp">
      <div className="weather-app-wrapper">
        <nav className="navbar">
          <div className="container-fluid">
            <form onSubmit={handleSubmit} className="d-flex">
              <input
                className="form-control me-4"
                type="search"
                placeholder="Type a city"
                onChange={updateCity}
              />
              <button
                className="btn btn-outline-success me-3"
                type="submit"
                value="Search"
              >
                Search
              </button>

              <button
                className="btn btn-outline-primary"
                type="submit"
                value="Current"
              >
                Current
              </button>
            </form>
          </div>
        </nav>
        <br />
        <h1 className="flower">Atlanta GA, USA</h1>
        <h3>Last updated:</h3>
        <div>
          <h2 className="flo">
            <span class="temperature">78</span>
            <span className="units">
              <a href="/" className="active" rel="noreferrer">
                °C
              </a>{" "}
              |
              <a href="/" rel="noreferrer">
                °F
              </a>
            </span>
          </h2>
        </div>
        <div className="Wrapper">
          <img
            src={require("./Atlanta.jpeg")}
            className="img-fluid atlanta-image"
            alt="atlanta"
          />
        </div>
        <div className="col-6">
          <ul clasName="list">
            <li className="description">Description: Sunny</li>
            <li>Humidity: 60%</li>
            <li>Wind: 10%</li>
          </ul>
        </div>
        <div className="wrapper d-flex">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="clear"
            className="weather-icon"
          />
        </div>
        <div className="weather-forecast"></div>
      </div>
      <br />
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
