import React from "react";
import styles from "./Bots.module.css";
import "../../App.css";

function Bots() {
  return (
    <div className="Box" style={{display: 'flex', flexDirection: 'column'}} id="notes">
      <div className={styles.TextContainer}>
        <header className={styles.Header} data-aos="fade-up">Our Favourites</header>
      </div>
      <div className={styles.Container}>
        <div className={styles.Bot}>
          <icon />
          <p>flip animation + brief description of this bot</p>
        </div>
        <div className={styles.Bot}>
          <icon />
          <p>flip animation + brief description of this bot</p>
        </div>
        <div className={styles.Bot}>
          <icon />
          <p>flip animation + brief description of this bot</p>
        </div>
      </div>
    </div>
  );
}

export default Bots;
