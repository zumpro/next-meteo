import React from "react";
import s from "./Navbar.module.css";
import { Container, Input, Logo } from "../../ui";
const Navbar = () => {
  return (
    <header className={s.root}>
      <Container>
        <div className="flex justify-between w-full">
          <div>
            <Logo />
          </div>
          <div>
            <Input placeholder="Enter the city" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
