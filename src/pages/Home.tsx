import CurWeather from "../components/CurrentWeather";
import useFetchWeather from "../utils/FetchWeather";
//import WeekWeather from "../components/WeekWeather";

const Home = () => {
  const { data } = useFetchWeather();

  return (
    <div className="flex mt-10 justify-center">
      {data !== null ? (
        <>
          <CurWeather weatherData={data} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;
