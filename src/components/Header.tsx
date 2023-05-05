import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>

      <div className={styles.nav_bar}>
        <Link to={"/"}>
          <span>00</span> HOME
        </Link>
        <Link to={"/destination"}>
          <span>01</span> DESTINATION
        </Link>
        <Link to={"#"}>
          <span>02</span> CREW
        </Link>
        <Link to={"#"}>
          <span>03</span> TECHNOLOGY
        </Link>
      </div>
    </header>
  );
};
