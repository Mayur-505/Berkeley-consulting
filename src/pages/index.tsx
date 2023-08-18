"use client"
import type { NextPage } from "next";
import { useCallback, useReducer, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { BlurLayer } from "@/components/BlurLayer";
import PopupComponent from "@/components/PopupComponent";
import { useTranslation } from "react-i18next";
import Nav from "@/components/Nav/Nav";
import styles from './bcLanding.module.css'
import Footer from "@/components/Footer/Footer";
import { Grid } from "@mui/material";
import useWindowSize from '@/hooks/useWindowSize';

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
        slidesToShow: 1,
        slidesToScroll: 1
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
  const { t } = useTranslation()
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
    }
  ]
  return (
    <>
      {faqArray.map((faq, index) => {
        return <div key={index} className={`self-stretch flex flex-col items-center justify-start border-solid ${index === faqArray?.length - 1 ? "border-b-0" : "border-b-1"} lg:w-[900px] md:w-[600px] w-full border-gray-200 border-r-0 border-l-0 border-t-0`}>
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
  const { t } = useTranslation()
  const [form, setForm] = useState(false)
  const reviewsSlider = useRef<any>();
  const [isLanguageOpen, setLanguageOpen] = useState(false);
  const { width } = useWindowSize()

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
      img1: "/image-1@2x.png"
    },
    {
      userName1: t("landingPage.review4.userName"),
      role1: t("landingPage.review4.role"),
      text1: t("landingPage.review4.text"),
      img1: "/image-4@2x.png"
    },
    {
      userName1: t("landingPage.review2.userName"),
      role1: t("landingPage.review2.role"),
      text1: t("landingPage.review2.text"),
      img1: "/image-2@2x.png"
    },
    {
      userName1: t("landingPage.review5.userName"),
      role1: t("landingPage.review5.role"),
      text1: t("landingPage.review5.text"),
      img1: "/image-5@2x.png"
    },
    {
      userName1: t("landingPage.review3.userName"),
      role1: t("landingPage.review3.role"),
      text1: t("landingPage.review3.text"),
      img1: "/image-3@2x.png"
    },
    {
      userName1: t("landingPage.review6.userName"),
      role1: t("landingPage.review6.role"),
      text1: t("landingPage.review6.text"),
      img1: "/kennethschippervera-ztnqa4a7pqunsplash-1@2x.png"
    },
    {
      userName1: t("landingPage.review7.userName"),
      role1: t("landingPage.review7.role"),
      text1: t("landingPage.review7.text"),
      img1: "/image-3@2x.png"
    },
    {
      userName1: t("landingPage.review9.userName"),
      role1: t("landingPage.review9.role"),
      text1: t("landingPage.review9.text"),
      img1: "/kennethschippervera-ztnqa4a7pqunsplash-1@2x.png",
    },
    {
      userName1: t("landingPage.review8.userName"),
      role1: t("landingPage.review8.role"),
      text1: t("landingPage.review8.text"),
      img1: "/image-3@2x.png"
    },
    {
      userName1: t("landingPage.review10.userName"),
      role1: t("landingPage.review10.role"),
      text1: t("landingPage.review10.text"),
      img1: "/kennethschippervera-ztnqa4a7pqunsplash-1@2x.png"
    }
  ]

  const stars = Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      className="relative rounded-12xs-5 w-5 h-5"
      alt=""
      src="/star-1.svg"
    />
  ));

  const openLanguage = useCallback(() => {
    setLanguageOpen(!isLanguageOpen);
  }, [isLanguageOpen]);

  const closeLanguage = useCallback(() => {
    setLanguageOpen(false);
  }, []);

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
    }
  ]

  const tackStackArr = [{
    id: 1,
    title1: t("landingPage.techStack.card1.title1"),
    title2: t("landingPage.techStack.card1.title2"),
    content: t("landingPage.techStack.card1.text"),
    img: "/chat-1.svg"
  }, {
    id: 2,
    title1: t("landingPage.techStack.card2.title1"),
    title2: t("landingPage.techStack.card2.title2"),
    content: t("landingPage.techStack.card2.text"),
    img: "/chat-11.svg"
  }, {
    id: 3,
    title1: t("landingPage.techStack.card3.title1"),
    title2: t("landingPage.techStack.card3.title2"),
    content: t("landingPage.techStack.card3.text"),
    img: "/chat-12.svg"
  }, {
    id: 4,
    title1: t("landingPage.techStack.card4.title1"),
    title2: t("landingPage.techStack.card4.title2"),
    content: t("landingPage.techStack.card4.text"),
    img: "/chat-1.svg"
  }, {
    id: 5,
    title1: t("landingPage.techStack.card5.title1"),
    title2: t("landingPage.techStack.card5.title2"),
    content: t("landingPage.techStack.card5.text"),
    img: "/chat-11.svg"
  }, {
    id: 6,
    title1: t("landingPage.techStack.card6.title1"),
    title2: t("landingPage.techStack.card6.title2"),
    content: t("landingPage.techStack.card6.text"),
    img: "/chat-12.svg"
  }]

  const devProcessArr = [{
    id: 1,
    img: "/consultation.svg",
    title: t("landingPage.devProcess.card1.title"),
    title1: t("landingPage.devProcess.card1.text1"),
    title2: t("landingPage.devProcess.card1.text2"),
    title3: t("landingPage.devProcess.card1.text3"),
    title4: t("landingPage.devProcess.card1.text4"),
    title5: t("landingPage.devProcess.card1.text5")
  }, {
    id: 2,
    img: "/match.svg",
    title: t("landingPage.devProcess.card2.title"),
    title1: t("landingPage.devProcess.card2.text1"),
    title2: t("landingPage.devProcess.card2.text2"),
    title3: t("landingPage.devProcess.card2.text3"),
    title4: t("landingPage.devProcess.card2.text4")
  }, {
    id: 3,
    img: "/htmlcoding.svg",
    title: t("landingPage.devProcess.card3.title"),
    title1: t("landingPage.devProcess.card3.text1"),
    title2: t("landingPage.devProcess.card3.text2"),
    title3: t("landingPage.devProcess.card3.text3"),
    title4: t("landingPage.devProcess.card3.text4")
  }, {
    id: 4,
    img: "/maintenance.svg",
    title: t("landingPage.devProcess.card4.title"),
    title1: t("landingPage.devProcess.card4.text1"),
    title2: t("landingPage.devProcess.card4.text2"),
    title3: t("landingPage.devProcess.card4.text3"),
    title4: t("landingPage.devProcess.card4.text4"),
    title5: t("landingPage.devProcess.card4.text5")
  }]

  const counterArr = [{
    count: t("landingPage.clients.count"),
    text: t("landingPage.clients.text")
  }, {
    count: t("landingPage.projects.count"),
    text: t("landingPage.projects.text")
  }, {
    count: t("landingPage.members.count"),
    text: t("landingPage.members.text")
  }]

  const solutionArr = [{
    title: t("landingPage.solution1.title"),
    subtitle: t("landingPage.solution1.subTitle"),
    text1: t("landingPage.solution1.text1"),
    text2: t("landingPage.solution1.text2")
  }, {
    title: t("landingPage.solution2.title"),
    subtitle: t("landingPage.solution2.subTitle"),
    text1: t("landingPage.solution2.text1"),
    text2: t("landingPage.solution2.text2")
  }]

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    centerPadding: 20,
    rows: width > 767 ? 2 : 1,
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

  return (
    <>
      <div className={`bg-white font-general-sans`}>
        <div >
          {form ? <PopupComponent onClose={() => setForm(!form)}>
            <BlurLayer />
          </PopupComponent> : null}
        </div>
        <Nav />
        <div className="h-[550px]">
          <div className={`relative bg-white w-full h-[600px] text-center text-5xl text-primary-purple-05 ${styles.landingPageWrapper}`}>
            <div className={`absolute top-[50%] left-[50%] mainPage flex flex-col items-start justify-start ${styles.mainPage}`}>
              <div className="pt-6 pb-[100px] items-center max-w-[100%] text-left text-lg text-greys-grey-04">
                <div className="flex flex-col items-center justify-start gap-[54px] z-[1] text-center text-53xl text-greys-grey-10">
                  <div className="flex flex-col items-center justify-start relative gap-[24px]">
                    <div className="self-stretch relative leading-[88px] lineHeight77 font-medium fs-40 whitespace-pre-wrap z-[0]">
                      <p className="m-0">{t("landingPage.title1")}</p>
                      <p className="m-0">{t("landingPage.title2")}</p>
                    </div>
                    <div className="relative text-5xl fs-16 leading-[32px] text-greys-grey-04 flex items-end justify-center max-w-[942px] padding-lr-20 z-[1]">
                      {t("landingPage.subTitle")}
                    </div>
                    <img
                      className="absolute my-0 mx-[!important] top-[78.58px] left-[50%] w-[209.71px] h-[17.66px] z-[2]" style={{ transform: "translate(-50%, -50%)" }}
                      alt=""
                      src="/vector-353.svg"
                    />
                    <img
                      className="absolute my-0 mx-[!important] top-[76.15px] left-[50%] w-[208.32px] h-[19.04px] z-[3]" style={{ transform: "translate(-50%, -50%)" }}
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
                <div className={`my-0 mx-[!important] absolute top-[0] left-[-15px] rounded bg-greys-grey-01 flex flex-row p-3.5 items-center justify-center z-[2] ${styles.languageTitle1}`}>
                  <img
                    className="relative w-[54px] h-[54px] overflow-hidden shrink-0"
                    alt=""
                    src="/javascript.svg"
                  />
                </div>
                <div className={`my-0 mx-[!important] absolute top-[50px] right-[10px] rounded bg-greys-grey-01 flex flex-row p-3.5 items-center justify-center z-[3] ${styles.languageTitle2}`}>
                  <img
                    className="relative w-[54px] h-[54px] overflow-hidden shrink-0"
                    alt=""
                    src="/html.svg"
                  />
                </div>
                <div className={`my-0 mx-[!important] absolute bottom-[100px] right-[-108px] rounded bg-greys-grey-01 flex flex-row p-3.5 items-center justify-center z-[4] ${styles.languageTitle3}`}>
                  <img
                    className="relative w-[54px] h-[54px] overflow-hidden shrink-0"
                    alt=""
                    src="/react.svg"
                  />
                </div>
                <div className={`my-0 mx-[!important] absolute bottom-[100px] left-[-108px] rounded bg-greys-grey-01 flex flex-row p-3.5 items-center justify-center z-[5] ${styles.languageTitle4}`}>
                  <img
                    className="relative w-[54px] h-[54px] overflow-hidden shrink-0"
                    alt=""
                    src="/css3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-[100px] pt-[200px] items-start justify-start">
          <div className="flex flex-col items-center justify-start gap-[54px]">
            <div className="flex flex-col items-center justify-start gap-[84px]">
              <div className="text-primary-purple-06 text-center">
                <p className="m-0 leading-[32px] text-[24px] fs-18">{t("landingPage.whyChoose.mainTitle")}</p>
                <p className="m-0 text-37xl fs-32 leading-[64px] font-medium text-greys-grey-08">
                  {t("landingPage.whyChoose.title")}
                </p>
              </div>
              <div className={`relative max-w-[1340px] padding-lr-0 h-[799px] text-left text-greys-grey-09 ${styles.h1140px}`}>
                <img
                  className={`absolute top-[calc(50%_-_265.5px)] left-[calc(50%_-_149px)] w-[298px] h-[665px] object-cover ${styles.outSourcerImg}`}
                  alt=""
                  src="/manhavingstressduetowork-2@2x.png"
                />
                <div className={`absolute top-[179px] left-[133px] flex flex-col items-start justify-start gap-[10px] mx-[24px] ${styles.positionInherit}`}>
                  <img
                    className={`relative rounded max-w-[534.46px] h-[130px] z-[0] ${styles.mxW390}`}
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
                    <div className="relative leading-[32px] font-medium flex items-center max-w-[73%] pr-[15px] shrink-0">
                      {t("landingPage.whyChoose.option1")}
                    </div>
                  </div>
                </div>
                <div className={`absolute top-[0px] left-[50px] flex flex-col mx-[24px] ${styles.positionInherit}`}>
                  <img
                    className={`relative rounded max-w-[534.46px] h-[136.28px] z-[0] ${styles.mxW390}`}
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
                    <div className="relative leading-[32px] font-medium flex items-center max-w-[73%] pr-[15px] shrink-0">
                      {t("landingPage.whyChoose.option2")}
                    </div>
                  </div>
                </div>
                <div className={`absolute top-[179px] right-[110px] flex flex-col mx-[24px] ${styles.positionInherit}`}>
                  <img
                    className={`relative rounded max-w-[534.46px] h-[130px] z-[0] ${styles.mxW390}`}
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
                    <div className="relative leading-[32px] font-medium flex items-center max-w-[73%] pr-[15px] shrink-0">
                      {t("landingPage.whyChoose.option3")}
                    </div>
                  </div>
                </div>
                <div className={`absolute top-[0px] right-[30px] flex flex-col mx-[24px] ${styles.positionInherit}`}>
                  <img
                    className={`relative rounded max-w-[534.46px] h-[130px] z-[0] ${styles.mxW390}`}
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
                    <div className="relative leading-[32px] font-medium flex items-center max-w-[73%] pr-[15px] shrink-0">
                      {t("landingPage.whyChoose.option4")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container text-left text-21xl text-greys-grey-08">
              <Grid item xs={12} container spacing={4}>
                {solutionArr?.map((item: any, index: number) => {
                  return <Grid item lg={6} md={6} sm={12} xs={12} key={index}>
                    <div className="flex-1 rounded-3xl flex flex-col p-6 box-border items-start justify-start gap-[54px]">
                      <div className="self-stretch flex-1 relative leading-[48px] font-medium fs-32">
                        {item.title}
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-5xl text-primary-purple-06">
                        <div className="rounded-61xl flex flex-row py-2 px-[34px] items-start justify-start border-[1px] border-solid border-primary-purple-06">
                          <div className="relative leading-[32px] fs-18">{item.subtitle}</div>
                        </div>
                        <div className="self-stretch relative text-[inherit] tracking-[0.02em] leading-[32px] font-inherit text-greys-grey-07">
                          <ul className="m-0 pl-6 text-lg">
                            <li className="mb-0">
                              {item.text1}
                            </li>
                            <li>
                              {item.text2}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Grid>
                })}
              </Grid>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-[100px] items-center justify-start">
          <div className="flex flex-col items-center justify-start gap-[84px] text-primary-purple-06 text-center">
            <div className="items-center justify-start gap-[4px] px-[24px]">
              <div className="self-stretch relative leading-[32px] text-[24px] fs-18">
                {t("landingPage.anythingWant.mainTitle")}
              </div>
              <div className="relative text-29xl fs-32 leading-[56px] font-medium text-greys-grey-08">
                {" "}
                {t("landingPage.anythingWant.title")}
              </div>
            </div>
            <div className="self-stretch relative flex flex-row items-start justify-start gap-[44px] text-13xl text-greys-grey-07 px-[24px]">
              <Grid item xs={12} container spacing={4}>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div className={`self-stretch flex-1 rounded-sm bg-greys-grey-01 overflow-hidden flex flex-col py-11 px-6 items-center justify-start gap-[36px] h-[405px] ${styles.digitalSolutionsdiv1}`}>
                    <div className="rounded-70xl bg-primary-purple-03 w-[140px] h-[140px] overflow-hidden shrink-0 flex flex-row items-center justify-start relative">
                      <img
                        className="absolute my-0 mx-[!important] top-[calc(50%_-_47px)] left-[calc(50%_-_47px)] w-[94px] h-[94px] object-cover z-[0]"
                        alt=""
                        src="/planning-1@2x.png"
                      />
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] text-center">
                      <div className="self-stretch relative leading-[48px] font-medium">
                        {t("landingPage.anythingWant.card1.title")}
                      </div>
                      <div className="self-stretch flex-1 relative text-base leading-[24px] text-greys-grey-05">
                        {t("landingPage.anythingWant.card1.text")}
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div className={`flex-1 rounded-sm bg-greys-grey-09 h-[492px] overflow-hidden flex flex-col py-11 px-6 box-border items-center justify-start gap-[36px] text-greys-grey-01 ${styles.digitalSolutionsdiv2}`}>
                    <div className="rounded-70xl bg-primary-purple-01 w-[140px] h-[140px] overflow-hidden shrink-0 flex flex-row items-center justify-start relative">
                      <img
                        className="absolute my-0 mx-[!important] top-[calc(50%_-_47px)] left-[calc(50%_-_47px)] w-[94px] h-[94px] object-cover z-[0]"
                        alt=""
                        src="/designidea-1@2x.png"
                      />
                    </div>
                    <div className="self-stretch h-[252px] flex flex-col items-center justify-start gap-[24px] text-center">
                      <div className="self-stretch relative leading-[48px] font-medium">
                        {t("landingPage.anythingWant.card2.title")}
                      </div>
                      <div className="self-stretch flex-1 relative text-base leading-[24px] text-greys-grey-03">
                        {t("landingPage.anythingWant.card2.text")}
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div className={`self-stretch flex-1 rounded-sm bg-greys-grey-01 overflow-hidden flex flex-col py-11 px-6 items-center justify-start gap-[36px] h-[405px] ${styles.digitalSolutionsdiv3}`}>
                    <div className="rounded-70xl bg-primary-purple-03 w-[140px] h-[140px] overflow-hidden shrink-0 flex flex-row items-center justify-start relative">
                      <img
                        className="absolute my-0 mx-[!important] top-[calc(50%_-_47px)] left-[calc(50%_-_47px)] w-[94px] h-[94px] object-cover z-[0]"
                        alt=""
                        src="/codinglanguage-1@2x.png"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-center">
                      <div className="self-stretch relative leading-[48px] font-medium">
                        {t("landingPage.anythingWant.card3.title")}
                      </div>
                      <div className="self-stretch relative text-base leading-[24px] text-greys-grey-05">
                        {t("landingPage.anythingWant.card3.text")}
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <img
                className={`absolute my-0 mx-[!important] top-[-21.5px] right-[10px] rounded-sm w-[212.17px] h-[584px] z-[2] ${styles.imgractangle}`}
                alt=""
                src="/Rectangle (1).svg"
              />
              <img
                className={`absolute my-0 mx-[!important] top-[485.5px] right-[10px] rounded-sm w-[212.17px] h-[579px] z-[3] ${styles.imgractangle}`}
                alt=""
                src="/Rectangle (1).svg"
              />
              <img
                className={`absolute my-0 mx-[!important] top-[986.5px] right-[10px] rounded-sm w-[212.17px] h-[555px] z-[4] ${styles.imgractangle}`}
                alt=""
                src="/Rectangle (2).svg"
              />
            </div>
          </div>
          <img
            className={`relative rounded-115xl w-[100%] h-[326.67px] ${styles.ractangleSingleimg}`}
            alt=""
            src="/Lines.svg"
          />
          <div className={`rounded-[94px] py-6 px-[15px] mx-[20px] text-center text-21xl fs-24 text-primary-purple-06 border-[1px] border-solid border-greys-grey-06 ${styles.servicestext}`}>
            <p className="m-0 mb-[15px]">
              <b className="font-satoshi">{t("landingPage.anythingWant.text1")}</b>
            </p>
            <p className="m-0 text-greys-grey-06 fs-18">
              {t("landingPage.anythingWant.text2")}
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col py-[100px] items-center justify-start gap-[84px] text-primary-purple-06 text-center">
          <div className="relative flex items-center px-[24px]">
            <span className="w-full">
              <p className="m-0 leading-[32px] text-[24px] fs-18">{t("landingPage.developmentCost.mainTitle")}</p>
              <p className="m-0 text-29xl leading-[56px] fs-32 text-greys-grey-08">{t("landingPage.developmentCost.title")}</p>
            </span>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start text-21xl text-greys-grey-01 px-[24px]">
            <div className={`relative w-[100%] h-[540px] overflow-hidden shrink-0 ${styles.devCostGroup}`}>
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-greys-grey-01 w-[100%] h-[100%] opacity-[0.64]" />
              <Grid item xs={12} container spacing={4} className={`items-center ${styles.estimatedcosttable}`}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <div className={`${styles.devCostLeftConner}`}>
                    <div className={`absolute bottom-[0px] left-[84px] rounded-t-lg rounded-b-none bg-primary-purple-08 h-[386px] flex flex-col pt-11 px-[34px] pb-0 box-border items-center justify-start gap-[44px] ${styles.devCostWage}`}>
                      <div className={`relative leading-[48px] font-medium ${styles.devCostWageTitle}`}>{t("landingPage.wage")}</div>
                      <div className="rounded-[50%] w-[40px] h-[40px] bg-greys-grey-01 flex flex-col p-2.5 items-center justify-center text-primary-purple-08">
                        <b className="relative leading-[48px]">+</b>
                      </div>
                      <div className={`relative leading-[48px] font-medium ${styles.devCostWageTitle}`}>{t("landingPage.infra")}</div>
                    </div>
                    <div className={`absolute bottom-[0] left-[365px] rounded-t-lg rounded-b-none bg-primary-purple-04 w-[167px] h-[246px] flex flex-col pt-11 px-[34px] pb-0 box-border items-center justify-start ${styles.devCostGlobalTeam}`}>
                      <div className={`relative leading-[48px] font-medium flex items-center justify-center w-[124px] ${styles.devCostWageTitle}`}>
                        {t("landingPage.team")}
                      </div>
                    </div>
                    <img
                      className={`absolute bottom-[360px] left-[254px] w-[161.11px] h-[55.35px] ${styles.devCostEllipse}`}
                      alt=""
                      src="/ellipse-1702.svg"
                    />
                    <b className={`absolute bottom-[270px] left-[402px] text-13xl leading-[40px] flex text-primary-purple-08 items-center justify-center w-[92px] ${styles.devCostSave}`}>
                      {t("landingPage.save")}
                    </b>
                  </div>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <div className={`max-w-[486px] flex flex-col py-0 pr-12 pl-0 box-border items-start justify-start gap-[32px] text-left text-greys-grey-08 ${styles.devCostRightConner}`}>
                    <div className="self-stretch relative leading-[48px] font-medium fs-32">
                      {t("landingPage.developmentCost.subTitle")}
                    </div>
                    <div className="self-stretch relative text-[inherit] leading-[32px] font-inherit text-greys-grey-05">
                      <ul className="m-0 pl-6 text-lg fs-16">
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
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-[100px] items-center justify-start gap-[84px] text-primary-purple-06 text-center">
          <div className="relative flex items-center">
            <span className="w-full">
              <p className="m-0 leading-[32px] text-[24px] fs-18">{t("landingPage.techStack.mainTitle")}</p>
              <p className="m-0 text-29xl leading-[56px] fs-32 font-medium text-greys-grey-08">
                {t("landingPage.techStack.title")}
              </p>
            </span>
          </div>
          <div className="container mx-auto flex flex-col items-start justify-start gap-[44px] text-left text-13xl text-greys-grey-09">
            <div className="px-[24px]">
              <Grid item xs={12} container spacing={4}>
                {tackStackArr?.length > 0 && tackStackArr?.map((item: any, index: any) => {
                  return <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
                    <div className="flex-1 flex flex-col items-start justify-start mb-[30px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                        <div className="flex flex-col items-start justify-start gap-[12px]">
                          <img
                            className="relative w-12 h-12 overflow-hidden shrink-0"
                            alt=""
                            src={item.img}
                          />
                          <div className="relative leading-[48px] font-medium">
                            <p className="m-0">{item.title1}</p>
                            <p className="m-0">{item.title2}</p>
                          </div>
                        </div>
                        <div className="relative text-lg tracking-[0.02em] leading-[24px] text-greys-grey-07 opacity-[0.5]">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </Grid>
                })}
              </Grid>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-[100px] items-center justify-start gap-[84px] text-primary-purple-06 text-center">
          <div className="relative flex items-center px-[24px]">
            <span className="w-full">
              <p className="m-0 leading-[32px] text-[24px] fs-18">{t("landingPage.devProcess.mainTitle")}</p>
              <p className="m-0 text-29xl leading-[56px] fs-32 font-medium text-greys-grey-08">
                {t("landingPage.devProcess.title")}
              </p>
            </span>
          </div>
          <div className="container flex flex-row items-start justify-center text-greys-grey-08">
            <Grid item xs={12} container spacing={4} className='px-[24px]'>
              {devProcessArr?.length > 0 && devProcessArr?.map((elm: any, index: number) => {
                return <Grid item lg={3} md={6} sm={12} xs={12} key={index}>
                  <div className="flex-1 rounded-sm box-border h-[414px] flex flex-col pt-[54px] px-6 pb-6 items-center justify-start relative gap-[14px] border-[1px] border-solid border-greys-grey-04">
                    <div className="self-stretch flex flex-row items-start justify-center z-[0]">
                      <img
                        className="relative w-12 h-12 overflow-hidden shrink-0"
                        alt=""
                        src={elm.img}
                      />
                    </div>
                    <div className="self-stretch relative leading-[32px] z-[1]">
                      {elm.title}
                    </div>
                    <div className="self-stretch relative text-[inherit] leading-[34px] font-inherit text-greys-grey-05 text-left z-[2]">
                      <ul className="m-0 pl-[21px]">
                        <li className="mb-0 text-base">{elm.title1}</li>
                        <li className="mb-0 text-base">{elm.title2}</li>
                        <li className="mb-0 text-base">{elm.title3}</li>
                        <li className="mb-0 text-base">{elm.title4}</li>
                        {elm.title5 && <li className="text-base">{elm.title5}</li>}
                      </ul>
                    </div>
                    <div className="my-0 mx-[!important] absolute top-[-24px] left-[calc(50%_-_27.25px)] flex flex-row items-start justify-start gap-[10px] z-[3] text-white">
                      <div className="relative rounded-[50%] bg-primary-purple-06 w-[54px] h-[54px] z-[0]" />
                      <div className="absolute my-0 mx-[!important] top-[12px] left-[22px] leading-[32px] inline-block w-[9px] h-[30px] shrink-0 z-[1]">
                        {elm.id}
                      </div>
                    </div>
                  </div>
                </Grid>
              })}
            </Grid>
          </div>
        </div>
        <div className="container mx-auto pt-[100px] text-center">
          <div className="self-stretch relative leading-[30px] text-29xl text-black fs-32 px-[24px]">
            {t("landingPage.reviews.title")}
          </div>
          <div className="grid lg:grid-cols-1 grid-cols-1 gap-[38px] text-5xl main-cards pt-[84px] pb-[184px] corefeature-card-slider px-[9px]">
            <Slider {...settings}>
              {reviews.map((item: any, index: number) => {
                return (
                  <div key={index}>
                    <div className={`rounded-[20px] mx-[15px] gap-[24px] max-w-[100%]  rounded-xl bg-greys-grey-01 h-[328px] hover:bg-slate-200 max-w-[100%] flex flex-col p-[30px] box-border  justify-start mb-[2rem] `}>
                      <div className="flex flex-row items-center justify-start gap-[20px] ">
                        <div className="flex flex-row items-center justify-start">
                          <img
                            className="relative rounded-11xl w-[60px] h-[60px] object-cover"
                            alt=""
                            src={item?.img1}
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-[4px]">
                          <b className="relative text-[#1D1E25] tracking-[0.02em] leading-[24px] text-left">
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
                        {stars}
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
        <div className="container mx-[auto] py-[100px] text-29xl text-black">
          <div className="text-37xl text-greys-grey-09 font-heading-3-medium">
            <div className="leading-[64px] font-medium text-center pb-[84px] fs-32">
              {t("landingPage.portfolio.title")}
            </div>
            <div className="relative">
              <div className={`lg:mx-[80px] md:mx-[80px] sm:mx-[50px] ${styles.pfSlider}`}>
                <Slider {...settingsPortfolio} ref={reviewsSlider}>
                  {portFolioImages?.map((item: any, index: number) => {
                    return <div className={`rounded-3xl w-[100%] lg:h-[794px] md:h-[500px] sm:h-[280px] xs:h-[280px] overflow-hidden shrink-0 flex flex-row items-end justify-start relative gap-[70px] ${styles.pfsliderImages}`} key={index}>
                      <img src={item?.image} style={{ width: "100%", height: "inherit" }} className="rounded-[3%]" />
                    </div>
                  })}
                </Slider>
              </div>
              <img className={`w-11 h-11 cursor-pointer slick-prev-btn`} alt="" src="/arrow1.svg" onClick={() => previous()} />
              <img className={`w-11 h-11 cursor-pointer slick-next-btn`} alt="" src="/arrow2.svg" onClick={() => next()} />
            </div>
          </div>
        </div>
        <div className="container mx-auto py-[100px] text-left text-45xl text-greys-grey-08">
          <Grid item xs={12} container spacing={4} className='px-[20px]'>
            {counterArr?.map((item: any, index: number) => {
              return <Grid item lg={4} md={4} sm={6} xs={12} key={index}>
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px]" style={{ borderBottom: "2px solid #020617" }}>
                  <div className="overflow-hidden flex flex-col items-start justify-start">
                    <div className="relative leading-[72px] font-medium inline-block w-[255px]">
                      {item.count}
                    </div>
                    <div className="relative text-base leading-[24px] font-medium text-greys-grey-05 pb-[16px] inline-block w-[255px]">
                      {item.text}
                    </div>
                  </div>
                </div>
              </Grid>
            })}
          </Grid>
        </div>
        <div className="container mx-[auto] pt-[100px] pb-[200px] px-0 text-primary-purple-06">
          <div className="text-center pb-[84px] px-[24px]">
            <div className="text-center gap-[6px]">
              <div className="leading-[32px] text-[24px] fs-18">
                <span>{t("landingPage.faq.mainTitle")}</span>
              </div>
              <div className="self-stretch relative text-29xl leading-[56px] font-medium text-gray-900 fs-32">
                {t("landingPage.faq.title")}
              </div>
            </div>
          </div>
          <div className="max-w-[1240px] mx-[auto] flex flex-col py-0 px-8 box-border items-center justify-start text-left text-lg text-greys-grey-08">
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <FAQComponent />
            </div>
          </div>
        </div>
        <Footer />
      </div >
    </>
  );
};

export default BCLandingPage; 