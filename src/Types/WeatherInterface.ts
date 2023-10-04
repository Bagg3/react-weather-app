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
}

export interface DayData {
  day: string;
  temp: number;
  feels_like: number;
  humidity: number;
  weather: {
    main: string;
  }[];
  wind: {
    speed: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
}
export interface WeekData {
  cod: string;
  message: number;
  cnt: number;
  list: ListItem[];
  city: City;
}
interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Rain {
  "3h": number;
}

interface Sys {
  pod: string;
}

interface ListItem {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain: Rain;
  sys: Sys;
  dt_txt: string;
}

interface City {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
