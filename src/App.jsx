import React from "react";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButton from "./components/TopButton";
import Input from "./components/Input";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 rounded-lg">
      <TopButton />
      <Input />
    </div>
  );
}

export default App;
