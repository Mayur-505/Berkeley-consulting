/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconlyLightArrowRightSquare = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`iconly-light-arrow-right-square ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M21.25 16.3341V7.6651C21.25 4.6451 19.111 2.7501 16.084 2.7501H7.916C4.889 2.7501 2.75 4.6351 2.75 7.6651L2.75 16.3341C2.75 19.3641 4.889 21.2501 7.916 21.2501H16.084C19.111 21.2501 21.25 19.3641 21.25 16.3341Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M16.086 12.0001H7.914"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M12.3223 8.2521L16.0863 12.0001L12.3223 15.7481"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
