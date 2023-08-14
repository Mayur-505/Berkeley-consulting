/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Arrow3 } from "@/icons/Arrow3";
import { Property2Search } from "@/icons/Property2Search";

interface Props {
  text: boolean;
  rHSIcon: boolean;
  buttonText: string;
  lHSIcon: boolean;
  rHSIcon2: boolean;
  state: "primary" | "secondary" | "outline";
  big: "OFF" | "ON";
  className: any;
  icon: JSX.Element;
}

export const Button = ({
  text = true,
  rHSIcon = true,
  buttonText = "Get started",
  lHSIcon = true,
  rHSIcon2 = true,
  state,
  big,
  className,
  icon = <Arrow3 className="property-2-search" color="white" />,
}: Props): JSX.Element => {
  return (
    <div className={`button ${state} big-${big} ${className}`}>
      {lHSIcon && <Property2Search className="property-2-search" color={state === "primary" ? "white" : "#15141E"} />}

      {text && <div className="get-started">{buttonText}</div>}

      {rHSIcon && <Property2Search className="property-2-search" color={state === "primary" ? "white" : "#15141E"} />}

      {rHSIcon2 && <>{icon}</>}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.bool,
  rHSIcon: PropTypes.bool,
  buttonText: PropTypes.string,
  lHSIcon: PropTypes.bool,
  rHSIcon2: PropTypes.bool,
  state: PropTypes.oneOf(["primary", "secondary", "outline"]),
  big: PropTypes.oneOf(["OFF", "ON"]),
};
