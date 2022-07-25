import React from "react";
import styles from "./Bots.module.css";
import "../../App.css";
import bot1 from "../../img/bot1.png";
import bot2 from "../../img/bot2.jpeg";
import bot3 from "../../img/bot3.png";

function Bots() {
  return (
    <div
      className="Box"
      style={{ display: "flex", flexDirection: "column" }}
      id="bots"
    >
      <div className={styles.TextContainer}>
        <header className={styles.Header} data-aos="fade-up">
          Our Favourites
        </header>
      </div>
      <div className={styles.Container}>
        <div className={styles.Bot}>
          <div className={styles.BotWrap}>
            <div className={styles.Image}>
              <img
                src={bot1}
                alt="bot1"
                style={{ width: "100%", height: "100%",  borderRadius: "15px"  }}
              />
            </div>
            <div className={styles.Text}>
              <p>Erica is a mascot from Yeiku Market. She loves collecting dolls as a hobby!</p>
            </div>
          </div>
        </div>
        <div className={styles.Bot}>
          <div className={styles.BotWrap}>
            <div className={styles.Image}>
              <img
                src={bot2}
                alt="bot2"
                style={{ width: "100%", height: "100%",  borderRadius: "15px"  }}
              />
            </div>
            <div className={styles.Text}>
              <p>Meet Matt, he spends most of his time in a scrapyard and has invented all kinds of things including a time traveling machine.</p>
            </div>
          </div>
        </div>
        <div className={styles.Bot}>
          <div className={styles.BotWrap}>
            <div className={styles.Image}>
              <img
                src={bot3}
                alt="bot3"
                style={{ width: "100%", height: "100%", borderRadius: "15px" }}
              />
            </div>
            <div className={styles.Text}>
              <p>Naka runs her family's Cafe and looks after her younger sister, Kumori. Naka can usually be found cleaning up or dashing around the Cafe.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bots;
