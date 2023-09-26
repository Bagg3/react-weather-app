import WeatherData from "./WeatherTypes";

const Weather = ({ weatherData }: { weatherData: WeatherData }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2"></div>
      <p className="header font-bold text-xl">
        {weatherData.name.replace("Kommune", "")}
      </p>
      <p>Temprature: {weatherData.main.temp} &deg;C</p>
      <p>Feels like: {weatherData.main.feels_like} &deg;C</p>
      <p>
        Sunrise:{" "}
        {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("it-IT", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <p>
        Sunset:{" "}
        {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("it-IT", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <p>Description: {weatherData.weather[0].main}</p>
      <p>Humidity: {weatherData.main.humidity} %</p>
      <p>Wind: {weatherData.wind.speed} m/s</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
    </div>
  </div>
);

export default Weather;
