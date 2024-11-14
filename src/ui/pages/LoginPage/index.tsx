import { useAuth } from "@/src/ui/components/Context/AuthContext";
import LoginForm from "@/src/ui/components/LoginForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import cinephoriaLogo from "/src/ui/assets/cinephoria_logo.png";

export default function LoginPage() {
  const { authState } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authState?.authenticated) navigate("/movieTheaters");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <a href="https://cinephoria.jeremysnnk.ovh/admin" target="_blank">
          <img
            src={cinephoriaLogo}
            className={styles.logoImage}
            alt="cinephoria logo"
          />
        </a>
      </div>
      <h1>Cinéphoria</h1>
      <LoginForm />
    </div>
  );
}
