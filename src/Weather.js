import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [image, setimage] = useState("");

  function showWeather(response) {
    setMessage(
      <ul>
        <div>Temperature: {Math.round(response.data.main.temp)}°C </div>
        <div>Humidity: {response.data.main.humidity}% </div>
        <div>Wind: {Math.round(response.data.wind.speed)} km/h </div>
      </ul>
    );
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

        <div>
          <br />

          <div className="container">
            <div className="row">
              <div className="col">
                <div className="content">
                  <h1 className="cityName">Atlanta GA, USA</h1>
                  <h3>Last updated:</h3>
                  <h2>
                    <span className="temperature">78</span>
                    <span className="units">
                      <a href="/" className="active">
                        °C
                      </a>{" "}
                      |<a href="#">°F</a>
                    </span>
                  </h2>
                  <h4>{message}</h4>
                  <img src={image} alt="" />
                </div>
              </div>
            </div>
            <div className="col d-none d-md-block">
              <img
                src="public/.Atlanta.jpeg"
                className="img-fluid atlanta-image"
                alt="atlanta-image"
              />
            </div>
            //
          </div>
        </div>
      </div>
      <br />
      <p>
        <a href="https://github.com/m-damas/weather-design">
          {" "}
          <b>Open-source code</b>{" "}
        </a>
        by Melissa Damas
      </p>
    </div>
  );
}
