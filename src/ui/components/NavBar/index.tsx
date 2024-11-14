import { NavLink, Outlet } from "react-router-dom";
import styles from "./VerticalTabs.module.scss";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <NavLink className={styles.navlink} to="movieTheaters">
          Les cinémas
        </NavLink>
        <NavLink className={styles.navlink} to="movieTheaters">
          Déconnexion
        </NavLink>
      </nav>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
