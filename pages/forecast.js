import React, { useEffect, useState } from "react";
import { Layout } from "../components/common";
import { useRouter } from "next/router";

export default function Forecast() {
  const [weatherData, setWeatherData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getWeather();
    console.log("Hello");
  }, [router.query]);

  const getWeather = async () => {
    setWeatherData([]);
    const { q, lat, lon } = router.query;

    let howToSearch =
      typeof q === "string" ? `q=${q}` : `lat=${lat}&lon=${lon}`;
    try {
      let res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL + howToSearch}&appid=${
          process.env.NEXT_PUBLIC_API_KEY
        }&lang=ru`
      );
      let data = await res.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(weatherData);

  return (
    <div>
      <h1>forecast</h1>
    </div>
  );
}

Forecast.Layout = Layout;
