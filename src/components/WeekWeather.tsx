import React from "react";
import { WeekData } from "../Types/WeatherInterface";

const WeekWeather = ({ weatherData }: { weatherData: WeekData }) => {
  if (!weatherData) {
    // Handle the case where weatherData is undefined, null, or an empty array
    return <div>No weather data available</div>;
  }
};
export default WeekWeather;
