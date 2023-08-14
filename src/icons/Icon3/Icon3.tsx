/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Icon3 = ({ color = "#443BB0", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-3 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="circle"
        cx="9.80589"
        cy="9.80492"
        r="7.49047"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
      <path
        className="path"
        d="M15.0156 15.4038L17.9523 18.3329"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
};

Icon3.propTypes = {
  color: PropTypes.string,
};
