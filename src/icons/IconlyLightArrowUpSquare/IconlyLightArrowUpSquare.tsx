/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconlyLightArrowUpSquare = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`iconly-light-arrow-up-square ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M16.3341 2.75H7.6651C4.6451 2.75 2.7501 4.889 2.7501 7.916V16.084C2.7501 19.111 4.6351 21.25 7.6651 21.25H16.3341C19.3641 21.25 21.2501 19.111 21.2501 16.084V7.916C21.2501 4.889 19.3641 2.75 16.3341 2.75Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M12.0001 7.914L12.0001 16.086"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M8.2521 11.6777L12.0001 7.9137L15.7481 11.6777"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
