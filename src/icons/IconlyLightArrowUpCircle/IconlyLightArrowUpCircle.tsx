/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconlyLightArrowUpCircle = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`iconly-light-arrow-up-circle ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M21.2498 12C21.2498 6.892 17.1088 2.75 11.9998 2.75C6.8918 2.75 2.7498 6.892 2.7498 12C2.7498 17.108 6.8918 21.25 11.9998 21.25C17.1088 21.25 21.2498 17.108 21.2498 12Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M15.471 13.4423L12 9.9563L8.529 13.4423"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
