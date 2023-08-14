/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property2Bookmark = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-2-bookmark ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M19.739 6.15442C19.739 3.40354 17.8583 2.30078 15.1506 2.30078H8.79167C6.16711 2.30078 4.2002 3.32835 4.2002 5.97096V20.6948C4.2002 21.4206 4.98115 21.8777 5.61373 21.5228L11.9957 17.9429L18.3225 21.5168C18.9561 21.8737 19.739 21.4166 19.739 20.6898V6.15442Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M8.27137 9.0288H15.5897"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
