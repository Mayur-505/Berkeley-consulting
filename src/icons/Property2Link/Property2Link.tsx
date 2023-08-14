/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property2Link = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-2-link ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.682 9.59889C13.0308 9.79753 13.3578 10.047 13.6555 10.3446C15.4432 12.1323 15.4921 14.9818 13.2431 17.2309L10.197 20.2769C7.94792 22.526 5.09839 22.4771 3.31068 20.6893C1.52297 18.9016 1.47398 16.0521 3.72305 13.803L5.94068 11.5763"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.35594"
      />
      <path
        className="path"
        d="M11.3178 14.4004C10.969 14.2017 10.642 13.9523 10.3444 13.6547C8.55664 11.867 8.5077 9.01747 10.7568 6.7684L13.8028 3.72239C16.0519 1.47328 18.9014 1.52226 20.6891 3.30998C22.4769 5.09773 22.5258 7.94722 20.2768 10.1963L18.0591 12.423"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.35594"
      />
    </svg>
  );
};
