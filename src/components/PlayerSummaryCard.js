import { usePlayerContext } from "../hooks/usePlayerContext";

const PlayerSummaryCard = ({ player }) => {
  const { dispatch } = usePlayerContext();

  const handleClick = async () => {
    const response = await fetch(
      `https://football-app-beta.vercel.app/players/${player.id}`,
      {
        method: "DELETE",
      }
    );

    const json = await response.json();

    if (response.ok) {
      console.log(json, "json data");
      dispatch({ type: "DELETE_PLAYER", payload: json });
    }
  };

  return (
    <li className="player-details">
      <h1>
        {player.first_name}
        {player.last_name}
      </h1>
      <p>{/* {player.id} {player.user_id} */}</p>
      <button onClick={handleClick}>delete</button>
    </li>
  );
};

export default PlayerSummaryCard;
