import { NavLink } from "react-router-dom";
import data from "../../data.json";
import styles from "./Navbar.module.css";

const destinations = data.destinations;

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      {destinations.map((destination) => {
        return (
          <NavLink key={destination.name} className={styles.nav_text} to={`/destination/${destination.name}`}>
            {destination.name}
          </NavLink>
        );
      })}
    </nav>
  );
};
