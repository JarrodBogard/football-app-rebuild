import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      `https://football-app-beta.vercel.app/users/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      console.log(json);
      localStorage.setItem("user", JSON.stringify(json));

      console.log(json);
      dispatch({
        type: "LOGIN",
        payload: json,
      });

      setIsLoading(false);
    }
  };

  return { login, error, isLoading };
};
