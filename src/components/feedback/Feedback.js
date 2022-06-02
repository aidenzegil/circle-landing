import React from "react";
import styles from "./Feedback.module.css";
import "../../App.css";

const Feedback = () => {
  return (
    <div className="Box" id="Resume" style={{marginLeft: 0, marginRight: "20%"}}>
      <div className={styles.TextContainer}>
        <p className={styles.Text} data-aos="fade-up-right">
          <i>"The bots are just like a Google Assistant or Siri but easier.
          When I first tried a bot out, I was VERY surprised that it responded
          to everything I said!!"</i> - DiabolicGaoUberRare
        </p>
        <p
          className={styles.Text}
          style={{ textAlign: "right" }}
          data-aos="fade-up-left"
        >
          <i>"I played some games with hexagon and circle, I'm planning to play more with other shapes :D"</i> - okay
        </p>
        <p className={styles.Text} data-aos="fade-up-right">
          <i>"Carlos… well I am pretty happy with how he turn out."</i> - DrYpTiC
        </p>
        <p
          className={styles.Text}
          style={{ textAlign: "right" }}
          data-aos="fade-up-left"
        >
          <i>"How are they so realistic?"</i> - Arandomhuman
        </p>
        <p className={styles.Text} data-aos="fade-up-right">
          <i>"Super super smart!"</i> - Aiden Zegil
        </p>
      </div>
      <div className={styles.IconContainer}></div>
    </div>
  );
};

export default Feedback;
