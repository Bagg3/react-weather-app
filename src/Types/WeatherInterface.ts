export interface WeatherData {
  main: {
    temp: number; // Temperature in Celsius
    humidity: number; // Humidity percentage
    pressure: number; // Atmospheric pressure in hPa
    description: string; // Weather description (e.g., "Clear sky")
    feels_like: number; // Temperature that feels like in Celsius
  };
  weather: {
    main: string; // Weather type (e.g., "Clouds")
    description: string; // Weather description (e.g., "Clear sky")
  }[];
  name: string; // Location name (e.g., "New York")
  sys: {
    country: string; // Country code (e.g., "US")
    region: string; // Region (e.g., "New York")
    sunset: number; // Sunset time in Unix timestamp
    sunrise: number; // Sunrise time in Unix timestamp
  };
  wind: {
    speed: number; // Wind speed in m/s
    gust: number; // Wind gust in m/s
  };
  // Add other properties as needed to match the data you receive from OpenWeather
}

export type day = {
  day: string;
  data: WeatherData[];
};
