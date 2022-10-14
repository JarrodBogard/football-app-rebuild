import { useEffect, useState } from "react";
import { useGenStatsContext } from "../hooks/useGenStatsContext";
import { usePlayerContext } from "../hooks/usePlayerContext";

export const usePlayerStatsFilter = () => {
  const [genStats, setGenStats] = useState([]);
  const { stats } = useGenStatsContext();
  const { players } = usePlayerContext();

  const setData = () => {
    const fullNames = [];
    const filteredData = [];
    for (let i = 0; i < players.length; i++) {
      fullNames.push(`${players[i].first_name} ${players[i].last_name}`);
    }

    const filteredStats = stats.filter((stat) => {
      if (fullNames.includes(`${stat.FirstName} ${stat.LastName}`)) return stat;
      else return null;
    });

    if (filteredStats.length > 0) {
      console.log(fullNames);
      console.log(filteredStats);
      //   filteredData.push(...filteredStats);
      //   console.log(filteredData, "filtered data");
      setGenStats(filteredData);
    }
  };

  useEffect(() => {
    console.log(genStats, "genStats in hook");
  }, [genStats]);

  return { setData };
};
