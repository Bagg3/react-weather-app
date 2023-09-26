import WeatherData from "./WeatherTypes";

const Weather = ({ weatherData }: { weatherData: WeatherData }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p className="header">City Name: {weatherData.name}</p>
      <p className="text-gray-700 text-base">{weatherData.main.temp}</p>
      <p>Temprature: {weatherData.main.temp} &deg;C</p>
      <p>
        Sunrise:{" "}
        {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
      </p>
      <p>
        Sunset:{" "}
        {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
      </p>
      <p>Description: {weatherData.weather[0].main}</p>
      <p>Humidity: {weatherData.main.humidity} %</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
    </div>
  </div>
);

export default Weather;
