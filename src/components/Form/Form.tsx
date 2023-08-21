/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React, { useState } from "react";
import { Arrow1 } from "../../icons/Arrow1";
import { InputBox } from "../InputBox";
import { Button } from "../Button";
import { toast } from "react-toastify";

interface Props {
  className: any;
  buttonIcon: JSX.Element;
}

export const Form = ({ className, buttonIcon = <Arrow1 className="arrow" /> }: Props): JSX.Element => {
  // const [userData, setUserData] = useState<any>({
  //   "First name": "",
  //   "Last name": "",
  //   "Email": "",
  //   "Phone number": "",
  //   "Topic": "",
  //   "Message": ""
  // })
  // const [acceptTerm, setAcceptTerm] = useState(false)
  // const [loader, setLoader] = useState(false)

  // const onChangeData = (name: string, value: any) => {
  //   setUserData({ ...userData, [name]: value })
  // }

  // console.log('userData', userData)

  // const onSubmitForm = async (e: any) => {
  //   e.preventDefault()
  //   setLoader(true)
  //   let emailHtml = `<h2>User ${userData["First name"]} wants to contact PARADIVE for ${userData["Topic"] || ""}</h2>`;
  //   for (const key in userData) {
  //     emailHtml = emailHtml + `
  //     <p><b>${key}</b> : ${userData[key]}</p>
  //     <br>
  //     `
  //   }
  //   // for key in user
  //   await axios.post("/api/email", {
  //     email: userData?.Email,
  //     html: emailHtml
  //   }).then((data: any) => {
  //     setLoader(false)
  //     toast("Email sent successfully")
  //     setUserData({
  //       "First name": "",
  //       "Last name": "",
  //       "Email": "",
  //       "Phone number": "",
  //       "Topic": "",
  //       "Message": ""
  //     });
  //     return {
  //     }
  //   }).catch((err: any) => {
  //     setLoader(false)
  //   })
  // }


  return (
    <div className={`form ${className}`}>
      <div className="w-[90%] py-[50px]">
        <div className="frame">
          <div className="text-wrapper-2 fs-18">Inquiry</div>
        </div>
        <div className="please-fill-in-brief lineHeight28">
          <span className="span fs-18 lineHeight28">
            Please fill in brief service information!
            <br />
            It is very helpful for{" "}
          </span>
          <span className="text-wrapper-3 font-medium fs-18 lineHeight28">quotation consultation.</span>
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
          <div className="text-wrapper-2 fs-18">contact information</div>
        </div>
        <div className="frame-2">
          <div className="frame-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <InputBox
              className="input-box-3"
              dashboard="ON"
              helpingCounter={false}
              inputText="Enter your Name"
              lHSIcon={false}
              searchBarClassName="design-component-instance-node"
              status="default"
              writeHeadingText="What’s your Name?"
              // value={userData["First name"]}
              // onChange={(event) => onChangeData("First name", event?.target?.value)}
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
        <div className="flex justify-center lg:mt-[30px] md:mt-[30px] sm:mt-[-30px] mt-[-30px]">
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
      </div>
    </div>
  );
};
