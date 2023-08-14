/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property2Thunder = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-2-thunder ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_294_21473)">
        <mask
          className="mask"
          height="25"
          id="mask0_294_21473"
          maskUnits="userSpaceOnUse"
          style="mask-type:luminance"
          width="25"
          x="0"
          y="0"
        >
          <path className="path" d="M0.00244141 0.00390816H24.0025V24.0039H0.00244141V0.00390816Z" fill="white" />
        </mask>
        <g className="g" mask="url(#mask0_294_21473)">
          <path
            className="path"
            d="M18.3311 9.89453H11.7962L14.1123 0.707033L5.6748 14.1133H12.2097L9.89356 23.3008L18.3311 9.89453Z"
            stroke="#15141E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.40625"
          />
        </g>
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_294_21473">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};
