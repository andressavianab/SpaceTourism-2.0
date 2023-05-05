import logo from "../assets/logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>

      <div className={styles.nav_bar}>
        <a href="#">
          <span>00</span> HOME
        </a>
        <a href="#">
          <span>01</span> DESTINATION
        </a>
        <a href="#">
          <span>02</span> CREW
        </a>
        <a href="#">
          <span>03</span> TECHNOLOGY
        </a>
      </div>
    </header>
  );
};
