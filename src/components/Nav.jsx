import { useState } from "react";
import { NavLink } from "react-router-dom";


function Nav({ currentSeason, onClickSeason }) {
  const [selectedSeason, setSelectedSeason] = useState("autumn1");

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
  };

  return (
    <>
      <link rel="stylesheet" href="../../public/assets/navbar/navbar.css" />
      {
        <div className="fasl">
          <img
            className="fasl-child"
            alt=""
            src="../../public/autumn/line-3.svg"
          />
          <div className="summer-parent">
            <a
              className={`summer ${
                currentSeason === "summer" ? "active" : ""
              }`}
              id="summer"
              onClick={() => onClickSeason("summer")}
            >
              Summer
            </a>
            <a
              className={`spring ${
                currentSeason === "spring" ? "active" : ""
              }`}
              id="spring"
              onClick={() => onClickSeason("spring")}
            >
              spring
            </a>
            <a
              className={`autumn1 ${
                currentSeason === "autumn1" ? "active" : ""
              }`}
              id="autumn1"
              onClick={() => onClickSeason("autumn1")}
            >
              autumn
            </a>
            <a
              className={`winter ${
                currentSeason === "winter" ? "active" : ""
              }`}
              id="winter"
              onClick={() => onClickSeason("winter")}
            >
              Winter
            </a>
          </div>
        </div>
      }
      
    </>
  );
}

export default Nav;
