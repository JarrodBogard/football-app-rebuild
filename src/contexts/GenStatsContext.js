import { createContext, useReducer } from "react";

export const GenStatsContext = createContext();

export const genStatsReducer = (state, action) => {
  switch (action.type) {
    case "GET_STATS":
      return {
        stats: action.payload,
      };
    default:
      return state;
  }
};

export const GenStatsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(genStatsReducer, {
    stats: null,
  });
  return (
    <GenStatsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GenStatsContext.Provider>
  );
};
