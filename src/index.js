import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { PlayerContextProvider } from "./contexts/PlayerContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { GenStatsContextProvider } from "./contexts/GenStatsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PlayerContextProvider>
        <GenStatsContextProvider>
          <App />
        </GenStatsContextProvider>
      </PlayerContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
