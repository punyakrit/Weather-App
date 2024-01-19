import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forcast({ title, items }) {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-start">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col md:flex-row items-center justify-center text-white">
        {items.map((item) => (
          <div
            className="flex flex-col items-center justify-center my-2 md:my-0 md:mx-2 md:w-1/4"
            key={item.title}
          >
            <p className="font-light text-xs md:text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-10 md:w-12 my-1"
              alt={item.title}
            ></img>
            <p className="font-medium text-xs md:text-base">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forcast;
