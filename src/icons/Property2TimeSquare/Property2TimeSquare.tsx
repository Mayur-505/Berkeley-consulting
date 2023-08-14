/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property2TimeSquare = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-2-time-square ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M16.335 2.75H7.66598C4.64498 2.75 2.75098 4.889 2.75098 7.916V16.084C2.75098 19.111 4.63498 21.25 7.66598 21.25H16.334C19.365 21.25 21.251 19.111 21.251 16.084V7.916C21.251 4.889 19.365 2.75 16.335 2.75Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M15.392 14.0168L12.001 11.9938V7.63281"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
