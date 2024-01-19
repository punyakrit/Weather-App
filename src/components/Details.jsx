import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function Details({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-4 text-lg md:text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center text-white py-2 md:py-3">
        <img src={iconUrlFromCode(icon)} className="w-16 md:w-20" alt="Weather Icon" />
        <p className="text-3xl md:text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature className="mr-1" size={18} />
            Real feel:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear className="mr-1" size={18} />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind className="mr-1" size={18} />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} Km/h`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-x-2 text-white text-xs md:text-sm py-2 md:py-3">
        <UilSun />
        <p className="font-light">
          Rise
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light md:hidden">|</p>
        <UilSunset />
        <p className="font-light">
          Set
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light md:hidden">|</p>
        <UilSun />
        <p className="font-light">
          High
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light md:hidden">|</p>
        <UilSun />
        <p className="font-light">
          Low
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default Details;
