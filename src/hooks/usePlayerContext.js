import { PlayerContext } from "../contexts/PlayerContext";
import { useContext } from "react";

export const usePlayerContext = () => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw Error(
      "usePlayerContext must be used inside the PlayerContextProvider"
    );
  }

  return context;
};
