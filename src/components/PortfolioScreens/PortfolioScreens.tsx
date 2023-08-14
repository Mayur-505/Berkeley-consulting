/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
//   
interface Props {
  portfolioCards: "zero" | "two" | "three" | "four" | "one" | "five" | "six";
}

export const PortfolioScreens = ({ portfolioCards }: Props): JSX.Element => {
  return (
    <div className={`portfolio-screens ${portfolioCards}`}>
      {portfolioCards === "six" && (
        <>
          <div className="ellipse-3" />
          <div className="ellipse-4" />
          <div className="ellipse-5" />
          <div className="ellipse-6" />
        </>
      )}

      {["six", "zero"].includes(portfolioCards) && <div className="ellipse-7" />}

      {portfolioCards === "four" && <img className="group" alt="Group" src="/img/group.png" />}

      {["four", "one", "three", "two"].includes(portfolioCards) && (
        <img
          className="element"
          alt="Element"
          src={
            portfolioCards === "one"
              ? "/img/clip-path-group-1.png"
              : portfolioCards === "four"
                ? "/img/crypto-fx-exchange-4.png"
                : portfolioCards === "three"
                  ? "/img/new-home-4.png"
                  : "/img/1.png"
          }
        />
      )}

      {["one", "three", "two"].includes(portfolioCards) && <div className="rectangle" />}

      {["five", "six", "three"].includes(portfolioCards) && (
        <>
          <img
            className="glow"
            alt="Glow"
            src={
              portfolioCards === "three"
                ? "/img/layer-1-3.svg"
                : portfolioCards === "six"
                  ? "/img/lottery-landing-game-expanded-4.svg"
                  : "/img/glow-1.png"
            }
          />
          <img
            className="glow-2"
            alt="Glow"
            src={
              portfolioCards === "three"
                ? "/img/layer-1-2.svg"
                : portfolioCards === "six"
                  ? "/img/lottery-landing-game-expanded-3.svg"
                  : "/img/glow.png"
            }
          />
        </>
      )}

      {portfolioCards === "three" && (
        <>
          <img className="layer" alt="Layer" src="/img/layer-1-1.svg" />
          <img className="layer-2" alt="Layer" src="/img/layer-1.svg" />
        </>
      )}

      {portfolioCards === "zero" && (
        <>
          <div className="ellipse-8" />
          <div className="ellipse-9" />
          <div className="ellipse-10" />
          <div className="rectangle-2" />
        </>
      )}

      {["five", "four", "zero"].includes(portfolioCards) && (
        <img
          className="aurora"
          alt="Aurora"
          src={
            portfolioCards === "zero"
              ? "/img/yelody-landing-page-4-1.png"
              : portfolioCards === "four"
                ? "/img/crypto-fx-exchange-3.png"
                : "/img/aurora-3.png"
          }
        />
      )}

      {["five", "zero"].includes(portfolioCards) && (
        <img
          className="aurora-2"
          alt="Aurora"
          src={portfolioCards === "zero" ? "/img/yelody-landing-page-3-1.png" : "/img/aurora-2.png"}
        />
      )}

      {portfolioCards === "zero" && (
        <>
          <div className="rectangle-3" />
          <div className="rectangle-4" />
        </>
      )}

      {["five", "four", "six", "zero"].includes(portfolioCards) && <div className="rectangle-5" />}
    </div>
  );
};

PortfolioScreens.propTypes = {
  portfolioCards: PropTypes.oneOf(["zero", "two", "three", "four", "one", "five", "six"]),
};
