/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property2Dollar = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-2-dollar ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_294_21395)">
        <path
          className="path"
          d="M16.7 8C16.501 7.43524 16.1374 6.94297 15.6563 6.58654C15.1751 6.23011 14.5983 6.02583 14 6H10C9.20435 6 8.44129 6.31607 7.87868 6.87868C7.31607 7.44129 7 8.20435 7 9C7 9.79565 7.31607 10.5587 7.87868 11.1213C8.44129 11.6839 9.20435 12 10 12H14C14.7956 12 15.5587 12.3161 16.1213 12.8787C16.6839 13.4413 17 14.2044 17 15C17 15.7956 16.6839 16.5587 16.1213 17.1213C15.5587 17.6839 14.7956 18 14 18H10C9.40175 17.9742 8.82491 17.7699 8.34373 17.4135C7.86255 17.057 7.49905 16.5648 7.3 16"
          stroke="#15141E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          className="path"
          d="M12 3V6M12 18V21"
          stroke="#15141E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_294_21395">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};
