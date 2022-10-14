import { useAuthContext } from "./useAuthContext";
import { usePlayerContext } from "./usePlayerContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: playerDispatch } = usePlayerContext();

  const logout = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
    playerDispatch({ type: "GET_PLAYERS", payload: null });
  };

  return { logout };
};
