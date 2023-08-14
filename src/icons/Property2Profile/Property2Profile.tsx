/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property2Profile = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-2-profile ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M11.9848 15.3457C8.11714 15.3457 4.81429 15.9305 4.81429 18.2724C4.81429 20.6143 8.09619 21.22 11.9848 21.22C15.8524 21.22 19.1543 20.6343 19.1543 18.2933C19.1543 15.9524 15.8733 15.3457 11.9848 15.3457Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94781 16.58 7.40971C16.58 4.87162 14.5229 2.81448 11.9848 2.81448C9.44667 2.81448 7.38857 4.87162 7.38857 7.40971C7.38 9.93924 9.42381 11.9973 11.9524 12.0059H11.9848Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.42857"
      />
    </svg>
  );
};
