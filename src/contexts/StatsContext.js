import { createContext, useReducer, useEffect } from "react";

export const StatsContext = createContext();

export const statsReducer = (state, action) => {
  switch (action.type) {
    case "SET_STATS":
      return {
        stats: action.payload,
      };
    case "SET_SPECS":
      return {
        specs: action.payload,
      };
    case "SET_GEN_STATS":
      return {
        genStats: action.payload,
      };
    case "SET_SPEC_STATS":
      return {
        specStats: action.payload,
      };
    default:
      return state;
  }
};

export const StatsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(statsReducer, {
    stats: null,
    specs: null,
    genStats: null,
    specStats: null,
  });

  useEffect(() => {
    console.log(state, "StatsContext");
  }, [state]);

  return (
    <StatsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StatsContext.Provider>
  );
};
