import React from "react";
import styles from "./Header.module.css";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.header__inside}>
        <div className="container">
          <Navbar />
          <Hero />
        </div>
      </div>
    </section>
  )
};

export default Header;