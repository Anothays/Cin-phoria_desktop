import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import styles from "./LoginForm.module.scss";

export default function LoginForm() {
  const { onLogin } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêche le rechargement de la page
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      const response = await onLogin!(email, password);
      if (response.error) {
        switch (response.message.status) {
          case 401:
            return alert("Indentifiants invalides");
          case 400:
            return alert("Erreur");
          default:
            return alert("Erreur");
        }
      }
      navigate("/movieTheaters");
    } catch (error) {
      alert("Indentifiants invalides");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleClick}>
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Mot de passe" />
      <button className={styles.submitButton} type="submit">
        {isLoading ? <CircularProgress size={19} /> : "Connexion"}
      </button>
    </form>
  );
}
