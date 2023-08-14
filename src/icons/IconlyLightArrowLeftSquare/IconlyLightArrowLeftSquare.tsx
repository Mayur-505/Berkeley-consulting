/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconlyLightArrowLeftSquare = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`iconly-light-arrow-left-square ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M2.75 7.6659L2.75 16.3349C2.75 19.3549 4.889 21.2499 7.916 21.2499L16.084 21.2499C19.111 21.2499 21.25 19.3649 21.25 16.3349L21.25 7.6659C21.25 4.6359 19.111 2.7499 16.084 2.7499L7.916 2.7499C4.889 2.7499 2.75 4.6359 2.75 7.6659Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M7.914 11.9999L16.086 11.9999"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M11.6777 15.7479L7.9137 11.9999L11.6777 8.2519"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
