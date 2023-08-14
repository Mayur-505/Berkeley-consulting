/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property2Activity = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-2-activity ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.24512 14.7815L10.2383 10.8914L13.6524 13.5733L16.5815 9.79297"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <circle
        className="circle"
        cx="19.9954"
        cy="4.19954"
        r="1.9222"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M14.9248 3.11914H7.65704C4.6456 3.11914 2.77832 5.25186 2.77832 8.26331V16.3457C2.77832 19.3571 4.60898 21.4807 7.65704 21.4807H16.2612C19.2726 21.4807 21.1399 19.3571 21.1399 16.3457V9.30678"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
