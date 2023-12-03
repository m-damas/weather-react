import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./WeatherApp.css";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon_url,
    });
  }
  function search() {
    const apiKey = "td6b219f3d3oca374173c4ae55621b00";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
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
                  onChange={handleCityChange}
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
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
