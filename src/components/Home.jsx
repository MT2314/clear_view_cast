import React, { useState } from "react";
import WeatherAPI from "./WeatherAPI";

function Home() {
  const [city, setCity] = useState("toronto");

  const handleSearch = () => {
    // You can implement the logic to search for the weather here
    alert(`Searching for weather in ${city}`);
  };
  return (
    <div className="app">
      <header className="app-header">
        <h1>Weather Search</h1>
      </header>
      <main className="app-main">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <WeatherAPI city={city} />
      </main>
    </div>
  );
}

export default Home;
