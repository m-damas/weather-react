import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

import "./Weather.css";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [descritpion, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");

  function showWeather(response) {
    setDescription(<span>{response.data.weather[0].description}</span>);
    setHumidity(<span> {response.data.main.humidity}% </span>);
    setWind(<span>{Math.round(response.data.wind.speed)} km/h </span>);
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
                autoFocus="on"
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
        <div className="row">
          <div className="col-6">
            <h1 className="flower">Atlanta GA, USA</h1>
            <h3>Last updated:</h3>

            <h2 className="flo">
              <span className="temperature">78</span>
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
          <div className="col-md-6">
            <img
              src={require("./Atlanta.jpeg")}
              className="img-fluid atlanta-image"
              alt="atlanta"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <ul clasName="list">
              <li className="description">Description: {descritpion}</li>
              <li>Humidity: {humidity}</li>
              <li>Wind: {wind}</li>
            </ul>
          </div>

          <div className="col-md-4">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="clear"
              className="weather-icon"
            />
          </div>
        </div>

        <div className="weather-forecast"></div>
      </div>
      <br />
    </div>
  );
}
