import React from "react";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButton from "./components/TopButton";
import Input from "./components/Input";
import TimeAndLocation from "./components/TimeAndLocation";
import Details from "./components/Details";
import Forcast from "./components/Forcast";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 rounded-lg">
      <TopButton />
      <Input />
      <TimeAndLocation/>
      <Details/>
      <Forcast title={"hourly forecast"}/>
      <Forcast title={"daily forecast"}/>

    </div>
  );
}

export default App;
