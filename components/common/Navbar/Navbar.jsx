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

  const myIP = (location) => {
    setLoading(true);
    const { latitude, longitude } = location.coords;
    router.push(
      {
        pathname: `/forecast`,
        query: `lat=${latitude}&lon=${longitude}`,
      },
      undefined,
      { shallow: true }
    );
    setLoading(false);
  };

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
