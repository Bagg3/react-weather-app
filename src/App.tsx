import { useEffect, useState } from "react";
import CurWeather from "./components/CurrentWeather";
import { WeatherData } from "./Types/WeatherInterface";
import CalcClothingRec from "./components/ClothingRec";
//import FetchWeather from "./Utility/FetchWeather";

function App() {
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);
  const [data, setData] = useState<WeatherData | null>(null);
  const [weekData, setWeekData] = useState<WeatherData[] | null>(null);

  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        function (error) {
          // Handle location access denial or error
          console.error("Error getting location:", error);
        }
      );

      if (lat !== null && long !== null) {
        await fetch(
          `${apiUrl}/weather/?lat=${lat}&lon=${long}&units=metric&lang=da&APPID=${apiKey}`
        )
          .then((res) => res.json())
          .then((result) => {
            setData(result);
            console.log("Weather data:", result);
          });

        await fetch(
          `${apiUrl}/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=${apiKey}`
        )
          .then((res) => res.json())
          .then((result) => {
            setWeekData(result.daily);
            console.log("API Response for Weekly Forecast:", result);
            console.log("DATA:", result.list[0]); // Get only 1 array
            console.log("DATA2: ", result.list[0].dt_txt); // Get only 1 array")
          });
      }
    };
    fetchData();
  }, [lat, long, apiUrl, apiKey, weekData]);

  return (
    <div className="App">
      {data !== null ? (
        <CurWeather weatherData={data} />
      ) : (
        <div>Loading...</div>
      )}
      <div className="App">
        <CalcClothingRec weatherData={data} />
      </div>
    </div>
  );
}

export default App;
