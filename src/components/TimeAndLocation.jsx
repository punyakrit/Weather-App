import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div className="text-center">
      <div className="my-6">
        <p className="text-white text-lg md:text-xl lg:text-2xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="my-3">
        <p className="text-white text-xl md:text-3xl lg:text-4xl font-medium">
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
