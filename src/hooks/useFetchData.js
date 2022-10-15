/*
import { useEffect } from "react";
import { usePlayerContext } from "../hooks/usePlayerContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useStatsContext } from "../hooks/useStatsContext";

export const useFetchData = () => {
  const { user } = useAuthContext();
  const { players, dispatch } = usePlayerContext();
  const { stats, specs, dispatch: genStatsDispatch } = useStatsContext();

  useEffect(() => {
    const fetchPlayersData = async () => {
      const response = await fetch(
        `https://football-app-beta.vercel.app/users/${user.id}/players`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: "SET_PLAYERS",
          payload: json,
        });
      }
    };

    const fetchGenPlayerStats = async () => {
      const response = await fetch(
        "https://api.sportsdata.io/api/nfl/fantasy/json/Players?key=61fd0979be90419cbd6dc53c4e6f2df3"
      );

      const json = await response.json();

      if (response.ok) {
        genStatsDispatch({
          type: "SET_STATS",
          payload: json,
        });
      }
    };

    const fetchSpecPlayerStats = async () => {
      const response = await fetch(
        "https://api.sportsdata.io/api/nfl/fantasy/json/PlayerSeasonStats/2021REG?key=61fd0979be90419cbd6dc53c4e6f2df3"
      );

      const json = await response.json();

      if (response.ok) {
        genStatsDispatch({
          type: "SET_SPECS",
          payload: json,
        });
      }
    };

    if (user) {
    fetchPlayersData();
    fetchGenPlayerStats();
    fetchSpecPlayerStats();
    }
  }, [players, dispatch, user, genStatsDispatch, stats, specs]);
};
*/
