/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconlyLightArrowDownSquare = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`iconly-light-arrow-down-square ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M7.6659 21.25H16.3349C19.3549 21.25 21.2499 19.111 21.2499 16.084V7.916C21.2499 4.889 19.3649 2.75 16.3349 2.75H7.6659C4.6359 2.75 2.7499 4.889 2.7499 7.916V16.084C2.7499 19.111 4.6359 21.25 7.6659 21.25Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M11.9999 16.086V7.914"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M15.7479 12.3223L11.9999 16.0863L8.2519 12.3223"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
