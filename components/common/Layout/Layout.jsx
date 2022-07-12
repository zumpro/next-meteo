import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import s from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={s.root}>
      <Navbar />
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
