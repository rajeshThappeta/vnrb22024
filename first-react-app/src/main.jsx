import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LoginContext from "./contexts/LoginContext.jsx";

createRoot(document.getElementById("root")).render(
  <LoginContext>
    <App />
  </LoginContext>
);
