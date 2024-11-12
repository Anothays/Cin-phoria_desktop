import { useAuth } from "@/src/ui/components/Context/AuthContext";
import LoginForm from "@/src/ui/components/LoginForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import cinephoriaLogo from "/src/ui/assets/cinephoria_logo.png";

export default function LoginPage() {
  const { authState } = useAuth();
  const navigate = useNavigate();

  console.log("AUTH ==> ", authState);

  useEffect(() => {
    if (authState?.authenticated) navigate("/home");
  }, []);

  return (
    <div className="page">
      <div>
        <a href="https://cinephoria.jeremysnnk.ovh/admin" target="_blank">
          <img
            src={cinephoriaLogo}
            className="logo react"
            alt="cinephoria logo"
          />
        </a>
      </div>
      <h1>Cinéphoria</h1>
      <LoginForm />
    </div>
  );
}