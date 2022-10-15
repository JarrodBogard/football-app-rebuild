import { useContext } from "react";
import { StatsContext } from "../contexts/StatsContext";

export const useStatsContext = () => {
  const context = useContext(StatsContext);

  if (!context) {
    throw Error("useStatsContext must be used inside the StatsContextProvider");
  }

  return context;
};
