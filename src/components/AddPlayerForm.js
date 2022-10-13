import { useState } from "react";
import { usePlayerContext } from "../hooks/usePlayerContext";

const AddPlayerForm = () => {
  const { dispatch } = usePlayerContext();
  const [state, setState] = useState({
    user_id: 2,
    first_name: "",
    last_name: "",
  });

  const [search, setSearch] = useState({
    playerName: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSearch({
      ...search,
      playerName: e.target.value,
    });

    setState({
      ...state,
      first_name: e.target.value.split(" ")[0],
      last_name: e.target.value.split(" ")[1],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://football-app-beta.vercel.app/players`,
      {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setError(json.err);
    }

    if (response.ok) {
      setSearch({
        ...state,
        playerName: "",
      });

      setState({
        ...state,
        first_name: "",
        last_name: "",
      });

      setError(null);
      console.log("Player added", json);
      dispatch({ type: "CREATE_PLAYER", payload: json });
    }
  };

  return (
    <form className="addplayer-form" onSubmit={handleSubmit}>
      <label htmlFor="playerName">
        Search Players:{" "}
        <input
          type="text"
          onChange={handleChange}
          value={search.playerName}
          name="playerName"
        />
      </label>
      <button>Add Player</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddPlayerForm;
