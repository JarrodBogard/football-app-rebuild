import { useEffect } from "react";
import { useStatsContext } from "../hooks/useStatsContext";

const DetailsCard = () => {
  const { dispatch } = useStatsContext();

  useEffect(() => {
    const fetchSpecPlayerStats = async () => {
      const response = await fetch(
        "https://api.sportsdata.io/api/nfl/fantasy/json/PlayerSeasonStats/2021REG?key=61fd0979be90419cbd6dc53c4e6f2df3"
      );

      const json = await response.json();

      if (response.ok) {
        dispatch({
          type: "SET_SPECS",
          payload: json,
        });
      }
    };

    fetchSpecPlayerStats();
  }, [dispatch]);

  return <div className="details">details</div>;
};

export default DetailsCard;
