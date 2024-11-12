import { useEffect } from "react";
import "./App.css";
import cinephoriaLogo from "./assets/cinephoria_logo.png";
import LoginForm from "./components/LoginForm";

function App() {
  useEffect(() => {
    // window.electron.getStaticData();
    fetch("https://cinephoria.jeremysnnk.ovh/api/movies")
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
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

export default App;
