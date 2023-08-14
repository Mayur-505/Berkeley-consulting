/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property2Show = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-2-show ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M15.1619 12.0526C15.1619 13.7986 13.7459 15.2136 11.9999 15.2136C10.2539 15.2136 8.83887 13.7986 8.83887 12.0526C8.83887 10.3056 10.2539 8.89062 11.9999 8.89062C13.7459 8.89062 15.1619 10.3056 15.1619 12.0526Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M11.998 19.354C15.806 19.354 19.289 16.616 21.25 12.052C19.289 7.488 15.806 4.75 11.998 4.75H12.002C8.194 4.75 4.711 7.488 2.75 12.052C4.711 16.616 8.194 19.354 12.002 19.354H11.998Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
