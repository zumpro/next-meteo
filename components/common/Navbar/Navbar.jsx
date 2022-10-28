import React, { useState } from "react";
import s from "./Navbar.module.css";
import Link from "next/link";
import { Button, Container, Logo } from "../../ui";
import Searchbar from "../Searchbar/Searchbar";
import { LocationMarker, Search } from "../../icon";
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
        query: `lat=${latitude.toFixed(6)}&lon=${longitude.toFixed(6)}`,
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
            <Link href="/">
              <a aria-label="Logo">
                <Logo />
              </a>
            </Link>
          </div>
          <div className="md:flex hidden">
            <Searchbar />
          </div>

          <div className="flex items-center">
            <div className="md:hidden flex mr-6">
              <Button>
                <Search />
              </Button>
            </div>
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
