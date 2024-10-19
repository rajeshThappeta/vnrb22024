import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CounterContext from "./contexts/CounterContext.jsx";
import UsersContext from "./contexts/UsersContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterContext>
      <UsersContext>
        <App />
      </UsersContext>
    </CounterContext>
  </StrictMode>
);
