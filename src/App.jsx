import React, { useEffect, useState } from "react";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButton from "./components/TopButton";
import Input from "./components/Input";
import TimeAndLocation from "./components/TimeAndLocation";
import Details from "./components/Details";
import Forcast from "./components/Forcast";
import getFormattedWeatherData from "./services/weatherService";

function App() {
  const [query, setQuery] = useState({ q: "Delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-teal-500 to-blue-700 h-fit shadow-xl shadow-gray-400 rounded-lg">
      <TopButton setQuery={setQuery} />
      <Input setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <Details weather={weather} />
          <Forcast title={"hourly forecast"} items={weather.hourly} />
          <Forcast title={"daily forecast"} items={weather.daily} />
        </div>
      )}
    </div>
  );
}

export default App;
