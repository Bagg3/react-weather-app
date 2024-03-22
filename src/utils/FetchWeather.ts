import { useState, useEffect } from "react";
import { useQuery } from "react-query";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

const fetchWeatherData = async (lat: number, long: number) => {
  try {
    const response = await fetch(
      `${apiUrl}/weather/?lat=${lat}&lon=${long}&units=metric&lang=da&APPID=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Weather data:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }
};

const fetchWeekData = async (lat: number, long: number) => {
  try {
    const response = await fetch(
      `${apiUrl}/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Week data:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch week data:", error);
  }
};

const useFetchWeather = () => {
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);

  const weatherDataQuery = useQuery(
    ["weatherData", lat, long],
    () => fetchWeatherData(lat!, long!),
    { enabled: !!lat && !!long }
  );

  const weekDataQuery = useQuery(
    ["weekData", lat, long],
    () => fetchWeekData(lat!, long!),
    { enabled: !!lat && !!long }
  );

  return { data: weatherDataQuery.data, weekData: weekDataQuery.data };
};

export default useFetchWeather;
