/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconlyLightArrowRightCircle = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`iconly-light-arrow-right-circle ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.8918 17.108 2.7498 12 2.7498C6.892 2.7498 2.75 6.8918 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M10.5577 15.471L14.0437 12L10.5577 8.529"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
