/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property2TimeCircle = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-2-time-circle ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M21.25 12C21.25 17.109 17.109 21.25 12 21.25C6.891 21.25 2.75 17.109 2.75 12C2.75 6.891 6.891 2.75 12 2.75C17.109 2.75 21.25 6.891 21.25 12Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M15.4311 14.9417L11.6611 12.6927V7.8457"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
