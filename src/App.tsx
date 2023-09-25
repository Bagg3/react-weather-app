import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/weather";

function App() {
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);
  const [data, setData] = useState<weatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <>
      <div className="App">
        {data !== null && typeof data.main !== "undefined" ? (
          <Weather weatherData={data} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}
export default App;
