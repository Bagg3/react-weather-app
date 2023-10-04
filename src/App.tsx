import CurWeather from "./components/CurrentWeather";
import CalcClothingRec from "./components/ClothingRec";
import FetchWeather from "./Utility/FetchWeather";
import WeekWeather from "./components/WeekWeather";

function App() {
  const { data, weekData } = FetchWeather();

  return (
    <div className="App">
      {data !== null ? (
        <CurWeather weatherData={data} />
      ) : (
        <div>Loading...</div>
      )}
      <div className="App">
        <CalcClothingRec weatherData={data} />
      </div>
      <div className="WeekWeather">
        {weekData !== null ? (
          <WeekWeather weatherData={weekData} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default App;
