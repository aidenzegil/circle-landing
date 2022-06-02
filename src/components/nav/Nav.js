import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.TitleContainer}>
        <p className={styles.Text}>CIRCLE</p>
        <p className={styles.Text} style={{ fontSize: 25 }}>
          Where AI are friends not food
        </p>
      </div>
      <div className={styles.NavContainer}>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className={styles.NavBtn}>Mission</button>
        </Link>
        <Link
          activeClass="active"
          to="bots"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className={styles.NavBtn}>Bots</button>
        </Link>
        <Link
          activeClass="active"
          to="feedback"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className={styles.NavBtn}>Reviews</button>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className={styles.NavBtn}>Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
