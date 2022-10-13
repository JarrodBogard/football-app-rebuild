import { useEffect } from "react";
import { usePlayerContext } from "../hooks/usePlayerContext";
import AddPlayerForm from "../components/AddPlayerForm";
import PlayerSummaryCard from "../components/PlayerSummaryCard";

const Home = () => {
  const { players, dispatch } = usePlayerContext();

  useEffect(() => {
    const fetchPlayersData = async () => {
      const response = await fetch(
        `https://football-app-beta.vercel.app/players`
      );

      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: "GET_PLAYERS",
          payload: json,
        });
      }
    };

    fetchPlayersData();
  }, [dispatch]);

  useEffect(() => {
    console.log(players);
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
