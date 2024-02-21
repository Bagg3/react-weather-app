import { WeatherData } from "../types/WeatherInterface";

const WeatherBottomRow = ({ weatherData }: { weatherData: WeatherData }) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="mt-4 text-sm">Humidity:</span>
        <span className="text-sm">{weatherData.main.humidity}%</span>
      </div>
      <div className="flex flex-col">
        <span className="mt-4 text-sm">Wind:</span>
        <div className=" flex flex-row">
          <span className="text-sm">{weatherData.wind.speed} m/s </span>
          <span className="text-sm ml-1">
            {getWindDirection(weatherData.wind.deg)}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="mt-4 text-sm">Pressure:</span>
        <span className="text-sm">{weatherData.main.pressure} hPa</span>
      </div>
      <div className="flex flex-col">
        <span className="mt-4 text-sm">Visibility:</span>
        <span className="text-sm">{weatherData.visibility / 1000} km</span>
      </div>

      <div className="flex flex-col">
        <span className="mt-4 text-sm">Sunrise:</span>
        <span className="text-sm">
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
            "it-IT",
            {
              hour: "2-digit",
              minute: "2-digit",
            }
          )}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="mt-4 text-sm">Sunset:</span>
        <span className="text-sm">
          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("it-IT", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
};

export default WeatherBottomRow;

// Function to get the wind direction
function getWindDirection(deg: number): string {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
  const index = Math.round(deg / 45);
  return directions[index];
}
