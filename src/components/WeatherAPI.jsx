import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import { getWeather, getLocation } from "../utilities/getWeather";

const WeatherAPI = ({city = "toronto"}) => {
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather(city ? city : "San Francisco");
        console.log("WeatherData", data);
        setWeatherData(data);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    };
    fetchWeather();
  }, [city]);


  return (
    <div className="App">
      {weatherData ? (
        <Weather
          city={weatherData.city}
          temperature={weatherData.temperature}
          description={weatherData.description}
        />
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherAPI;
