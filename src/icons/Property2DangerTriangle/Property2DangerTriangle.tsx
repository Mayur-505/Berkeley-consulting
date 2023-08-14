/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property2DangerTriangle = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-2-danger-triangle ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M4.814 20.4368H19.197C20.779 20.4368 21.772 18.7268 20.986 17.3528L13.8 4.7878C13.009 3.4048 11.015 3.4038 10.223 4.7868L3.025 17.3518C2.239 18.7258 3.231 20.4368 4.814 20.4368Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M12.0028 13.4145V10.3145"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M11.995 16.5H12.005"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
