/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconlyLightArrowDownCircle = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`iconly-light-arrow-down-circle ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M2.7502 12C2.7502 17.108 6.8912 21.25 12.0002 21.25C17.1082 21.25 21.2502 17.108 21.2502 12C21.2502 6.892 17.1082 2.75 12.0002 2.75C6.8912 2.75 2.7502 6.892 2.7502 12Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M8.529 10.5577L12 14.0437L15.471 10.5577"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
