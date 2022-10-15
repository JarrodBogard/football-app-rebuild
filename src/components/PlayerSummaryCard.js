import { useEffect } from "react";
import { usePlayerContext } from "../hooks/usePlayerContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useStatsContext } from "../hooks/useStatsContext";

import DetailsCard from "./DetailsCard";

const PlayerSummaryCard = ({ player }) => {
  const { dispatch } = usePlayerContext();
  const { user } = useAuthContext();
  const { dispatch: genStatsDispatch } = useStatsContext(); // genStats for rendering player overview

  useEffect(() => {
    const fetchGenPlayerStats = async () => {
      const response = await fetch(
        "https://api.sportsdata.io/api/nfl/fantasy/json/Players?key=61fd0979be90419cbd6dc53c4e6f2df3"
      );

      const json = await response.json();

      genStatsDispatch({
        type: "SET_STATS",
        payload: json,
      });
    };

    fetchGenPlayerStats();
  }, [genStatsDispatch]);

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(
      `https://football-app-beta.vercel.app/players/${player.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_PLAYER", payload: json });
    }
  };

  return (
    <li className="player-details">
      <h1>
        {player.first_name}
        {player.last_name}
      </h1>
      <button onClick={handleClick}>delete</button>
      <DetailsCard />
    </li>
  );
};

export default PlayerSummaryCard;
