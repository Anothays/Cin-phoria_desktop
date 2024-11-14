import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import styles from "./VerticalTabs.module.scss";
import cinephoriaLogo from "/src/ui/assets/cinephoria_logo.png";

export default function NavBar() {
  const { authState } = useAuth();

  // const getAuthState = async () => {
  //   console.log("authState ==> ", authState);
  //   console.log(
  //     "axios.defaults.headers.common ==> ",
  //     axios.defaults.headers.common
  //   );
  // };

  const handleLogout = () => {
    window.auth.removeToken();
    authState!.authenticated = false;
    authState!.token = null;
    authState!.user = null;
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbarContainer}>
        <ul className={styles.navbar}>
          <img
            src={cinephoriaLogo}
            className={styles.logoImage}
            alt="cinephoria logo"
          />
          <NavLink className={styles.navlink} to="movieTheaters">
            Les cinémas
          </NavLink>
          {/* <button onClick={getAuthState}>Authstate</button> */}
          <div className={styles.navbarFooter}>
            <NavLink className={styles.navlink} to="/" onClick={handleLogout}>
              <LogoutIcon /> Déconnexion
            </NavLink>
            <p>
              Connecté en tant que {authState?.user?.firstname}{" "}
              {authState?.user?.lastname}{" "}
            </p>
          </div>
        </ul>
      </nav>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
