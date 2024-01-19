import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function Details() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>clear</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          className="w-20"
        ></img>
        <p className="text-5xl">34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature className="mr-1" size={18} />
            Real feel:
            <span className="font-medium ml-1">32°</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear className="mr-1" size={18} />
            Humidity:
            <span className="font-medium ml-1">65%</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind className="mr-1" size={18} />
            Wind:
            <span className="font-medium ml-1">10 Km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise<span className="font-medium ml-1">06:45 Am</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set<span className="font-medium ml-1">07:35 Pm</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          High<span className="font-medium ml-1">45°</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          Low<span className="font-medium ml-1">40°</span>
        </p>
      </div>
    </div>
  );
}

export default Details;
