import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Input({ setQuery}) {
  const [city, setCity] = useState("");
const handleSearch =()=>{
  if(city!=='') setQuery({q: city})
}

const handleLocation = ()=>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      setQuery({lat,lon})
    })
  }
}

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          type="text"
          placeholder="enter city name"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize rounded-2xl"
        ></input>

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
