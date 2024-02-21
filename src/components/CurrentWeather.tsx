import { WeatherData } from "../types/WeatherInterface";
import WeatherBottomRow from "./CurrentWeatherBottomRow";
import CalcClothingRec from "./ClothingRec";

const Weather = ({ weatherData }: { weatherData: WeatherData }) => {
  return (
    <div className="p-3 bg-gradient-to-b from-[#99b1ff] via-[#48a1b8] to-[#0854ac] rounded-lg flex flex-col min-w-[40%] w-[500px] h-fit text-slate-100 shadow-md">
      <div className="flex-row mb-4">
        <div className="flex justify-between text-sm font-bold">
          <h2 className="header font-bold text-xl">
            {weatherData.name.replace("Kommune", "")}
          </h2>
        </div>
        <div className="text-xs flex flex-col">
          <h2>Current Weather</h2>
          <p>
            {new Date(weatherData.dt * 1000).toLocaleTimeString("it-IT", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="weather icon"
            className="w-16 h-16 items-start -mt-3"
          />
        </div>
        <div className="flex items-start ml-2">
          <span className="text-3xl font-bold">
            {Math.round(weatherData.main.temp)}
          </span>
          <span>&deg;C</span>
        </div>
        <div className="flex flex-col items-start ml-16">
          <p>{weatherData.weather[0].main}</p>
          <p className="text-sm">
            Feels like: {Math.round(weatherData.main.feels_like)} &deg;C
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm">
        Temperatures up to {Math.round(weatherData.main.temp_max)}&deg;C
      </p>

      <div>
        <WeatherBottomRow weatherData={weatherData} />
      </div>

      <div className="mt-8">
        <CalcClothingRec weatherData={weatherData} />
      </div>
    </div>
  );
};

export default Weather;
