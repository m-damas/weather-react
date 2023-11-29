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
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
        <span>
          <input type="submit" value="Current" />
        </span>
      </form>
      <h2>{message}</h2>
      <img src={image} alt="" />
    </div>
  );
}
