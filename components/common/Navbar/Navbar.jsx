import React from "react";
import s from "./Navbar.module.css";
import { Input, Logo } from "../../ui";
const Navbar = () => {
  return (
    <header className={s.root}>
      <div className="flex">
        <div>
          <Logo />
        </div>
        <div>
          <Input placeholder="Enter the city" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
