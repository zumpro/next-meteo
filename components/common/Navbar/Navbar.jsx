import React from "react";
import s from "./Navbar.module.css";
import { Button, Container, Logo } from "../../ui";
import Searchbar from "../Searchbar/Searchbar";
import { LocationMarker } from "../../icon";
const Navbar = () => {
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
            <Button>
              <LocationMarker />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
