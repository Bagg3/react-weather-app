import { WeekData } from "../types/WeatherInterface";
//import SortWeekWeather from "../Utility/SortWeekWeather";

const WeekWeather = ({ weatherData }: { weatherData: WeekData }) => {
  if (!weatherData) {
    // Handle the case where weatherData is undefined, null, or an empty array
    return <div>No weather data available</div>;
  }

  return (
    <div>
      <h2>Week Weather</h2>
      <div className="week-weather">
        {weatherData.list.map((weather) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"></div>
              <p className="header font-bold text-xl">
                {weatherData.city.name.replace("Kommune", "")}
              </p>
              <p>Temperature: {weather.main.temp} &deg;C</p>
              {weather.main.temp - weather.main.feels_like > 2 ? (
                <p> Feels like: {weather.main.feels_like} &deg;C</p>
              ) : null}
              <p>{weather.dt_txt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WeekWeather;
