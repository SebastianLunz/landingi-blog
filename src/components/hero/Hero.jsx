import React from "react";
import styles from "./Hero.module.css";
import heroImage1 from "../../images/markus-spiske-MgtHZ4zlC1U-unsplash.jpg";
import heroImage2 from "../../images/mohammadreza-alidoost-0rUp9vgyEYo-unsplash.jpg";


const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__box}>
        <div className={styles.hero__textWrapper}>
        <h1 className={`${styles.hero__text} ${styles.hero__textTitle}`}>Landingi blog example</h1>
        <p className={styles.hero__text}>This simple blog allows you to choose your favourites posts and gives a comment</p>
        </div>
      </div>
      <div className={styles.hero__box}>
        <div className={styles.hero__imageWrapper}>
          <div className={styles.hero__imageLeft}>
            <img className={styles.hero__image_display} src={heroImage1} alt="heroImage" />
          </div>
          <div className={styles.hero__imageRight}>
            <img className={styles.hero__image_display} src={heroImage2} alt="heroImage" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Hero;