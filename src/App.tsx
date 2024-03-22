import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { WeatherData, AppContentProps } from "../src/types/WeatherInterface";
import useFetchWeather from "./utils/FetchWeather";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContent setWeatherData={setWeatherData} weatherData={weatherData} />
    </QueryClientProvider>
  );
};

const AppContent = ({ setWeatherData, weatherData }: AppContentProps) => {
  // Fetch weather data when the component mounts
  const fetchedData = useFetchWeather();
  useEffect(() => {
    if (fetchedData.data) {
      setWeatherData(fetchedData.data);
    }
  }, [fetchedData, setWeatherData]);

  // Update icon when weatherData changes
  useEffect(() => {
    if (weatherData) {
      const link = document.querySelector(
        "link[rel*='icon']"
      ) as HTMLLinkElement;
      link.type = "image/png";
      link.rel = "icon";
      link.href = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
      document.getElementsByTagName("head")[0].appendChild(link);
    }
  }, [weatherData]);

  return (
    <div className="App">
      <Home weatherData={weatherData} />
    </div>
  );
};

export default App;
