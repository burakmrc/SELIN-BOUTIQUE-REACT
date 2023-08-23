import Nav from "./Nav";
import NavItem from "./NavItem";
import React, { useState } from "react";

function Footer() {
  const [selectedSeason, setSelectedSeason] = useState("autumn1");

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
  };

  return (
    <>
      <link rel="stylesheet" href="../../public/assets/navbar/navbar.css" />
      <div className="selin-boutique-parent">
        <a className="selin-boutique">SELIN BOUTIQUE</a>{" "}
        <img
          className="boutique-symbol-of-corset-on-h-icon"
          alt=""
           src={`../../public/${selectedSeason === "autumn1" ? "autumn" : selectedSeason}/${selectedSeason === "autumn1" ? "new-logo.png" : "new-logo.png"}`}
        />
      </div>
      <Nav currentSeason={selectedSeason} onClickSeason={handleSeasonClick} />
      <div className="head">
        <nav className="text">
          <a className="latest">Latest</a>
          <a className="category">Category</a>
          <a className="offers">Offers</a>
        </nav>
        <button className="icons">
          <img
            className="icons-child"
            alt=""
            src="../../public/autumn/group-1.svg"
          />
          <img
            className="icons-item"
            alt=""
            src="../../public/autumn/group-2.svg"
          />
        </button>
        <img
          className="head-child"
          alt=""
          src="../../public/autumn/line-2@2x.png"
        />
      </div>

      {/* {
        <div>
          <NavItem />
        </div>
      } */}
    </>
  );
}

export default Footer;
