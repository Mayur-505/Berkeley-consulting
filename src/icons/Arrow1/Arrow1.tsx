/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Arrow1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`arrow-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_692_1774)">
        <circle className="circle" cx="12.5" cy="12" r="11.5" stroke="white" />
        <path
          className="path"
          d="M10.2979 7.49219L16.7361 7.49219L16.7361 13.9304"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          className="path"
          d="M7.71973 16.5078L16.6452 7.58236"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_692_1774">
          <rect className="rect" fill="white" height="24" transform="translate(0.5)" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};
