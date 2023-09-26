import WeatherData from "../resources/WeatherInterface";
import CalcClothing from "../resources/CalcClothing";

const calcClothingRec = ({ weatherData }: { weatherData: WeatherData }) =>
  CalcClothing(weatherData) => ();

export default calcClothingRec;
