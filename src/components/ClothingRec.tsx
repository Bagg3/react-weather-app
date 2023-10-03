import { WeatherData } from "../Types/WeatherInterface";
import calcClothing from "../Utility/CalcClothing";

interface CalcClothingRecProps {
  weatherData: WeatherData | null; // Allow for null values
}

const CalcClothingRec = ({ weatherData }: CalcClothingRecProps) => {
  if (weatherData === null) {
    // Handle the case when weatherData is null
    return <div>Loading...</div>;
  }

  const clothingIndex = calcClothing(weatherData);
  // Do something with clothingRec
  const clothes = ClothingRec(clothingIndex);
  return (
    <div>
      <p>Clothing recommendation for today:</p>
      <p>Index is {clothingIndex}</p>
      <p>Wear {clothes}</p>
    </div>
  );
};

function ClothingRec(clothingIndex: number) {
  // Define intervals and their corresponding clothing recommendations
  const intervals = [
    { min: 0, max: 10, recommendation: "Jacket" },
    { min: 11, max: 20, recommendation: "Sweater" },
    { min: 21, max: 30, recommendation: "T-shirt" },
    // Add more intervals and recommendations as needed
  ];

  // Find the recommendation based on the clothingIndex
  let recommendation = "Unknown"; // Default recommendation if no interval matches

  for (const interval of intervals) {
    if (clothingIndex >= interval.min && clothingIndex <= interval.max) {
      recommendation = interval.recommendation;
      break; // Stop looping when an interval is found
    }
  }

  return recommendation;
}

export default CalcClothingRec;
