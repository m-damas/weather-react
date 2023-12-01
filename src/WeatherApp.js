import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

import "./Weather.css";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("");

  const [temperature, setTemperature] = useState(null);

  function showWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: "Thursday 7:00",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <div className="weather-app-wrapper">
          <nav className="navbar">
            <div className="container-fluid">
              <form className="d-flex">
                <input
                  className="form-control me-4"
                  type="search"
                  placeholder="Type a city"
                  autoFocus="on"
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
              <h1 className="flower">{weatherData.city}</h1>
              <h3>{weatherData.date}</h3>

              <h2 className="flo">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
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
                <li className="text-capitalize">
                  Description: {weatherData.description}
                </li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              </ul>
            </div>

            <div className="col-md-4">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="weather-icon"
              />
            </div>
          </div>

          <div className="weather-forecast"></div>
        </div>
        <br />
      </div>
    );
  } else {
    const apiKey = "6f5688286a7b5cd7f89135c7b3cafe9f";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showWeather);

    return "Loading...";
  }
}
