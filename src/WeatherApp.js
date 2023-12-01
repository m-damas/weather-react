import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./WeatherApp.css";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function showWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "6f5688286a7b5cd7f89135c7b3cafe9f";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
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
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
