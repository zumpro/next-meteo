import React, { useEffect, useState } from "react";
import { Layout } from "../components/common";
import { useRouter } from "next/router";
import { Container } from "../components/ui";
import { ForecastCard, ForecastSummary, SunCard } from "../components/forecast";

export default function Forecast() {
  //data
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("Unknown location");
  //route
  const router = useRouter();

  useEffect(() => {
    // Запрос погоды
    const getWeather = async ({ q, lat, lon }) => {
      // Пустой массив
      setWeatherData([]);

      let howToSearch =
        typeof q === "string" ? `q=${q}` : `lat=${lat}&lon=${lon}`;
      try {
        // Ссылка на запрос погоды
        let req =
          `${process.env.NEXT_PUBLIC_API_URL + howToSearch}` +
          `&appid=${process.env.NEXT_PUBLIC_API_KEY}&lang=ru&units=metric&cnt=9&exclude=hourly,minutely`;

        // await fetch(req)
        //   .then((response) => response.json())
        //   .then((commits) => alert(JSON.stringify(commits.city, null, 2)));

        return await fetch(req, { method: "GET" })
          .then((res) => res.json())
          .then((res) => {
            let data = res;

            setWeatherData(data);
            setCity(`${data.city.name}`);
            return data;
          })
          .then((rcvdBusinesses) => {
            // some stuff
          })
          .catch((err) => {
            // some error handling
          });
      } catch (error) {
        console.log(error);
      }
    };
    const { q, lat, lon } = router.query;

    if (typeof q === "string" || typeof lat === "string") {
      getWeather({ q, lat, lon });
    }
  }, [router.query]);

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
              <div className="block  relative mb-2  md:flex">
                <ForecastCard forecast={weatherData} />
                <SunCard city={weatherData.city} />
              </div>
              <div className="mb-2 p-4 rounded border border-[#48A7E6] ">
                <div>
                  <h2 className="font-medium text-xl">Прогноз каждые 3 часа</h2>
                </div>
                <ul className="relative w-full h-full flex justify-between mb-5 md:mb-0">
                  {weatherData.list.map((days, index) => {
                    if (index > 0) {
                      return <ForecastSummary key={index} day={days} />;
                    }
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

Forecast.Layout = Layout;
