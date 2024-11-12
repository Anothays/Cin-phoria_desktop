import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./components/Context/AuthContext";
import { Router } from "./router";
import "./Main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </StrictMode>
);
