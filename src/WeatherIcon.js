import React from "react";
import { ReactSkycon } from "react-skycons-extended";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEARDAY",
    "01n": "CLEARNIGHT",
  };

  return (
    <div className="App">
      <ReactSkycon icon={codeMapping[props.code]} />
    </div>
  );
}
