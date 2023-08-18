/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Arrow1 } from "../../icons/Arrow1";
import { InputBox } from "../InputBox";
import { Button } from "../Button";

interface Props {
  className: any;
  buttonIcon: JSX.Element;
}

export const Form = ({ className, buttonIcon = <Arrow1 className="arrow" /> }: Props): JSX.Element => {
  return (
    <div className={`form ${className}`}>
      <div className="frame">
        <div className="text-wrapper-2">Inquiry</div>
      </div>
      <div className="please-fill-in-brief">
        <span className="span">
          Please fill in brief service information!
          <br />
          It is very helpful for{" "}
        </span>
        <span className="text-wrapper-3 font-medium">quotation consultation.</span>
      </div>
      <div className="frame-2">
        <InputBox
          className="input-box-instance"
          dashboard="ON"
          helpingCounter={false}
          inputText="Enter your project name"
          lHSIcon={false}
          searchBarClassName="design-component-instance-node"
          status="default"
          writeHeadingText="What’s your project Name?"
        />
        <InputBox
          className="input-box-2"
          dashboard="ON"
          helpingCounter={false}
          inputText="Tell me about your project."
          lHSIcon={false}
          searchBarClassName="design-component-instance-node"
          status="default"
          writeHeadingText="What Do you wanna Build?"
        />
        <InputBox
          className="input-box-instance"
          dashboard="ON"
          helpingCounter={false}
          inputText="$ 5,000 or $ 10,000...$ 50,000...$ 100,000........"
          lHSIcon={false}
          searchBarClassName="design-component-instance-node"
          status="default"
          writeHeadingText="What’s your Budget?"
        />
      </div>
      <div className="frame">
        <div className="text-wrapper-2">contact information</div>
      </div>
      <div className="frame-2">
        <div className="frame-3">
          <InputBox
            className="input-box-3"
            dashboard="ON"
            helpingCounter={false}
            inputText="Enter your Name"
            lHSIcon={false}
            searchBarClassName="design-component-instance-node"
            status="default"
            writeHeadingText="What’s your Name?"
          />
          <InputBox
            className="input-box-3"
            dashboard="ON"
            helpingCounter={false}
            inputText="Enter your Phone Number"
            lHSIcon={false}
            searchBarClassName="design-component-instance-node"
            status="default"
            writeHeadingText="What’s your Contact Num. ?"
          />
        </div>
        <div className="frame-3">
          <InputBox
            className="input-box-3"
            dashboard="ON"
            helpingCounter={false}
            inputText="Enter your Email address"
            lHSIcon={false}
            searchBarClassName="design-component-instance-node"
            status="default"
            writeHeadingText="What’s your Email?"
          />
          <InputBox
            className="input-box-3"
            dashboard="ON"
            helpingCounter={false}
            inputText="Enter your Company Name"
            lHSIcon={false}
            searchBarClassName="design-component-instance-node"
            status="default"
            writeHeadingText="What’s your Company Name ?"
          />
        </div>
        <div className="frame-3">
          <InputBox
            className="input-box-3"
            dashboard="ON"
            helpingCounter={false}
            inputText="Enter your Previous Position"
            lHSIcon={false}
            searchBarClassName="design-component-instance-node"
            status="default"
            writeHeadingText="What’s your position?"
          />
          <InputBox
            className="input-box-4"
            dashboard="ON"
            helpingCounter={false}
            inputText="Enter your Phone Number"
            lHSIcon={false}
            searchBarClassName="design-component-instance-node"
            status="default"
            writeHeadingText="What’s your Contact Num. ?"
          />
        </div>
      </div>
      <Button
        big="ON"
        buttonText="Submit Now"
        className="button-instance"
        icon={buttonIcon}
        lHSIcon={false}
        rHSIcon={false}
        state="primary"
      />
    </div>
  );
};
