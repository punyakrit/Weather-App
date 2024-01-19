import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Input({ setQuery }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") setQuery({ q: city.trim() });
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setQuery({ lat, lon });
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-6">
      <div className="flex flex-col md:flex-row w-full md:w-3/4 items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Enter city name"
          className="text-xl font-light p-2 w-full md:w-auto shadow-xl focus:outline-none capitalize rounded-2xl"
        />

        <UilSearch
          onClick={handleSearch}
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocation}
        />
      </div>
    </div>
  );
}

export default Input;
