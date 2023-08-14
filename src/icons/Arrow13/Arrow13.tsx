/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Arrow13 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`arrow-13 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_670_561)">
        <circle className="circle" cx="12.5" cy="12" r="11.5" stroke="#020617" />
        <path
          className="path"
          d="M10.2975 7.49219L16.7357 7.49219L16.7357 13.9304"
          stroke="#020617"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
        <path
          className="path"
          d="M7.72009 16.5078L16.6455 7.58236"
          stroke="#020617"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_670_561">
          <rect className="rect" fill="white" height="24" transform="translate(0.5)" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};
