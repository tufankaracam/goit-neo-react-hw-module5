import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </div>
  );
}
