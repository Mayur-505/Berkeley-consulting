/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
//   
interface Props {
  type: "title" | "title-description";
  column: "twelve-col" | "five-col" | "eight-col" | "six-col";
  alignment: "left-align" | "center-align";
  className: any;
  divClassName: any;
  text: string;
}

export const SectionHeading = ({
  type,
  column,
  alignment,
  className,
  divClassName,
  text = "Section Title",
}: Props): JSX.Element => {
  return (
    <div className={`section-heading ${type} ${column} ${alignment} ${className}`}>
      {type === "title-description" && (
        <>
          <div className="section-title-wrapper">
            <div className="section-title">{text}</div>
          </div>
          <p className="description-2">This will be a two liner description about the section. You can modify here.</p>
        </>
      )}

      {type === "title" && <div className={`section-title-2 ${divClassName}`}>{text}</div>}
    </div>
  );
};

SectionHeading.propTypes = {
  type: PropTypes.oneOf(["title", "title-description"]),
  column: PropTypes.oneOf(["twelve-col", "five-col", "eight-col", "six-col"]),
  alignment: PropTypes.oneOf(["left-align", "center-align"]),
  text: PropTypes.string,
};
