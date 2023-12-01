import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1 className="flower">{props.data.city}</h1>
          <h3>
            <FormattedDate date={props.data.date} />
          </h3>

          <h2 className="flo">
            <span className="temperature">
              {Math.round(props.data.temperature)}
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
          <ul className="list">
            <li className="text-capitalize">
              Description: {props.data.description}
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>

        <div className="col-md-4">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="weather-icon"
          />
        </div>
      </div>

      <div className="weather-forecast"></div>
    </div>
  );
}
