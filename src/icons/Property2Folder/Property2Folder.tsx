/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property2Folder = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-2-folder ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M21.4189 15.7321C21.4189 19.3101 19.3099 21.4191 15.7319 21.4191H7.9499C4.3629 21.4191 2.2499 19.3101 2.2499 15.7321V7.9321C2.2499 4.3591 3.5639 2.2501 7.1429 2.2501H9.1429C9.8609 2.2511 10.5369 2.5881 10.9669 3.1631L11.8799 4.3771C12.3119 4.9511 12.9879 5.2891 13.7059 5.2901H16.5359C20.1229 5.2901 21.4469 7.1161 21.4469 10.7671L21.4189 15.7321Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M7.48135 14.463H16.2163"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
