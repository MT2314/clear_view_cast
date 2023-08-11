import React, { useState } from "react";
import WeatherAPI from "./WeatherAPI";

// Arrays
var displayedCities = [
  "Beijing",
  "Madrid",
  "Moscow",
  "Paris",
  "Tokyo",
  "Toronto",
  "Osaka",
  "Rio de Janeiro",
];

const Home = ({ city }) => {
  return (
    <>
      <div id="sidebar"></div>
      <div id="detail">
        <WeatherAPI city={city} />
      </div>
    </>
  );
};

export default Home;
