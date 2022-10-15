import { useStatsContext } from "./useStatsContext";
import { usePlayerContext } from "./usePlayerContext";

export const useStatsLookup = () => {
  const { stats, specs, dispatch } = useStatsContext();
  const { players } = usePlayerContext();

  const setData = () => {
    const fullNames = [];

    for (let i = 0; i < players.length; i++) {
      fullNames.push(`${players[i].first_name} ${players[i].last_name}`);
    }

    const filteredStats = stats.filter((stat) => {
      if (fullNames.includes(`${stat.FirstName} ${stat.LastName}`)) return stat;
      else return null;
    });

    dispatch({
      type: "SET_GEN_STATS",
      payload: filteredStats,
    });
  };

  // use setSpecs in PlayerSummaryCard on details button onClick that takes id and compares to specs list
  const setSpecs = (id) => {
    const filteredSpecs = specs.filter((spec) => {
      if (id.includes(spec.PlayerID)) return spec;
      else return null;
    });
    console.log(filteredSpecs);

    dispatch({
      type: "SET_SPEC_STATS",
      payload: filteredSpecs,
    });
  };

  return { setData, setSpecs };
};
