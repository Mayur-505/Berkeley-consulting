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

export const Arrow2 = ({ color = "#3B82F6", className }: Props): JSX.Element => {
  return (
    <svg
      className={`arrow-2 ${className}`}
      fill="none"
      height="44"
      viewBox="0 0 44 44"
      width="44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M22.0003 40.3337C32.1255 40.3337 40.3337 32.1255 40.3337 22.0003C40.3337 11.8751 32.1255 3.66699 22.0003 3.66699C11.8751 3.66699 3.66699 11.8751 3.66699 22.0003C3.66699 32.1255 11.8751 40.3337 22.0003 40.3337Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M24.3098 28.4717L17.8564 22L24.3098 15.5283"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Arrow2.propTypes = {
  color: PropTypes.string,
};
