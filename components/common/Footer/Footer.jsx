import React from "react";
import { Github } from "../../icon";
import { Container, Logo } from "../../ui";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.root}>
      <Container>
        <div className={s.footerContainer}>
          <div>
            <a href="https://github.com/zumpro/next-meteo">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <div className="text-gray-400 float-right">
            <span className="cursor-pointer underline hover:no-underline">
              User agreement.
            </span>
            <span className="ml-1">Created by Andrew Chichvarin</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
