interface WeatherData {
  main: {
    temp: number; // Temperature in Celsius
    humidity: number; // Humidity percentage
    pressure: number; // Atmospheric pressure in hPa
    desription: string;
  };
  weather: {
    main: string; // Weather type (e.g., "Clouds")
    description: string; // Weather description (e.g., "Clear sky")
  }[];
  name: string; // Location name (e.g., "New York")
  sys: {
    country: string; // Country code (e.g., "US")
    region: string; // Region (e.g., "New York")
    sunset: number;
    sunrise: number;
  };
  wind: {
    speed: number; // Wind speed in m/s
  };
  // Add other properties as needed to match the data you receive from OpenWeather
}

export default WeatherData;
