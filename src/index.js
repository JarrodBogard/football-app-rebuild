import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { PlayerContextProvider } from "./contexts/PlayerContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { StatsContextProvider } from "./contexts/StatsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PlayerContextProvider>
        <StatsContextProvider>
          <App />
        </StatsContextProvider>
      </PlayerContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
