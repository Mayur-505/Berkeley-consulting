import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n, useTranslation } from 'next-i18next'
import { useReducer, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { CustomerReview } from "@/components/customerReview/customerReview";
import { BlurLayer } from "@/components/BlurLayer";
import PopupComponent from "@/components/PopupComponent";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  centerPadding: 20,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const settingsPortfolio = {
  dots: false,
  infinite: false,
  speed: 500,
  centerPadding: 20,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const reducer = (state: any, action: any) => {
  console.log("🚀 ~ file: index.tsx:8 ~ reducer ~ action:", action)
  switch (action) {
    case "faq1":
      return {
        ...state,
        openFaq: state?.openFaq?.includes("faq1") ? state?.openFaq?.filter((item: any) => item !== "faq1") : [...state?.openFaq, "faq1"],
      };
    case "faq2":
      return {
        ...state,
        openFaq: state?.openFaq?.includes("faq2") ? state?.openFaq?.filter((item: any) => item !== "faq2") : [...state?.openFaq, "faq2"],
      };
    case "faq3":
      return {
        ...state,
        openFaq: state?.openFaq?.includes("faq3") ? state?.openFaq?.filter((item: any) => item !== "faq3") : [...state?.openFaq, "faq3"],
      };
    case "faq4":
      return {
        ...state,
        openFaq: state?.openFaq?.includes("faq4") ? state?.openFaq?.filter((item: any) => item !== "faq4") : [...state?.openFaq, "faq4"],
      };
    case "faq5":
      return {
        ...state,
        openFaq: state?.openFaq?.includes("faq5") ? state?.openFaq?.filter((item: any) => item !== "faq5") : [...state?.openFaq, "faq5"],
      };
    default:
      return state
  }
}



function FAQComponent() {
  const { t } = useTranslation('common')
  const [state, dispatch] = useReducer(reducer, { openFaq: ["faq1"] })

  const faqArray = [
    {
      question: t("landingPage.faq1.question"),
      answer: t("landingPage.faq1.answer"),
      key: "faq1"
    },
    {
      question: t("landingPage.faq2.question"),
      answer: t("landingPage.faq2.answer"),
      key: "faq2"
    },
    {
      question: t("landingPage.faq3.question"),
      answer: t("landingPage.faq3.answer"),
      key: "faq3"
    },
    {
      question: t("landingPage.faq4.question"),
      answer: t("landingPage.faq4.answer"),
      key: "faq4"
    },
    {
      question: t("landingPage.faq5.question"),
      answer: t("landingPage.faq5.answer"),
      key: "faq5"
    },
  ]
  return (
    <>
      {faqArray.map((faq, index) => {
        return <div className={`self-stretch flex flex-col items-center justify-start border-solid ${index === faqArray?.length - 1 ? "border-b-0" : "border-b-1"}  border-gray-200 border-r-0 border-l-0 border-t-0`}>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] pb-4">
            <div className="flex flex-col pt-0.5 px-0 pb-0 items-start justify-start">

              {state?.openFaq?.includes(faq?.key) ? <img className="relative w-6 h-6 overflow-hidden shrink-0" alt="" src="/minuscircle.svg" onClick={() => dispatch(faq?.key)} /> :
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/pluscircle.svg"
                  onClick={() => dispatch(faq?.key)}
                />}
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative tracking-[0.04em] leading-[28px] font-medium">
                {faq?.question}
              </div>
              {state?.openFaq?.includes(faq?.key) ? <div className="self-stretch relative text-base leading-[24px] text-greys-grey-05 pb-2">
                {faq?.answer}
              </div> : null}
            </div>
          </div>

        </div>
      })}


    </>

  );
}


const BCLandingPage: NextPage = () => {
  const { t } = useTranslation('common')
  const [form, setForm] = useState(false)
  const [active, setActive] = useState(0)
  const reviewsSlider = useRef<any>();

  const next = () => {
    reviewsSlider?.current?.slickNext();
  };
  const previous = () => {
    reviewsSlider?.current?.slickPrev();
  };
  const reviews = [
    {
      userName1: t("landingPage.review1.userName"),
      role1: t("landingPage.review1.role"),
      text1: t("landingPage.review1.text"),
      img1: "/image-1@2x.png",
      userName2: t("landingPage.review4.userName"),
      role2: t("landingPage.review4.role"),
      text2: t("landingPage.review4.text"),
      img2: "/image-4@2x.png",
    },
    {
      userName1: t("landingPage.review2.userName"),
      role1: t("landingPage.review2.role"),
      text1: t("landingPage.review2.text"),
      img1: "/image-2@2x.png",
      userName2: t("landingPage.review5.userName"),
      role2: t("landingPage.review5.role"),
      text2: t("landingPage.review5.text"),
      img2: "/image-5@2x.png",
    },
    {
      userName1: t("landingPage.review3.userName"),
      role1: t("landingPage.review3.role"),
      text1: t("landingPage.review3.text"),
      img1: "/image-3@2x.png",
      userName2: t("landingPage.review6.userName"),
      role2: t("landingPage.review6.role"),
      text2: t("landingPage.review6.text"),
      img2: "/kennethschippervera-ztnqa4a7pqunsplash-1@2x.png",
    },
    {
      userName1: t("landingPage.review7.userName"),
      role1: t("landingPage.review7.role"),
      text1: t("landingPage.review7.text"),
      img1: "/image-3@2x.png",
      userName2: t("landingPage.review9.userName"),
      role2: t("landingPage.review9.role"),
      text2: t("landingPage.review9.text"),
      img2: "/kennethschippervera-ztnqa4a7pqunsplash-1@2x.png",
    },
    {
      userName1: t("landingPage.review8.userName"),
      role1: t("landingPage.review8.role"),
      text1: t("landingPage.review8.text"),
      img1: "/image-3@2x.png",
      userName2: t("landingPage.review10.userName"),
      role2: t("landingPage.review10.role"),
      text2: t("landingPage.review10.text"),
      img2: "/kennethschippervera-ztnqa4a7pqunsplash-1@2x.png",
    },


  ]

  const portFolioImages = [
    {
      image: "/Portfolio Screens.png"
    },
    {
      image: "/img/Portfolio Cards=1.png"
    },
    {
      image: "/img/Portfolio Cards=2.png"
    },
    {
      image: "/img/Portfolio Cards=3.png"
    },
    {
      image: "/img/Portfolio Cards=4.png"
    },
    {
      image: "/img/Portfolio Cards=5.png"
    },
    {
      image: "/img/Portfolio Cards=6.png"
    },
  ]
  return (
    <div className="relative bg-white w-full h-[10106px] overflow-hidden text-center text-5xl text-primary-purple-05 font-body-1-light">
      <div >
        {form ? <PopupComponent onClose={() => setForm(!form)}>
          <BlurLayer />

        </PopupComponent> : null}

      </div>
      <div className="relative">
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[1261.67px] overflow-hidden opacity-[0.14]"
          alt=""
          src="/pattern.svg"
        />
        <div className="absolute top-[0px] left-[50%] mainPage flex flex-col items-start justify-start">
          <div className="flex flex-col pt-6 px-20 pb-[100px] items-center justify-center relative gap-[84px] text-left text-lg text-greys-grey-04 font-button-1-semibold">
            <div className="w-[1280px] flex flex-row items-center justify-start z-[0]">
              <img
                className="relative w-[156px] h-[60px] object-cover"
                alt=""
                src="/berkeley-consulting-logo-02@2x.png"
              />
              <div className="flex-1 flex flex-row items-center justify-end gap-[74px] font-[General Sans]" style={{ fontFamily: "General Sans" }}>
                <div className={`relative ${active === 0 ? "text-greys-grey-08" : ""} hover:text-greys-grey-08 active:text-greys-grey-08 focus:text-greys-grey-08 cursor-pointer  tracking-[0.04em] leading-[28px] font-medium default:text-greys-grey-08 font-[General Sans]`} onClick={() => setActive(0)}>
                  {t("navBar.title1")}
                </div>
                <div className={`relative  ${active === 1 ? "text-greys-grey-08" : ""}  hover:text-greys-grey-08 active:text-greys-grey-08 focus:text-greys-grey-08 cursor-pointer tracking-[0.02em] leading-[24px]`} onClick={() => setActive(1)}>
                  {t("navBar.title2")}
                </div>
                <div className={`relative  ${active === 2 ? "text-greys-grey-08" : ""} hover:text-greys-grey-08 active:text-greys-grey-08 focus:text-greys-grey-08 cursor-pointer tracking-[0.02em] leading-[24px]`} onClick={() => setActive(2)}>
                  {t("navBar.title3")}
                </div>
                <div className={`relative ${active === 3 ? "text-greys-grey-08" : ""}  hover:text-greys-grey-08 active:text-greys-grey-08 focus:text-greys-grey-08 cursor-pointer tracking-[0.02em] leading-[24px]`} onClick={() => setActive(3)}>
                  {t("navBar.title4")}
                </div>
                <div className={`relative ${active === 4 ? "text-greys-grey-08" : ""}  hover:text-greys-grey-08 active:text-greys-grey-08 focus:text-greys-grey-08 cursor-pointer tracking-[0.02em] leading-[24px]`} onClick={() => setActive(4)}>
                  {t("navBar.title5")}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[54px] z-[1] text-center text-53xl text-greys-grey-10">
              <div className="flex flex-col items-center justify-start relative gap-[24px]">
                <div className="self-stretch relative leading-[88px] font-medium whitespace-pre-wrap z-[0]">
                  <p className="m-0">{t("landingPage.title1")}</p>
                  <p className="m-0">{t("landingPage.title2")}</p>
                </div>
                <div className="relative text-5xl leading-[32px] font-body-1-light text-greys-grey-04 flex items-end justify-center w-[942px] z-[1]">
                  {t("landingPage.subTitle")}
                </div>
                <img
                  className="absolute my-0 mx-[!important] top-[70.58px] left-[389.2px] w-[209.71px] h-[17.66px] z-[2]"
                  alt=""
                  src="/vector-353.svg"
                />
                <img
                  className="absolute my-0 mx-[!important] top-[76.15px] left-[390.6px] w-[208.32px] h-[19.04px] z-[3]"
                  alt=""
                  src="/vector-354.svg"
                />
              </div>
              <div className="rounded-35xl bg-primary-purple-05 overflow-hidden flex flex-row py-4 px-[30px] items-center justify-start gap-[14px] text-lg text-white">
                <div className="relative tracking-[0.02em] leading-[24px] font-medium cursor-pointer" onClick={() => setForm(true)} >
                  {t("landingPage.button")}
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/arrow.svg"
                />
              </div>
            </div>
            <div className="my-0 mx-[!important] absolute top-[194px] left-[270px] rounded bg-greys-grey-01 flex flex-row p-3.5 items-center justify-center z-[2]">
              <img
                className="relative w-[54px] h-[54px] overflow-hidden shrink-0"
                alt=""
                src="/javascript.svg"
              />
            </div>
            <div className="my-0 mx-[!important] absolute top-[244px] left-[1133px] rounded bg-greys-grey-01 flex flex-row p-3.5 items-center justify-center z-[3]">
              <img
                className="relative w-[54px] h-[54px] overflow-hidden shrink-0"
                alt=""
                src="/html.svg"
              />
            </div>
            <div className="my-0 mx-[!important] absolute top-[434px] left-[1223px] rounded bg-greys-grey-01 flex flex-row p-3.5 items-center justify-center z-[4]">
              <img
                className="relative w-[54px] h-[54px] overflow-hidden shrink-0"
                alt=""
                src="/react.svg"
              />
            </div>
            <div className="my-0 mx-[!important] absolute top-[450px] left-[139px] rounded bg-greys-grey-01 flex flex-row p-3.5 items-center justify-center z-[5]">
              <img
                className="relative w-[54px] h-[54px] overflow-hidden shrink-0"
                alt=""
                src="/css3.svg"
              />
            </div>
          </div>
          <div className="overflow-hidden flex flex-row py-[100px] px-[50px] items-start justify-start">
            <div className="flex flex-col items-center justify-start gap-[54px]">
              <div className="flex flex-col items-center justify-start gap-[84px]">
                <div className="relative inline-block w-[528px]">
                  <p className="m-0 leading-[32px]">{t("landingPage.whyChoose.mainTitle")}</p>
                  <p className="m-0 text-37xl leading-[64px] font-medium font-heading-3-medium text-greys-grey-08">
                    {t("landingPage.whyChoose.title")}
                  </p>
                </div>
                <div className="relative w-[1340px] h-[799px] text-left text-greys-grey-09">
                  <img
                    className="absolute top-[calc(50%_-_265.5px)] left-[calc(50%_-_149px)] w-[298px] h-[665px] object-cover"
                    alt=""
                    src="/manhavingstressduetowork-2@2x.png"
                  />
                  <div className="absolute top-[179px] left-[824px] flex flex-col items-start justify-start gap-[10px]">
                    <img
                      className="relative rounded w-[518px] h-[130px] z-[0]"
                      alt=""
                      src="/union.svg"
                    />
                    <div className="my-0 mx-[!important] absolute top-[24px] left-[24px] flex flex-row items-center justify-start gap-[24px] z-[1]">
                      <div className="relative w-20 h-20">
                        <img
                          className="absolute h-[105%] w-[105%] top-[-2.5%] right-[-2.5%] bottom-[-2.5%] left-[-2.5%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/ellipse-246.svg"
                        />
                        <div className="absolute top-[calc(50%_-_31px)] left-[calc(50%_-_31px)] rounded-59xl w-[62px] h-[62px] overflow-hidden flex flex-row p-3.5 box-border items-center justify-center">
                          <div className="relative w-[34px] h-[34px]">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                              <img
                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                                alt=""
                                src="/bitmap@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative leading-[32px] font-medium flex items-center w-[364px] shrink-0">
                        {t("landingPage.whyChoose.option1")}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[732px] flex flex-col items-start justify-start gap-[10px]">
                    <img
                      className="relative rounded w-[518px] h-[136.28px] z-[0]"
                      alt=""
                      src="/union1.svg"
                    />
                    <div className="my-0 mx-[!important] absolute top-[24px] left-[24px] flex flex-row items-center justify-start gap-[24px] z-[1]">
                      <div className="relative w-20 h-20">
                        <img
                          className="absolute h-[102.5%] w-[102.5%] top-[-1.25%] right-[-1.25%] bottom-[-1.25%] left-[-1.25%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/ellipse-2461.svg"
                        />
                        <div className="absolute top-[calc(50%_-_31px)] left-[calc(50%_-_31px)] rounded-59xl w-[62px] h-[62px] overflow-hidden flex flex-row p-3.5 box-border items-center justify-center">
                          <div className="relative w-[34px] h-[34px]">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                              <img
                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                                alt=""
                                src="/bitmap@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative leading-[32px] font-medium flex items-center w-[364px] shrink-0">
                        {t("landingPage.whyChoose.option2")}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[179px] left-[0px] flex flex-col items-start justify-start gap-[10px]">
                    <img
                      className="relative rounded w-[534.46px] h-[130px] z-[0]"
                      alt=""
                      src="/union2.svg"
                    />
                    <div className="my-0 mx-[!important] absolute top-[24px] left-[24px] flex flex-row items-center justify-start gap-[24px] z-[1]">
                      <div className="relative w-20 h-20">
                        <img
                          className="absolute h-[102.5%] w-[102.5%] top-[-1.25%] right-[-1.25%] bottom-[-1.25%] left-[-1.25%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/ellipse-2461.svg"
                        />
                        <div className="absolute top-[calc(50%_-_31px)] left-[calc(50%_-_31px)] rounded-59xl w-[62px] h-[62px] overflow-hidden flex flex-row p-3.5 box-border items-center justify-center">
                          <div className="relative w-[34px] h-[34px]">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                              <img
                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                                alt=""
                                src="/bitmap@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative leading-[32px] font-medium flex items-center w-[364px] shrink-0">
                        {t("landingPage.whyChoose.option3")}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[92px] flex flex-col items-start justify-start gap-[10px]">
                    <img
                      className="relative rounded w-[518px] h-[140.28px] z-[0]"
                      alt=""
                      src="/union3.svg"
                    />
                    <div className="my-0 mx-[!important] absolute top-[24px] left-[24px] flex flex-row items-center justify-start gap-[24px] z-[1]">
                      <div className="relative w-20 h-20">
                        <img
                          className="absolute h-[102.5%] w-[102.5%] top-[-1.25%] right-[-1.25%] bottom-[-1.25%] left-[-1.25%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/ellipse-2461.svg"
                        />
                        <div className="absolute top-[calc(50%_-_31px)] left-[calc(50%_-_31px)] rounded-59xl w-[62px] h-[62px] overflow-hidden flex flex-row p-3.5 box-border items-center justify-center">
                          <div className="relative w-[34px] h-[34px]">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                              <img
                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                                alt=""
                                src="/bitmap@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative leading-[32px] font-medium flex items-center w-[364px] shrink-0">
                        {t("landingPage.whyChoose.option4")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1280px] flex flex-row items-start justify-start gap-[44px] text-left text-21xl text-greys-grey-08 font-button-1-semibold">
                <div className="flex-1 rounded-3xl h-[342px] flex flex-col p-6 box-border items-start justify-start gap-[54px]">
                  <div className="self-stretch flex-1 relative leading-[48px] font-medium">
                    {t("landingPage.solution1.title")}
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-5xl text-primary-purple-06 font-body-1-light">
                    <div className="rounded-61xl flex flex-row py-2 px-[34px] items-start justify-start border-[1px] border-solid border-primary-purple-06">
                      <div className="relative leading-[32px]">{t("landingPage.solution1.subTitle")}</div>
                    </div>
                    <div className="self-stretch relative text-[inherit] tracking-[0.02em] leading-[32px] font-inherit text-greys-grey-07">
                      <ul className="m-0 pl-6 text-lg">
                        <li className="mb-0">
                          {t("landingPage.solution1.text1")}
                        </li>
                        <li>
                          {t("landingPage.solution1.text2")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-3xl h-[342px] flex flex-col p-6 box-border items-start justify-start gap-[54px]">
                  <div className="self-stretch flex-1 relative leading-[48px] font-medium flex items-center">
                    {t("landingPage.solution2.title")}
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-5xl text-primary-purple-06 font-body-1-light">
                    <div className="rounded-61xl flex flex-row py-2 px-[34px] items-start justify-start border-[1px] border-solid border-primary-purple-06">
                      <div className="relative leading-[32px]">{t("landingPage.solution2.subTitle")}</div>
                    </div>
                    <div className="self-stretch relative text-[inherit] tracking-[0.02em] leading-[32px] font-inherit text-greys-grey-07">
                      <ul className="m-0 pl-6">
                        <li className="mb-0">
                          {t("landingPage.solution2.text1")}
                        </li>
                        <li>
                          {t("landingPage.solution2.text2")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-[100px] px-20 items-center justify-start">
            <div className="w-[1280px] flex flex-col items-center justify-start gap-[84px]">
              <div className="overflow-hidden flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative leading-[32px]">
                  {t("landingPage.anythingWant.mainTitle")}
                </div>
                <div className="relative text-29xl leading-[56px] font-medium font-button-1-semibold text-greys-grey-08 text-left">
                  {" "}
                  {t("landingPage.anythingWant.title")}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[44px] text-13xl text-greys-grey-07 font-button-1-semibold">
                <div className="self-stretch flex-1 rounded-sm bg-greys-grey-01 overflow-hidden flex flex-col py-11 px-6 items-center justify-start gap-[36px]">
                  <div className="rounded-70xl bg-primary-purple-03 w-[140px] h-[140px] overflow-hidden shrink-0 flex flex-row items-center justify-start relative">
                    <img
                      className="absolute my-0 mx-[!important] top-[calc(50%_-_47px)] left-[calc(50%_-_47px)] w-[94px] h-[94px] object-cover z-[0]"
                      alt=""
                      src="/planning-1@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px]">
                    <div className="self-stretch relative leading-[48px] font-medium">
                      {t("landingPage.anythingWant.card1.title")}
                    </div>
                    <div className="self-stretch flex-1 relative text-base leading-[24px] text-greys-grey-05">
                      {t("landingPage.anythingWant.card1.text")}
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-sm bg-greys-grey-09 h-[456px] overflow-hidden flex flex-col py-11 px-6 box-border items-center justify-start gap-[36px] text-greys-grey-01">
                  <div className="rounded-70xl bg-primary-purple-01 w-[140px] h-[140px] overflow-hidden shrink-0 flex flex-row items-center justify-start relative">
                    <img
                      className="absolute my-0 mx-[!important] top-[calc(50%_-_47px)] left-[calc(50%_-_47px)] w-[94px] h-[94px] object-cover z-[0]"
                      alt=""
                      src="/designidea-1@2x.png"
                    />
                  </div>
                  <div className="self-stretch h-[252px] flex flex-col items-center justify-start gap-[24px]">
                    <div className="self-stretch relative leading-[48px] font-medium">
                      {t("landingPage.anythingWant.card2.title")}
                    </div>
                    <div className="self-stretch flex-1 relative text-base leading-[24px] text-greys-grey-03">
                      {t("landingPage.anythingWant.card2.text")}
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-sm bg-greys-grey-01 overflow-hidden flex flex-col py-11 px-6 items-center justify-start gap-[36px]">
                  <div className="rounded-70xl bg-primary-purple-03 w-[140px] h-[140px] overflow-hidden shrink-0 flex flex-row items-center justify-start relative">
                    <img
                      className="absolute my-0 mx-[!important] top-[calc(50%_-_47px)] left-[calc(50%_-_47px)] w-[94px] h-[94px] object-cover z-[0]"
                      alt=""
                      src="/codinglanguage-1@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
                    <div className="self-stretch relative leading-[48px] font-medium">
                      {t("landingPage.anythingWant.card3.title")}
                    </div>
                    <div className="self-stretch relative text-base leading-[24px] text-greys-grey-05">
                      {t("landingPage.anythingWant.card3.text")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[14px]">
              <img
                className="relative rounded-115xl w-[433.17px] h-[326.67px]"
                alt=""
                src="/rectangle.svg"
              />
              <img
                className="relative w-[5.33px] h-[326.67px]"
                alt=""
                src="/line-70.svg"
              />
              <img
                className="relative rounded-115xl w-[433.17px] h-[326.67px]"
                alt=""
                src="/rectangle1.svg"
              />
            </div>
            <div className="rounded-[94px] flex flex-row py-6 px-[84px] items-center justify-center text-21xl text-primary-purple-06 font-button-1-semibold border-[1px] border-solid border-greys-grey-06">
              <div className="relative leading-[56px]">
                <p className="m-0">
                  <b>{t("landingPage.anythingWant.text1")}</b>
                </p>
                <p className="m-0 text-greys-grey-06">
                  {t("landingPage.anythingWant.text2")}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[1440px] overflow-hidden flex flex-col py-[100px] px-20 box-border items-start justify-center gap-[84px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
              <div className="self-stretch relative leading-[32px]">
                {t("landingPage.developmentCost.mainTitle")}
              </div>
              <div className="self-stretch relative text-29xl leading-[56px] font-medium font-button-1-semibold text-greys-grey-08">
                {t("landingPage.developmentCost.title")}
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start text-21xl text-greys-grey-01 font-button-1-semibold">
              <div className="relative w-[1280px] h-[540px] overflow-hidden shrink-0">
                <div className="absolute top-[0px] left-[0px] rounded-sm bg-greys-grey-01 w-[1280px] h-[540px] opacity-[0.64]" />
                <div className="absolute top-[154px] left-[84px] rounded-t-lg rounded-b-none bg-primary-purple-08 h-[386px] flex flex-col pt-11 px-[34px] pb-0 box-border items-center justify-start gap-[44px]">
                  <div className="relative leading-[48px] font-medium">{t("landingPage.wage")}</div>
                  <div className="rounded-[62px] bg-greys-grey-01 flex flex-col p-2.5 items-center justify-center text-primary-purple-08">
                    <b className="relative leading-[48px]">+</b>
                  </div>
                  <div className="relative leading-[48px] font-medium">{t("landingPage.infra")}</div>
                </div>
                <div className="absolute top-[294px] left-[365px] rounded-t-lg rounded-b-none bg-primary-purple-04 w-[167px] h-[246px] flex flex-col pt-11 px-[34px] pb-0 box-border items-center justify-start">
                  <div className="relative leading-[48px] font-medium flex items-center justify-center w-[124px]">
                    {t("landingPage.team")}
                  </div>
                </div>
                <img
                  className="absolute top-[135.92px] left-[254px] w-[161.11px] h-[55.35px]"
                  alt=""
                  src="/ellipse-1702.svg"
                />
                <div className="absolute top-[144px] left-[716px] w-[486px] overflow-hidden flex flex-col py-0 pr-12 pl-0 box-border items-start justify-start gap-[32px] text-left text-greys-grey-08">
                  <div className="self-stretch relative leading-[48px] font-medium">
                    {t("landingPage.developmentCost.subTitle")}
                  </div>
                  <div className="self-stretch relative text-[inherit] leading-[32px] font-inherit text-greys-grey-05">
                    <ul className="m-0 pl-6 text-lg">
                      <li className="mb-0">
                        <span className="text-greys-grey-05">{t("landingPage.developmentCost.text1.subText1")}</span>
                        <span className="text-greys-grey-08">{t("landingPage.developmentCost.text1.subText2")}</span>
                        <span> {t("landingPage.developmentCost.text1.subText3")}</span>
                      </li>
                      <li>
                        <span>{t("landingPage.developmentCost.text2.subText1")}</span>
                        <span className="text-greys-grey-08">{t("landingPage.developmentCost.text2.subText2")}</span>
                        <span className="text-greys-grey-05">
                          {" "}
                          {t("landingPage.developmentCost.text2.subText3")}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <b className="absolute top-[200px] left-[402px] text-13xl leading-[40px] flex text-primary-purple-08 items-center justify-center w-[92px]">
                  {t("landingPage.save")}
                </b>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-[100px] px-20 items-start justify-start gap-[84px]">
            <div className="self-stretch relative">
              <p className="m-0 leading-[32px]">{t("landingPage.techStack.mainTitle")}</p>
              <p className="m-0 text-29xl leading-[56px] font-medium font-button-1-semibold text-greys-grey-08">
                {t("landingPage.techStack.title")}
              </p>
            </div>
            <div className="w-[1280px] flex flex-col items-start justify-start gap-[44px] text-left text-13xl text-greys-grey-09 font-button-1-semibold">
              <div className="self-stretch flex flex-row items-start justify-start gap-[60px]">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-start justify-start gap-[12px]">
                      <img
                        className="relative w-12 h-12 overflow-hidden shrink-0"
                        alt=""
                        src="/chat-1.svg"
                      />
                      <div className="relative leading-[48px] font-medium">
                        <p className="m-0">{t("landingPage.techStack.card1.title1")}</p>
                        <p className="m-0">{t("landingPage.techStack.card1.title2")}</p>
                      </div>
                    </div>
                    <div className="relative text-lg tracking-[0.02em] leading-[24px] text-greys-grey-07 inline-block w-[361px] opacity-[0.5]">
                      {t("landingPage.techStack.card1.text")}
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-start justify-start gap-[12px]">
                      <img
                        className="relative w-12 h-12 overflow-hidden shrink-0"
                        alt=""
                        src="/chat-11.svg"
                      />
                      <div className="relative leading-[48px] font-medium">
                        <p className="m-0">{t("landingPage.techStack.card2.title1")}</p>
                        <p className="m-0">{t("landingPage.techStack.card2.title2")}</p>
                      </div>
                    </div>
                    <div className="relative text-lg tracking-[0.02em] leading-[24px] text-greys-grey-07 inline-block w-[358px] opacity-[0.5]">
                      {t("landingPage.techStack.card2.text")}
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-start justify-start gap-[12px]">
                      <img
                        className="relative w-12 h-12 overflow-hidden shrink-0"
                        alt=""
                        src="/chat-12.svg"
                      />
                      <div className="relative leading-[48px] font-medium inline-block w-[395px]">
                        <p className="m-0">{t("landingPage.techStack.card3.title1")}</p>
                        <p className="m-0">{t("landingPage.techStack.card3.title2")}</p>
                      </div>
                    </div>
                    <div className="relative text-lg tracking-[0.02em] leading-[24px] text-greys-grey-07 inline-block w-[364px] opacity-[0.5]">
                      {t("landingPage.techStack.card3.text")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[60px]">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-start justify-start gap-[12px]">
                      <img
                        className="relative w-12 h-12 overflow-hidden shrink-0"
                        alt=""
                        src="/chat-1.svg"
                      />
                      <div className="relative leading-[48px] font-medium">
                        <p className="m-0">{t("landingPage.techStack.card4.title1")}</p>
                        <p className="m-0">{t("landingPage.techStack.card4.title2")}</p>
                      </div>
                    </div>
                    <div className="relative text-lg tracking-[0.02em] leading-[24px] text-greys-grey-07 inline-block w-[361px] opacity-[0.5]">
                      {t("landingPage.techStack.card4.text")}
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-start justify-start gap-[12px]">
                      <img
                        className="relative w-12 h-12 overflow-hidden shrink-0"
                        alt=""
                        src="/chat-11.svg"
                      />
                      <div className="relative leading-[48px] font-medium">
                        <p className="m-0">{t("landingPage.techStack.card5.title1")}</p>
                        <p className="m-0">{t("landingPage.techStack.card5.title2")}</p>
                      </div>
                    </div>
                    <div className="relative text-lg tracking-[0.02em] leading-[24px] text-greys-grey-07 inline-block w-[358px] opacity-[0.5]">
                      {t("landingPage.techStack.card5.text")}
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-start justify-start gap-[12px]">
                      <img
                        className="relative w-12 h-12 overflow-hidden shrink-0"
                        alt=""
                        src="/chat-12.svg"
                      />
                      <div className="relative leading-[48px] font-medium inline-block w-[395px]">
                        <p className="m-0">{t("landingPage.techStack.card6.title1")}</p>
                        <p className="m-0">{t("landingPage.techStack.card6.title2")}</p>
                      </div>
                    </div>
                    <div className="relative text-lg tracking-[0.02em] leading-[24px] text-greys-grey-07 inline-block w-[364px] opacity-[0.5]">
                      {t("landingPage.techStack.card6.text")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-[100px] px-20 items-center justify-start gap-[84px] text-primary-purple-06">
            <div className="relative flex items-center w-[749px]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0 leading-[32px]">{t("landingPage.devProcess.mainTitle")}</p>
                <p className="m-0 text-29xl leading-[56px] font-medium font-button-1-semibold text-greys-grey-08">
                  {t("landingPage.devProcess.title")}
                </p>
              </span>
            </div>
            <div className="w-[1280px] flex flex-row items-start justify-center gap-[34px] text-greys-grey-08">
              <div className="flex-1 rounded-sm box-border h-[414px] flex flex-col pt-[54px] px-6 pb-6 items-center justify-start relative gap-[14px] border-[1px] border-solid border-greys-grey-04">
                <div className="self-stretch flex flex-row items-start justify-center z-[0]">
                  <img
                    className="relative w-12 h-12 overflow-hidden shrink-0"
                    alt=""
                    src="/consultation.svg"
                  />
                </div>
                <div className="self-stretch relative leading-[32px] z-[1]">
                  {t("landingPage.devProcess.card1.title")}
                </div>
                <div className="self-stretch relative text-[inherit] leading-[34px] font-inherit text-greys-grey-05 text-left z-[2]">
                  <ul className="m-0 pl-[21px]">
                    <li className="mb-0 text-base">{t("landingPage.devProcess.card1.text1")}</li>
                    <li className="mb-0 text-base">{t("landingPage.devProcess.card1.text2")}</li>
                    <li className="mb-0 text-base">{t("landingPage.devProcess.card1.text3")}</li>
                    <li className="mb-0 text-base">{t("landingPage.devProcess.card1.text4")}</li>
                    <li className="text-base">{t("landingPage.devProcess.card1.text5")}</li>
                  </ul>
                </div>
                <div className="my-0 mx-[!important] absolute top-[-24px] left-[calc(50%_-_27.25px)] flex flex-row items-start justify-start gap-[10px] z-[3] text-white">
                  <div className="relative rounded-[50%] bg-primary-purple-06 w-[54px] h-[54px] z-[0]" />
                  <div className="absolute my-0 mx-[!important] top-[12px] left-[22px] leading-[32px] inline-block w-[9px] h-[30px] shrink-0 z-[1]">
                    1
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-sm box-border h-[414px] flex flex-col pt-[54px] px-6 pb-6 items-center justify-start relative gap-[14px] border-[1px] border-solid border-greys-grey-04">
                <div className="self-stretch flex flex-row items-start justify-center z-[0]">
                  <img
                    className="relative w-12 h-12 overflow-hidden shrink-0"
                    alt=""
                    src="/match.svg"
                  />
                </div>
                <div className="self-stretch relative leading-[32px] z-[1]">
                  {t("landingPage.devProcess.card2.title")}
                </div>
                <div className="self-stretch relative text-[inherit] leading-[34px] font-inherit text-greys-grey-05 text-left z-[2]">
                  <ul className="m-0 pl-[21px]">
                    <li className="mb-0 text-base">
                      {t("landingPage.devProcess.card2.text1")}
                    </li>
                    <li className="mb-0 text-base"> {t("landingPage.devProcess.card2.text2")}</li>
                    <li className="mb-0 text-base">
                      {t("landingPage.devProcess.card2.text3")}
                    </li>
                    <li className="text-base">{t("landingPage.devProcess.card2.text4")}</li>
                  </ul>
                </div>
                <div className="my-0 mx-[!important] absolute top-[-24px] left-[calc(50%_-_26.75px)] flex flex-row items-start justify-start gap-[10px] z-[3] text-white">
                  <div className="relative rounded-[50%] bg-primary-purple-06 w-[54px] h-[54px] z-[0]" />
                  <div className="absolute my-0 mx-[!important] top-[12px] left-[22px] leading-[32px] inline-block w-[9px] h-[30px] shrink-0 z-[1]">
                    2
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-sm box-border h-[414px] flex flex-col pt-[54px] px-6 pb-6 items-center justify-start relative gap-[14px] border-[1px] border-solid border-greys-grey-04">
                <div className="self-stretch flex flex-row items-center justify-center z-[0]">
                  <img
                    className="relative w-12 h-12 overflow-hidden shrink-0"
                    alt=""
                    src="/htmlcoding.svg"
                  />
                </div>
                <div className="self-stretch relative leading-[32px] z-[1]">
                  {t("landingPage.devProcess.card3.title")}
                </div>
                <div className="self-stretch relative text-[inherit] leading-[34px] font-inherit text-greys-grey-05 text-left z-[2]">
                  <ul className="m-0 pl-[21px]">
                    <li className="mb-0 text-base">{t("landingPage.devProcess.card3.text1")}</li>
                    <li className="mb-0 text-base">{t("landingPage.devProcess.card3.text2")}</li>
                    <li className="mb-0 text-base">{t("landingPage.devProcess.card3.text3")}</li>
                    <li className="text-base">{t("landingPage.devProcess.card3.text4")}</li>
                  </ul>
                </div>
                <div className="my-0 mx-[!important] absolute top-[-24px] left-[calc(50%_-_27.25px)] flex flex-row items-start justify-start gap-[10px] z-[3] text-white">
                  <div className="relative rounded-[50%] bg-primary-purple-06 w-[54px] h-[54px] z-[0]" />
                  <div className="absolute my-0 mx-[!important] top-[12px] left-[22px] leading-[32px] inline-block w-[9px] h-[30px] shrink-0 z-[1]">
                    3
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-sm box-border h-[414px] flex flex-col pt-[54px] px-6 pb-6 items-center justify-start relative gap-[14px] border-[1px] border-solid border-greys-grey-04">
                <div className="self-stretch flex flex-row items-center justify-center z-[0]">
                  <img
                    className="relative w-12 h-12 overflow-hidden shrink-0"
                    alt=""
                    src="/maintenance.svg"
                  />
                </div>
                <div className="self-stretch relative leading-[32px] z-[1]">
                  {t("landingPage.devProcess.card4.title")}
                </div>
                <div className="self-stretch relative text-[inherit] leading-[34px] font-inherit text-greys-grey-05 text-left z-[2]">
                  <ul className="m-0 pl-[21px]">
                    <li className="mb-0 text-base">{t("landingPage.devProcess.card4.text1")}</li>
                    <li className="mb-0 text-base">{t("landingPage.devProcess.card4.text2")}</li>
                    <li className="mb-0 text-base">{t("landingPage.devProcess.card4.text3")}</li>
                    <li className="mb-0 text-base">{t("landingPage.devProcess.card4.text4")}</li>
                    <li className="text-base">{t("landingPage.devProcess.card4.text5")}</li>
                  </ul>
                </div>
                <div className="my-0 mx-[!important] absolute top-[-24px] left-[calc(50%_-_26.75px)] flex flex-row items-start justify-start gap-[10px] z-[3] text-white">
                  <div className="relative rounded-[50%] bg-primary-purple-06 w-[54px] h-[54px] z-[0]" />
                  <div className="absolute my-0 mx-[!important] top-[12px] left-[22px] leading-[32px] inline-block w-[9px] h-[30px] shrink-0 z-[1]">
                    4
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container pt-[100px]">
            <div className="self-stretch relative leading-[56px] font-medium text-29xl text-black font-button-1-semibold">
              {t("landingPage.reviews.title")}
            </div>
            <div className="grid lg:grid-cols-1 grid-cols-1 gap-[38px] text-5xl main-cards py-[100px] corefeature-card-slider">
              <Slider {...settings}>
                {
                  reviews.map((item: any) => {
                    return (
                      <div>
                        <div className={`rounded-[20px] gap-[24px] w-[404px]  rounded-xl bg-greys-grey-01 h-[328px] hover:bg-slate-200 max-w-[100%] flex flex-col p-[30px] box-border  justify-start mb-[2rem] `}>


                          <div className="flex flex-row items-center justify-start gap-[20px] ">
                            <div className="flex flex-row items-center justify-start">
                              <img
                                className="relative rounded-11xl w-[60px] h-[60px] object-cover"
                                alt=""
                                src={item?.img1}
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center gap-[4px]">
                              <b className="relative text-[#1D1E25] tracking-[0.02em] leading-[24px]">
                                {item.userName1}
                              </b>
                              <div className="relative text-xs tracking-[0.02em] leading-[16px] text-grey">
                                {item.role1}
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex-1 text-left relative text-base leading-[24px] text-[#1D1E25] font-medium">
                            {item.text1}
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[6px]">
                            <img
                              className="relative rounded-12xs-5 w-5 h-5"
                              alt=""
                              src="/star-1.svg"
                            />
                            <img
                              className="relative rounded-12xs-5 w-5 h-5"
                              alt=""
                              src="/star-1.svg"
                            />
                            <img
                              className="relative rounded-12xs-5 w-5 h-5"
                              alt=""
                              src="/star-1.svg"
                            />
                            <img
                              className="relative rounded-12xs-5 w-5 h-5"
                              alt=""
                              src="/star-1.svg"
                            />
                            <img
                              className="relative rounded-12xs-5 w-5 h-5"
                              alt=""
                              src="/star-1.svg"
                            />
                          </div>
                        </div>
                        <div className={`rounded-[20px] w-[404px] gap-[24px] rounded-xl bg-greys-grey-01 h-[328px] hover:bg-slate-200  max-w-[100%] flex flex-col p-[30px] box-border  justify-start `}>

                          <div className="flex flex-row items-center justify-start gap-[20px] ">
                            <div className="flex flex-row items-center justify-start">
                              <img
                                className="relative rounded-11xl w-[60px] h-[60px] object-cover"
                                alt=""
                                src={item?.img2}
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center gap-[4px]">
                              <b className="relative text-[#1D1E25] tracking-[0.02em] leading-[24px]">
                                {item.userName2}
                              </b>
                              <div className="relative text-xs tracking-[0.02em] leading-[16px] text-grey">
                                {item.role2}
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex-1 relative text-left text-[#1D1E25] text-base leading-[24px] font-medium">
                            {item.text2}
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[6px]">
                            <img
                              className="relative rounded-12xs-5 w-5 h-5"
                              alt=""
                              src="/star-1.svg"
                            />
                            <img
                              className="relative rounded-12xs-5 w-5 h-5"
                              alt=""
                              src="/star-1.svg"
                            />
                            <img
                              className="relative rounded-12xs-5 w-5 h-5"
                              alt=""
                              src="/star-1.svg"
                            />
                            <img
                              className="relative rounded-12xs-5 w-5 h-5"
                              alt=""
                              src="/star-1.svg"
                            />
                            <img
                              className="relative rounded-12xs-5 w-5 h-5"
                              alt=""
                              src="/star-1.svg"
                            />
                          </div>
                        </div>

                      </div>
                    )
                  })
                }
              </Slider>
            </div>
          </div>

          <div className="w-[1440px] flex flex-col pt-[100px] px-0 pb-0 box-border items-center justify-start gap-[84px] text-29xl text-black font-button-1-semibold">



            <div className="w-[1440px] overflow-hidden flex flex-col py-[100px] px-20 box-border items-center justify-center gap-[84px] text-37xl text-greys-grey-09 font-heading-3-medium">
              <div className="w-[1110px] overflow-hidden flex flex-col items-start justify-start">
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[64px] font-medium">
                    {t("landingPage.portfolio.title")}
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center gap-[24px]">
                <img className="relative w-11 h-11" alt="" src="/arrow1.svg" onClick={() => previous()} />
                <div className="container">
                  <Slider {...settingsPortfolio} ref={reviewsSlider}>
                    {
                      portFolioImages.map(item => {
                        return <div className="rounded-3xl  shadow-[0px_14px_24px_rgba(90,_90,_90,_0.14)] w-[1144px] h-[794px] overflow-hidden shrink-0 flex flex-row items-end justify-start relative gap-[70px]">
                          <img src={item?.image} style={{ width: "inherit", height: "inherit" }} className="rounded-[3%]" />

                        </div>
                      })
                    }


                  </Slider>

                </div>
                <img className="relative w-11 h-11" alt="" src="/arrow2.svg" onClick={() => next()} />
              </div>
            </div>
          </div>
          <div className="bg-white w-[1440px] flex flex-row py-[100px] px-20 box-border items-start justify-start gap-[30px] text-left text-45xl text-greys-grey-08 font-button-1-semibold">
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
              <div className="overflow-hidden flex flex-col items-start justify-start">
                <div className="relative leading-[72px] font-medium inline-block w-[255px]">
                  {t("landingPage.clients.count")}
                </div>
                <div className="relative text-base leading-[24px] font-medium text-primary-purple-06 inline-block w-[255px]">
                  {t("landingPage.clients.text")}
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden h-0.5 shrink-0"
                alt=""
                src="/line.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
              <div className="overflow-hidden flex flex-col items-start justify-start">
                <div className="relative leading-[72px] font-medium inline-block w-[255px]">
                  {t("landingPage.projects.count")}
                </div>
                <div className="relative text-base leading-[24px] font-medium text-primary-purple-06 inline-block w-[255px]">
                  {t("landingPage.projects.text")}
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden h-0.5 shrink-0"
                alt=""
                src="/line1.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
              <div className="overflow-hidden flex flex-col items-start justify-start">
                <div className="relative leading-[72px] font-medium inline-block w-[255px]">
                  {t("landingPage.members.count")}
                </div>
                <div className="relative text-base leading-[24px] font-medium text-primary-purple-06 inline-block w-[255px]">
                  {t("landingPage.members.text")}
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden h-0.5 shrink-0"
                alt=""
                src="/line2.svg"
              />
            </div>
          </div>
          <div className="bg-white w-[1440px] overflow-hidden flex flex-col py-[100px] px-0 box-border items-center justify-start gap-[84px] text-primary-purple-06">
            <div className="w-[1280px] flex flex-col py-0 px-8 box-border items-start justify-start">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="w-[768px] flex flex-col items-center justify-start gap-[6px]">
                  <div className="self-stretch relative leading-[32px]">
                    <span>{t("landingPage.faq.mainTitle")}</span>
                    {/* <span className="text-slategray">{` `}</span>
                    <span>Get in Touch</span> */}
                  </div>
                  <div className="self-stretch relative text-29xl leading-[56px] font-medium font-button-1-semibold text-gray-900">
                    {t("landingPage.faq.title")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1240px] flex flex-col py-0 px-8 box-border items-center justify-start text-left text-lg text-greys-grey-08 font-button-1-semibold">
              <div className="w-[1240px] flex flex-col items-start justify-start gap-[20px] divider-y">
                <FAQComponent />

              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col pt-[200px] px-0 pb-0 items-center justify-start relative text-left text-base text-white font-button-1-semibold">
            <div className="relative bg-greys-grey-09 w-[1440px] h-[480px] z-[0]" />
            <div className="my-0 mx-[!important] absolute top-[384px] left-[80px] flex flex-row items-start justify-start gap-[214px] z-[1]">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative leading-[24px] inline-block w-[296px] opacity-[0.8]">{t("footer.text")}</div>
                  <img
                    className="relative w-[136px] h-[50px] object-cover"
                    alt=""
                    src="/berkeleyconsulting-logo-02-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[72px] text-lg">
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <div className="relative tracking-[0.04em] leading-[28px] font-medium inline-block w-[92px] h-[26px] shrink-0">
                    {t("footer.company.title")}
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[16px] opacity-[0.8] text-base">
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.company.text1")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.company.text2")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.company.text3")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.company.text4")}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <div className="relative tracking-[0.04em] leading-[28px] font-medium inline-block w-[78px] h-[26px] shrink-0">
                    {t("footer.service.title")}
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[16px] opacity-[0.8] text-base">
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.service.text1")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.service.text2")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.service.text3")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.service.text4")}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <div className="relative tracking-[0.04em] leading-[28px] font-medium inline-block w-[74px] h-[26px] shrink-0">
                    {t("footer.support.title")}
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[16px] opacity-[0.8] text-base">
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.support.text1")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.support.text2")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.support.text3")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.support.text4")}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <div className="relative tracking-[0.04em] leading-[28px] font-medium inline-block w-[109px] h-[26px] shrink-0">
                    {t("footer.help.title")}
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[16px] opacity-[0.8] text-base">
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.help.text1")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.help.text2")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.help.text3")}
                    </div>
                    <div className="relative tracking-[0.02em] leading-[24px]">
                      {t("footer.help.text4")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-0 mx-[!important] absolute top-[100px] left-[80px] rounded-3xl bg-greys-grey-08 w-[1280px] overflow-hidden flex flex-col py-[60px] px-[120px] box-border items-center justify-center z-[2] text-13xl">
              <div className="flex flex-row items-center justify-center gap-[200px]">
                <div className="flex flex-col items-start justify-start">
                  <b className="relative leading-[40px] inline-block w-[555px]">
                    <p className="m-0">{t("footer.banner.title")}</p>
                    <p className="m-0">{t("footer.banner.text")} 😁</p>
                  </b>
                </div>
                <div className="rounded-35xl bg-greys-grey-01 overflow-hidden flex flex-row py-4 px-[30px] items-center justify-start gap-[14px] text-center text-lg text-greys-grey-10">
                  <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                    {t("footer.banner.button")}
                  </div>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/arrow3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  );
};
//getServeSideProps wors too
export const getStaticProps = async ({ locale }: any) => {
  await i18n?.reloadResources();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default BCLandingPage; 