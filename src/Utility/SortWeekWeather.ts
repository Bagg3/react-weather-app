import { WeekData } from "../Types/WeatherInterface";

function SortWeekWeather({ weatherData }: { weatherData: WeekData | null }) {
  const weekData = weatherData?.list;
  const weekDataLength = weekData?.length;
  return weekDataLength;
}

export default SortWeekWeather;
