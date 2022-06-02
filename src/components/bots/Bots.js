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
              <p>Erica is one of the mascots from Yeiku Market. She's a yandere, so she can either be very sweet or cold towards others. She also loves collecting dolls as a hobby!</p>
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
              <p>Meet Matt, he was born in a small town called Dannsville. He spent most of his time in a scrapyard and invented all kinds of things including a time traveling machine.</p>
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
              <p>Naka is the other mascot for Medium Cafe , and she runs the family's Cafe as well as looking after her younger sister, Kumori. Naka can usually be found cleaning up after Kumori or dashing around the Cafe.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bots;
