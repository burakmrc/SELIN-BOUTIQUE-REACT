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
      <div className="selin-boutique-parent-nav">
        <a className="selin-boutique-nav">SELIN BOUTIQUE</a>{" "}
        <img
          className="boutique-symbol-of-corset-on-h-icon-nav"
          alt=""
           src={`../../public/${selectedSeason === "autumn1-nav" ? "autumn" : selectedSeason}/${selectedSeason === "autumn1-nav" ? "new-logo.png" : "new-logo.png"}`}
        />
      </div>
      <Nav currentSeason={selectedSeason} onClickSeason={handleSeasonClick} />
      <div className="head-nav">
        <nav className="text-nav">
          <a className="latest-nav">Latest</a>
          <a className="category-nav">Category</a>
          <a className="offers-nav">Offers</a>
        </nav>
        <button className="icons-nav">
          <img
            className="icons-child-nav"
            alt=""
            src="../../public/autumn/group-1.svg"
          />
          <img
            className="icons-item-nav"
            alt=""
            src="../../public/autumn/group-2.svg"
          />
        </button>
        <img
          className="head-child-nav"
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
