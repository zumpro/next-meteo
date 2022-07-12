import React, { useState } from "react";
import s from "./Navbar.module.css";
import { Button, Container, Logo } from "../../ui";
import Searchbar from "../Searchbar/Searchbar";
import { LocationMarker } from "../../icon";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  // Button State
  const [loading, setLoading] = useState(false);
  // Wather State
  const [weatherData, setWeatherData] = useState([]);

  const getWeather = async (location) => {
    setWeatherData([]);

    let howToSearch =
      typeof location === "string"
        ? `q=${location}`
        : `lat=${location[0]}&lon=${location[1]}`;
    try {
      let res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL + howToSearch}&appid=${
          process.env.NEXT_PUBLIC_API_KEY
        }&lang=ru`
      );
      let data = await res.json();
      setWeatherData(data);

      router.push(
        {
          pathname: `/forecast`,
          query: `lat=${location[0]}&lon=${location[1]}`,
        },
        undefined,
        { shallow: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const myIP = (location) => {
    setLoading(true);

    const { latitude, longitude } = location.coords;
    getWeather([latitude, longitude]);

    setLoading(false);
  };

  console.log(weatherData);
  return (
    <header className={s.root}>
      <Container>
        <div className="flex justify-between items-center w-full">
          <div>
            <Logo />
          </div>
          <div>
            <Searchbar />
          </div>
          <div>
            <Button
              loading={loading}
              onClick={() => {
                navigator.geolocation.getCurrentPosition(myIP);
              }}
            >
              <LocationMarker />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
