import React from "react";
import s from "./Navbar.module.css";
import { Logo } from "../../ui";
const Navbar = () => {
  return (
    <header className={s.root}>
      <div className="flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <div>Navbar</div>
      </div>
    </header>
  );
};

export default Navbar;
