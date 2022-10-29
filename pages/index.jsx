import { useRouter } from "next/router";
import { useState } from "react";
import { Layout } from "../components/common";
import { Button } from "../components/ui";

export default function Home() {
  const router = useRouter();

  // Button State
  const [loading, setLoading] = useState(false);

  const myIP = (location) => {
    setLoading(true);
    const { latitude, longitude } = location.coords;
    router.push(
      {
        pathname: `/forecast`,
        query: `lat=${latitude.toFixed(6)}&lon=${longitude.toFixed(6)}`,
      },
      undefined,
      { shallow: true }
    );

    setLoading(false);
  };

  return (
    <div className="absolute w-full h-full flex items-center">
      <div className=" relative w-full">
        <div className="text-center max-w-[720px] m-auto px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-300">
            Введите название города, чтобы узнать погоду
          </h1>
          <p className="text-lg md:text-2xl font-normal text-gray-300 mt-4">
            или нажмите на кнопку
          </p>
        </div>
        <div className="inline-block w-full text-center pt-10">
          <Button
            loading={loading}
            onClick={() => {
              navigator.geolocation.getCurrentPosition(myIP);
            }}
          >
            Моё местоположение
          </Button>
        </div>
      </div>
    </div>
  );
}
Home.Layout = Layout;
