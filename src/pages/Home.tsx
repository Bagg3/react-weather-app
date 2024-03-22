import CurWeather from "../components/CurrentWeather";
import { WeatherData } from "../types/WeatherInterface";

interface HomeProps {
  weatherData: WeatherData | null;
}

const Home = ({ weatherData }: HomeProps) => {
  return (
    <div className="flex mt-10 justify-center">
      {weatherData !== null ? (
        <CurWeather weatherData={weatherData} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;
