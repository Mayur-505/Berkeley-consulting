/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property2DangerCircle = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-2-danger-circle ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M12.0001 2.7501C17.1081 2.7501 21.2501 6.8911 21.2501 12.0001C21.2501 17.1081 17.1081 21.2501 12.0001 21.2501C6.8911 21.2501 2.7501 17.1081 2.7501 12.0001C2.7501 6.8911 6.8911 2.7501 12.0001 2.7501Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M11.9952 8.20322V12.6222"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M11.9951 15.797H12.0051"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
