/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Property2Graph = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-2-graph ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M17.2777 13.8896C17.9524 13.8896 18.5188 14.4465 18.4156 15.1128C17.8103 19.0328 14.4545 21.9433 10.4072 21.9433C5.92928 21.9433 2.2998 18.3138 2.2998 13.837C2.2998 10.1486 5.10191 6.71279 8.25665 5.93595C8.93454 5.76858 9.62928 6.24542 9.62928 6.94332C9.62928 11.6717 9.78823 12.8949 10.6861 13.5602C11.584 14.2254 12.6398 13.8896 17.2777 13.8896Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M21.6923 9.95121C21.746 6.91331 18.0144 2.01647 13.4671 2.10068C13.1134 2.107 12.8302 2.40173 12.8144 2.75437C12.6997 5.25226 12.8544 8.4891 12.9408 9.95647C12.9671 10.4133 13.326 10.7723 13.7818 10.7986C15.2902 10.8849 18.645 11.0028 21.1071 10.6302C21.4418 10.5796 21.6871 10.2891 21.6923 9.95121Z"
        fillRule="evenodd"
        stroke="#15141E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
