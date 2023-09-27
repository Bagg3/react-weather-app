import {WeatherData} from "../Types/WeatherInterface";
import CalcClothing from "../Utility/CalcClothing";

const calcClothingRec = ({ weatherData }: { weatherData: WeatherData }) =>
  CalcClothing(weatherData) => ();

export default calcClothingRec;
