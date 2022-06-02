import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.TitleContainer}>
        <p className={styles.Text}>CIRCLE</p>
        <p className={styles.Text} style={{fontSize: 25}} >Where AI are friends not food</p>
      </div>
      <div className={styles.NavContainer}>
          <button className={styles.NavBtn}>Mission</button>
          <button className={styles.NavBtn}>Bots</button>
          <button className={styles.NavBtn}>Reviews</button>
          <button className={styles.NavBtn}>Contact</button>
      </div>
    </div>
  );
};

export default Nav;
