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

export const Arrow8 = ({ color = "#121212", className }: Props): JSX.Element => {
  return (
    <svg
      className={`arrow-8 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_301_13874)">
        <circle className="circle" cx="12" cy="12" r="11.5" stroke={color} />
        <path
          className="path"
          d="M9.79736 7.49219L16.2356 7.49219L16.2356 13.9304"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          className="path"
          d="M7.22021 16.5078L16.1457 7.58236"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_301_13874">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

Arrow8.propTypes = {
  color: PropTypes.string,
};
