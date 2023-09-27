import { WeatherData } from "../Types/WeatherInterface";
// CALCULATIONS NOT CORRECT

function CalcClothing(weather: WeatherData) {
  return caclCompleteFactor(weather.main.feels_like, weather);
}

// Convert a UNIX timestamp to hours
function getTimeToSunset(timestamp: number): number {
  // Convert the timestamp to milliseconds
  const timestampInMilliseconds = timestamp * 1000;

  // Get the current time in milliseconds
  const currentTimeInMilliseconds = new Date().getTime();

  // Calculate the time difference in milliseconds
  const timeDifferenceInMilliseconds =
    timestampInMilliseconds - currentTimeInMilliseconds;

  // Calculate hours
  const hours = timeDifferenceInMilliseconds / (1000 * 60 * 60);

  return hours;
}

function calcTimeFactor(hour: number) {
  let tempFactor = 0;
  if (hour < 2.5) {
    tempFactor = tempFactor - 2;
  }

  return tempFactor;
}

function caclWindFactor(wind: number) {
  let windFactor = 0;
  if (wind > 10) {
    windFactor = windFactor - 2;
  }
  return windFactor;
}

function calcHumidityFactor(humidity: number) {
  let humidityFactor = 0;
  if (humidity > 50) {
    humidityFactor = humidityFactor - 2;
  }
  return humidityFactor;
}

function caclCompleteFactor(temp: number, weather: WeatherData) {
  const timeFactor = calcTimeFactor(getTimeToSunset(weather.sys.sunset));
  const windFactor = caclWindFactor(weather.wind.speed);
  const humidityFactor = calcHumidityFactor(weather.main.humidity);
  temp = temp + timeFactor;
  temp = temp + windFactor;
  temp = temp + humidityFactor;
  return temp;
}

export default CalcClothing;
