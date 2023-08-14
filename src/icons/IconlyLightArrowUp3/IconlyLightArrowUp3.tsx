/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconlyLightArrowUp3 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`iconly-light-arrow-up-3 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.7487 11.3002L11.7487 20.2502"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M16.7497 11.3002L11.7487 3.3632L6.7477 11.3002L16.7497 11.3002Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
