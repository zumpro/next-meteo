import React, { useEffect, useState } from "react";
import { Layout } from "../components/common";
import { useRouter } from "next/router";
import { Container } from "../components/ui";
import { ForecastCard } from "../components/forecast";

export default function Forecast() {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("Unknown location");

  const router = useRouter();

  useEffect(() => {
    const { q, lat, lon } = router.query;
    if (typeof q === "string" || typeof lat === "string") {
      getWeather();
    } else {
    }
  }, [router.query]);

  const getWeather = async () => {
    setWeatherData([]);
    const { q, lat, lon } = router.query;

    let howToSearch =
      typeof q === "string" ? `q=${q}` : `lat=${lat}&lon=${lon}`;
    try {
      let req = `${process.env.NEXT_PUBLIC_API_URL + howToSearch}
        &appid=${
          process.env.NEXT_PUBLIC_API_KEY
        }&lang=ru&units=metric&cnt=5&exclude=hourly,minutely`;

      let res = await fetch(req.replace(/ /g, ""));
      let data = await res.json();

      setWeatherData(data);
      setCity(`${data.city.name}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container>
        <h1 className="my-4 font-medium text-2xl text-gray-400">
          Погода в<span className="text-black"> {city}</span>
        </h1>
        <div>
          {weatherData == false ? (
            <div>Загрузка</div>
          ) : (
            <div>
              <ForecastCard forecast={weatherData} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

Forecast.Layout = Layout;
