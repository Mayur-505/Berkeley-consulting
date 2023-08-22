/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React, { useState } from "react";
import { Arrow1 } from "../../icons/Arrow1";
import { useTranslation } from 'react-i18next'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { Arrow3 } from "@/icons/Arrow3";

interface Props {
  className: any;
  buttonIcon: JSX.Element;
}

export const Form = ({ className, buttonIcon = <Arrow1 className="arrow" /> }: Props): JSX.Element => {
  const [userData, setUserData] = useState<any>({
    "First name": "",
    "Email": "",
    "Company": "",
    "Position": "",
    "Phone number": "",
    "Project Name": "",
    "Message": "",
    "budget": ""
  })
  const [loader, setLoader] = useState(false)
  const { t } = useTranslation()

  const onChangeData = (name: string, value: any) => {
    setUserData({ ...userData, [name]: value })
  }

  const onSubmitForm = async (e: any) => {
    e.preventDefault()
    setLoader(true)
    let emailHtml = `<h2>User ${userData["First name"]} wants to contact berkeley for ${userData["Project Name"] || ""}</h2>`;
    for (const key in userData) {
      emailHtml = emailHtml + `
      <p><b>${key}</b> : ${userData[key]}</p>
      <br>
      `
    }
    // try {
    //   const response = await fetch('/api/email', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(userData),
    //   });

    //   const data = await response.json();
    //   console.log(data); // Response from the API
    // } catch (error) {
    //   console.error('Error sending email:', error);
    // }

    // for key in user
    await axios.post("/api/email", {
      email: userData?.Email,
      html: emailHtml
    }).then((data: any) => {
      if(userData["First name"] !== "" && userData["Email"] !== "" && userData["Company"] !== "" && userData["Position"] !== "" && userData["Phone number"] !== "" && userData["Project Name"] !== "" && userData["Message"] !== "" && userData["budget"] !== "") {
        setLoader(false)
        toast("Submitted Succesfully!")
        setUserData({
          "First name": "",
          "Email": "",
          "Company": "",
          "Position": "",
          "Phone number": "",
          "Project Name": "",
          "Message": "",
          "budget": ""
        });
      } else {
        setLoader(false)
        toast("required all the fields")
      }
      return {
      }
    }).catch((err: any) => {
      if(userData["First name"] !== "" && userData["Email"] !== "" && userData["Company"] !== "" && userData["Position"] !== "" && userData["Phone number"] !== "" && userData["Project Name"] !== "" && userData["Message"] !== "" && userData["budget"] !== "") {
        setLoader(false)
      } else {
        toast("required all the fields")
      }
      setLoader(false)
    })
  }

  return (
    <div className={`form ${className}`}>
      {
        loader ?
          <div className='flex loaderView'>
            <div className="loader "></div>

          </div>

          : ""
      }
      <form className="w-[90%] pb-[50px]" onSubmit={(e) => onSubmitForm(e)}>
        <div className="frame">
          <div className="text-wrapper-2 fs-18">{t("form.inquiry.title")}</div>
        </div>
        <div className="please-fill-in-brief lineHeight28">
          <span className="span fs-18 lineHeight28">
            {t("form.inquiry.text1")}
            <br />
            {t("form.inquiry.text2")}{" "}
          </span>
          <span className="text-wrapper-3 font-medium fs-18 lineHeight28">{t("form.inquiry.text3")}</span>
        </div>
        <div className="frame-2">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] w-[100%]">
            <div className="font-general-sans">{t("form.inquiry.inquiry1.title")}</div>
            <input type='text' className={`outline-[0] rounded-[8px] w-[100%] p-3.5 text-[14px] rounded-smi bg-white box-border items-start justify-start relative border-[1px] border-solid border-[#e4e4e7] ${userData["Project Name"] !== "" ? "text-[#333]" : "text-[#A1A1AA]"}`} placeholder={t("form.inquiry.inquiry1.text")} value={userData["Project Name"]} onChange={(event) => onChangeData("Project Name", event?.target?.value)} />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] w-[100%]">
            <div className="font-general-sans">{t("form.inquiry.inquiry2.title")}</div>
            <textarea typeof='text' rows={6} className={`outline-[0] rounded-[8px] w-[100%] p-3.5 text-[14px] rounded-smi bg-white box-border items-start justify-start relative border-[1px] border-solid border-[#e4e4e7] ${userData["Message"] !== "" ? "text-[#333]" : "text-[#A1A1AA]"}`} placeholder={t("form.inquiry.inquiry2.text")} value={userData["Message"]} onChange={(event) => onChangeData("Message", event?.target?.value)} />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] w-[100%]">
            <div className="font-general-sans">{t("form.inquiry.inquiry3.title")}</div>
            <input type='text' className={`outline-[0] rounded-[8px] w-[100%] p-3.5 text-[14px] rounded-smi bg-white box-border items-start justify-start relative border-[1px] border-solid border-[#e4e4e7] ${userData["budget"] !== "" ? "text-[#333]" : "text-[#A1A1AA]"}`} placeholder={t("form.inquiry.inquiry3.text")} value={userData["budget"]} onChange={(event) => onChangeData("budget", event?.target?.value)} />
          </div>
        </div>
        <div className="frame">
          <div className="text-wrapper-2 fs-18">{t("form.contactInfo.title")}</div>
        </div>
        <div className="frame-2">
          <div className="frame-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="font-general-sans">{t("form.contactInfo.contactInfo1.title")}</div>
              <input type='text' className={`self-stretch outline-[0] rounded-[8px] p-3.5 text-[14px] rounded-smi bg-white box-border flex flex-row items-start justify-start relative ${userData["First name"] !== "" ? "text-[#333]" : "text-[#A1A1AA]"} border-[1px] border-solid border-[#e4e4e7]`} placeholder={t("form.contactInfo.contactInfo1.text")} value={userData["First name"]} onChange={(event) => onChangeData("First name", event?.target?.value)} />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="font-general-sans">{t("form.contactInfo.contactInfo2.title")}</div>
              <input type='text' className={`self-stretch outline-[0] rounded-[8px] p-4 text-[14px] rounded-smi bg-white box-border flex flex-row items-start justify-start relative text-[#A1A1AA] border-[1px] border-solid border-[#e4e4e7] ${userData["Phone number"] !== "" ? "text-[#333]" : "text-[#A1A1AA]"}`} placeholder={t("form.contactInfo.contactInfo2.text")} value={userData["Phone number"]} onChange={(event) => onChangeData("Phone number", event?.target?.value)} />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="font-general-sans">{t("form.contactInfo.contactInfo3.title")}</div>
              <input type='email' className={`self-stretch outline-[0] rounded-[8px] p-3.5 text-[14px] rounded-smi bg-white box-border flex flex-row items-start justify-start relative border-[1px] border-solid border-[#e4e4e7] ${userData["Email"] !== "" ? "text-[#333]" : "text-[#A1A1AA]"}`} placeholder={t("form.contactInfo.contactInfo3.text")} value={userData["Email"]} onChange={(event) => onChangeData("Email", event?.target?.value)} />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="font-general-sans">{t("form.contactInfo.contactInfo4.title")}</div>
              <input type='text' className={`self-stretch outline-[0] rounded-[8px] p-3.5 text-[14px] rounded-smi bg-white box-border flex flex-row items-start justify-start relative border-[1px] border-solid border-[#e4e4e7] ${userData["Company"] !== "" ? "text-[#333]" : "text-[#A1A1AA]"}`} placeholder={t("form.contactInfo.contactInfo4.text")} value={userData["Company"]} onChange={(event) => onChangeData("Company", event?.target?.value)} />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="font-general-sans">{t("form.contactInfo.contactInfo5.title")}</div>
              <input type='text' className={`self-stretch outline-[0] rounded-[8px] p-3.5 text-[14px] rounded-smi bg-white box-border flex flex-row items-start justify-start relative border-[1px] border-solid border-[#e4e4e7] ${userData["Position"] !== "" ? "text-[#333]" : "text-[#A1A1AA]"}`} placeholder={t("form.contactInfo.contactInfo5.text")} value={userData["Position"]} onChange={(event) => onChangeData("Position", event?.target?.value)} />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[30px]">
          <button className="flex items-center bg-[#2563EB] border-none px-[30px] py-[15px] rounded-[30px] text-white cursor-pointer">
            <div className="text-[18px] me-3">
              {t("submitButton.title")}
            </div>
            <Arrow3 className="property-2-search" color="white" />
          </button>
        </div>
      </form>
    </div>
  );
};
