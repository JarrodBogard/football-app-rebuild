import { createContext, useReducer } from "react";

export const PlayerContext = createContext();

export const playersReducer = (state, action) => {
  switch (action.type) {
    case "SET_PLAYERS":
      return {
        players: action.payload,
      };
    case "CREATE_PLAYER":
      return {
        players: [action.payload, ...state.players],
      };
    case "DELETE_PLAYER":
      return {
        players: state.players.filter(
          (player) => player.id !== +action.payload
        ),
      };
    default:
      return state;
  }
};

export const PlayerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playersReducer, {
    players: null,
  });

  return (
    <PlayerContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PlayerContext.Provider>
  );
};
