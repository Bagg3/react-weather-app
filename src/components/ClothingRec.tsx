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
  switch (clothingIndex) {
    case 1:
      return "T-shirt og shorts";
    case 2:
      return "T-shirt og shorts";
    case 3:
      return "T-shirt og shorts";
  }
}

export default CalcClothingRec;
