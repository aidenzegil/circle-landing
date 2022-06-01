import React from "react";
import styles from "./Bots.module.css";
import "../../App.css";

function Bots() {
  return (
    <div className="Box" style={{display: 'flex', flexDirection: 'column'}} id="notes">
      <div className={styles.TextContainer}>
        <header className={styles.Header}>Our Favourites</header>
      </div>
      <div className={styles.Container}>
        <div className={styles.Bot} data-aos="fade-up-right">
          <icon />
          <p>brief description of this bot</p>
        </div>
        <div className={styles.Bot} data-aos="fade-up">
          <icon />
          <p>brief description of this bot</p>
        </div>
        <div className={styles.Bot} data-aos="fade-up-left">
          <icon />
          <p>brief description of this bot</p>
        </div>
      </div>
    </div>
  );
}

export default Bots;
