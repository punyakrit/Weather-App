import React from "react";

function TopButton({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Delhi",
    },
    {
      id: 2,
      title: "Mumbai",
    },
    {
      id: 3,
      title: "Bengaluru",
    },
    {
      id: 4,
      title: "Pune",
    },
    {
      id: 5,
      title: "Chandigarh",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium mb-2 md:mb-0 md:mr-4"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButton;
