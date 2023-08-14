/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property2Columns = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-2-columns ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M22.3555 4.26758H1.64453C1.28853 4.26758 1 4.5652 1 4.93241V19.6027C1 19.97 1.28853 20.2676 1.64453 20.2676H22.3555C22.7115 20.2676 23 19.97 23 19.6027V4.93241C23 4.5652 22.7115 4.26758 22.3555 4.26758ZM8.90273 18.9379V5.59725H15.0973V18.9379H8.90273ZM2.28906 5.59725H7.61366V18.9379H2.28906V5.59725ZM21.7109 18.9379H16.3863V5.59725H21.7109V18.9379Z"
        fill="#15141E"
      />
    </svg>
  );
};
