import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { PlayerContextProvider } from "./contexts/PlayerContext";
import { AuthContextProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
