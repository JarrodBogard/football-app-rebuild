import { useContext } from "react";
import { GenStatsContext } from "../contexts/GenStatsContext";

export const useGenStatsContext = () => {
    const context = useContext(GenStatsContext);
  
    if (!context) {
      throw Error("useGenStatsContext must be used inside the GenStatsContextProvider");
    }
  
    return context;
  };