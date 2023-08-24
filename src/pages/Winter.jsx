import React from "react";
// import "../../public/assets/winter/winter.css"
function Winter() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Archivo Narrow:wght@400&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=B612:wght@400&display=swap"
      />
      <link rel="stylesheet" href="../../public/assets/winter/winter.css" />
      <div className="winter">
         
          {/* <a className="selin-boutique">SELIN BOUTIQUE</a> */}
        {/* <div className="head">
            <nav className="text">
            <a className="latest">Latest</a>
            <a className="category">Category</a>
            <a className="offers">Offers</a>
            </nav>
            <button className="icons">
            <img className="icons-child" alt="" src="../../public/winter/group-1.svg" />
            <img className="icons-item" alt="" src="../../public/winter/group-2.svg" />
            </button>
            <img className="head-child" alt="" src="../../public/winter/line-2@2x.png" />
        </div> */}
        {/* <div className="fasl">
            <img className="fasl-child" alt="" src="../../public/winter/line-3.svg" />
            <nav className="summer-parent">
            <a className="summer" id="summerText">
                Summer
            </a>
            <a className="spring" id="springText">
                spring
            </a>
            <a className="autumn" id="autumnText">
                autumn
            </a>
            <a className="winter1">Winter</a>
            </nav>
        </div> */}
        <div className="date">
          <div className="date-child" />
          <div className="date-item" />
          <div className="date-inner" />
          <div className="jan-2023">14 JAN 2023</div>
        </div>
        <div className="winter-collecction">
          <p className="we-all-need">
            We all need some fashion inspiration to accept ourselves and dress
            up in clothes that express our personality.
          </p>
          <h1 className="winter-collection">WINTER COLLECTION</h1>
          <div className="explore-parent">
            <h4 className="explore">Explore</h4>
            <button className="arrow-right"></button>
            <button className="vuesaxoutlinearrow-right">
              <img
                className="arrow-right-icon"
                alt=""
                src="../../public/winter/arrowright.svg"
              />
            </button>
          </div>
        </div>
        <div className="photos">
          <img
            className="screenshot-20230114-201413-ins-icon"
            alt=""
            src="../../public/winter/screenshot-20230114-201413-instagram@2x.png"
          />
          <img
            className="screenshot-20230114-201718-ins-icon"
            alt=""
            src="../../public/winter/screenshot-20230114-201718-instagram@2x.png"
          />
          <img
            className="screenshot-20230114-202936-ins-icon"
            alt=""
            src="../../public/winter/screenshot-20230114-202936-instagram@2x.png"
          />
          <button className="arrow">
            <div className="arrow-child" />
            <img
              className="arrow-right-icon1"
              alt=""
              src="../../public/winter/arrowright1.svg"
            />
          </button>
        </div>
        <div className="trends">
          <section className="trends-child" />
          <div className="screenshot-20230114-201659-ins-parent">
            <img
              className="screenshot-20230114-201659-ins-icon"
              alt=""
              src="../../public/winter/screenshot-20230114-201659-instagram@2x.png"
            />
            <img
              className="screenshot-20230114-201938-ins-icon"
              alt=""
              src="../../public/winter/screenshot-20230114-201938-instagram@2x.png"
            />
            <img
              className="screenshot-20230114-202949-ins-icon"
              alt=""
              src="../../public/winter/screenshot-20230114-202949-instagram@2x.png"
            />
          </div>
          <p className="many-desktop-publishing">
            Many desktop publishing packages and web page sites still in their
            infancy.Many desktop publishing packages and web page and a search
            for 'lorem ipsum' will uncover many web sites still in their
            infancy.
          </p>
          <h2 className="trends1">Trends</h2>
          <div className="more-parent">
            <span className="more">More</span>
            <button className="arrow-right1"></button>
            <button className="vuesaxoutlinearrow-right">
              <img
                className="arrow-right-icon2"
                alt=""
                src="../../public/winter/arrowright2.svg"
              />
            </button>
          </div>
        </div>
        <div className="links">
          <button className="phinstagram-logo">
            <img
              className="vector-icon"
              alt=""
              src="../../public/winter/vector.svg"
            />
          </button>
          <button className="icbaseline-whatsapp">
            <img
              className="vector-icon1"
              alt=""
              src="../../public/winter/vector1.svg"
            />
          </button>
          <button className="phpinterest-logo-bold">
            <img
              className="vector-icon2"
              alt=""
              src="../../public/winter/vector2.svg"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Winter;
