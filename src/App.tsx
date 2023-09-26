import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import WeatherData from "./components/WeatherTypes";

import.meta.env.VITE_REACT_APP_ICON_URL;

function App() {
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);
  const [data, setData] = useState<WeatherData | null>(null);
  console.log("HEJ");

  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${apiUrl}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${apiKey}`
      );
      await fetch(
        `${process.env.VITE_REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.VITE_REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log("Weather data:", result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      {data !== null ? <Weather weatherData={data} /> : <div>Loading...</div>}
    </div>
  );
}
export default App;
