import React from "react";
import { ReactSkycon } from "react-skycons-extended";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "SHOWERS_DAY",
    "09n": "SHOWERS_NIGHT",
    "010d": "RAIN",
    "010n": "RAIN",
    "011d": "THUNDER_SHOWERS_DAY",
    "011n": "THUNDER_SHOWERS_NIGHT",
    "013d": "SNOW_SHOWERS_DAY",
    "013n": "SNOW_SHOWERS_NIGHT",
    "050d": "FOG",
    "050n": "FOG",
  };

  return (
    <div className="Icon">
      <ReactSkycon icon={codeMapping[props.code]} size={50} />
    </div>
  );
}
