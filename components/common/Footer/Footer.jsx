import React from "react";
import { Github } from "../../icon";
import { Container } from "../../ui";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.root}>
      <Container>
        <div className={s.footerContainer}>
          <div className="sm:mb-0 mb-2">
            <a href="https://github.com/zumpro/next-meteo">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <div className="text-gray-400 float-right flex sm:flex-row  flex-col">
            <span className="">Created by Andrew Chichvarin</span>
            <span className="cursor-pointer underline hover:no-underline sm:ml-1">
              Пользовательское соглашение.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
