import { useEffect } from "react";
import { usePlayerContext } from "../hooks/usePlayerContext";
import { useAuthContext } from "../hooks/useAuthContext";
import AddPlayerForm from "../components/AddPlayerForm";
import PlayerSummaryCard from "../components/PlayerSummaryCard";

const Home = () => {
  const { players, dispatch } = usePlayerContext();
  const { user } = useAuthContext();

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
          type: "GET_PLAYERS",
          payload: json,
        });
      }
    };

    if (user) {
      fetchPlayersData();
    }
  }, [dispatch, user, players]);

  useEffect(() => {
    // console.log(players);
  }, [players]);

  return (
    <div className="home">
      <AddPlayerForm />
      <ul className="players">
        {players &&
          players.map((player) => (
            <PlayerSummaryCard
              key={player.id + player.last_name}
              player={player}
            />
          ))}
      </ul>
    </div>
  );
};

export default Home;
