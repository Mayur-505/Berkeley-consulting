/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property2InfoSquare = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-2-info-square ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M16.3341 2.7501H7.6651C4.6441 2.7501 2.7501 4.8891 2.7501 7.9161V16.0841C2.7501 19.1111 4.6351 21.2501 7.6651 21.2501H16.3331C19.3641 21.2501 21.2501 19.1111 21.2501 16.0841V7.9161C21.2501 4.8891 19.3641 2.7501 16.3341 2.7501Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M11.9942 16.0001V12.0001"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M11.9902 8.20518H12.0002"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
