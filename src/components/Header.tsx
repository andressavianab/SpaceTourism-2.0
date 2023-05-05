import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>

      <nav className={styles.nav_bar}>
        <Link to={"/"} className={styles.nav_bar_link}>
          <span>00</span> HOME
        </Link>
        <Link to={"/destination"} className={styles.nav_bar_link}>
          <span>01</span> DESTINATION
        </Link>
        <Link to={"#"} className={styles.nav_bar_link}>
          <span>02</span> CREW
        </Link>
        <Link to={"#"}className={styles.nav_bar_link}>
          <span>03</span> TECHNOLOGY
        </Link>
      </nav>
    </header>
  );
};
