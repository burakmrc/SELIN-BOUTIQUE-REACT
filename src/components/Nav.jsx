import { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav({ currentSeason, onClickSeason }) {
  const [selectedSeason, setSelectedSeason] = useState("autumn1-nav");

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
  };

  return (
    <>
      <link rel="stylesheet" href="../../public/assets/navbar/navbar.css" />
      {
        <div className="fasl-nav">
          <img
            className="fasl-child-nav"
            alt=""
            src="../../public/autumn/line-3.svg"
          />
          <div className="summer-nav-parent">
            <NavLink
              className={`summer-nav ${currentSeason === "summer-nav" ? "active" : ""}`}
              id="summer"
              to="/"
              onClick={() => onClickSeason("summer")}
            >
              Summer
            </NavLink>
            <NavLink
              className={`spring-nav ${currentSeason === "spring-nav" ? "active" : ""}`}
              id="spring"
              to="/spring"
              onClick={() => onClickSeason("spring")}
            >
              Spring
            </NavLink>
            {/* <Route path="/autumn" exact={true} element={<Autumn />} /> */}
            <NavLink
              className={`autumn1-nav ${
                currentSeason === "autumn1-nav" ? "active" : ""
              }`}
              id="autumn"
              to="/autumn"
              onClick={() => onClickSeason("autumn")}
            >
              Autumn
            </NavLink>
            <NavLink
              className={`winter-nav ${currentSeason === "winter-nav" ? "active" : ""}`}
              id="winter"
              to="/winter"
              onClick={() => onClickSeason("winter")}
            >
              Winter
            </NavLink>
          </div>
        </div>
      }
    </>
  );
}

export default Nav;
