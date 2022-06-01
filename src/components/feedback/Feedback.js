import React from "react";
import styles from "./Feedback.module.css";
import "../../App.css";

const Feedback = () => {
  return (
    <div className="Box" id="Resume">
      <div className={styles.TextContainer}>
          <p className={styles.Text} data-aos="fade-up-right">"Very very long quote about how amazing the product is omg it's crazy omg it's really amazing" -user 1</p>
          <p className={styles.Text} data-aos="fade-up-right" >"Medium length quote about how awesome AI is like wow" -user 2</p>
          <p className={styles.Text} data-aos="fade-up-right" >"absolutely incredible" - user 3</p>
      </div>
      <div className={styles.IconContainer}>

      </div>
    </div>
  );
};

export default Feedback;
