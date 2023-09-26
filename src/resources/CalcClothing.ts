import WeatherData from "./WeatherInterface";

function CalcClothing(weather: WeatherData) {
  weather.main.temp;
  weather.main.humidity;
  weather.wind.speed;
  weather.main.feels_like;
  weather.sys.sunset;

  const { hours, minutes } = getTimeToSunset(weather.sys.sunset);
  let tempFactor = weather.main.feels_like;

  if (hours < 2) {
    tempFactor = tempFactor - 4;
  }

  return tempFactor;
}

// Convert a UNIX timestamp to hours and minutes
function getTimeToSunset(timestamp: number): {
  hours: number;
  minutes: number;
} {
  // Convert the timestamp to milliseconds
  const timestampInMilliseconds = timestamp * 1000;

  // Get the current time in milliseconds
  const currentTimeInMilliseconds = new Date().getTime();

  // Calculate the time difference in milliseconds
  const timeDifferenceInMilliseconds =
    currentTimeInMilliseconds - timestampInMilliseconds;

  // Calculate hours and minutes
  const hours = Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor(
    (timeDifferenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );

  return { hours, minutes };
}

export default CalcClothing;
