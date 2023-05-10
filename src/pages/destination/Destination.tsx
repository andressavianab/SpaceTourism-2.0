import styles from "./Destination.module.css";

import moon from "../../assets/destination/image-moon.webp";
import { NavLink } from "react-router-dom";

export const Destination = () => {
  return (
    <main className={styles.main}>
      <div>
        <img src={moon} alt="" />
      </div>
      <div>
        <nav className={styles.nav}>
          <NavLink className={styles.nav_text} to={"#"}>
            MOON
          </NavLink>
          <NavLink className={styles.nav_text} to={"#"}>
            MARS
          </NavLink>
          <NavLink className={styles.nav_text} to={"#"}>
            EUROPA
          </NavLink>
          <NavLink className={styles.nav_text} to={"#"}>
            TITAN
          </NavLink>
        </nav>
        <article className={styles.article}>
          <h2>MOON</h2>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
        </article>
        <div className={styles.sub_article}>
          <div className={styles.sub_article_div}>
            <span className={styles.sub_heading_1}>AVG. DISTANCE</span>
            <span className={styles.sub_heading_2}>384,400 KM</span>
          </div>
          <div className={styles.sub_article_div}>
            <span className={styles.sub_heading_1}>EST. TRAVEL TIME</span>
            <span className={styles.sub_heading_2}>3 DAYS</span>
          </div>
        </div>
      </div>
    </main>
  );
};
