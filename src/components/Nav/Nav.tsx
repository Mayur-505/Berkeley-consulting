import React, { useEffect, useState, useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";
import styles from "./nav.module.css";
// import { useRouter } from "next/navigation";
import Language from "../language";
import LanguageContext from "@/context/language";
import { useRouter } from "next/router";
import useWindowSize from "@/hooks/useWindowSize";
import PopupComponent from "@/components/PopupComponent";
import { BlurLayer } from "@/components/BlurLayer";

const Nav = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { width } = useWindowSize();
  const [
    isScrollValueMoreThanHeaderHeight,
    setIsScrollValueMoreThanHeaderHeight,
  ] = useState(false);
  const [isActivem, setisActivem] = useState(false);
  const [isLanguageOpen, setLanguageOpen] = useState(false);
  const { lang } = useContext(LanguageContext);
  const [idS, setIds] = useState("");
  const [form, setForm] = useState(false);

  const toggleHandler = () => {
    setisActivem(!isActivem);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollValueMoreThanHeaderHeight(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const header = document.getElementsByClassName("nav-main");
    const headerspace = document.getElementsByClassName("nav-main");
    if (isScrollValueMoreThanHeaderHeight) {
      if (header && header[0] && header[0]?.classList) {
        header[0].classList.add("sticky-header");
      }
      headerspace[0]?.classList.add("header-space");
    } else {
      if (header && header[0] && header[0]?.classList) {
        header[0].classList.remove("sticky-header");
      }
      headerspace[0]?.classList.remove("header-space");
    }
  }, [isScrollValueMoreThanHeaderHeight]);

  const openLanguage = useCallback(() => {
    setLanguageOpen(!isLanguageOpen);
  }, [isLanguageOpen]);

  const closeLanguage = useCallback(() => {
    setLanguageOpen(false);
  }, []);

  const OnClickViewOnTop = (id: any) => {
    const element = document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
    const idParts = id.split("-");
    const targetId = idParts[0];
    setIds(targetId);
    if (id === "solutions") {
      const developmentElement = document.getElementById("development");
      if (developmentElement) {
        setTimeout(() => {
          developmentElement.scrollIntoView({ behavior: "smooth" });
        }, 2000);
      }
    }
    if (id === "development") {
      const techStackElement = document.getElementById("techStack");
      if (techStackElement) {
        setTimeout(() => {
          techStackElement.scrollIntoView({ behavior: "smooth" });
        }, 2000);
      }
    }
    if (id === "processNav") {
      const reviewsElement = document.getElementById("reviews");
      if (reviewsElement) {
        setTimeout(() => {
          reviewsElement.scrollIntoView({ behavior: "smooth" });
        }, 2000);
      }
    }
    // if (element) {
    //   width < 991
    //     ? (element.style.paddingTop = "170px")
    //     : (element.style.paddingTop = "270px");
    // }
  };

  return (
    <>
      {form ? (
        <PopupComponent onClose={() => setForm(!form)}>
          <BlurLayer />
        </PopupComponent>
      ) : null}
      <div className={`${styles.NavContainer} nav-main font-general-sans`}>
        <div className="container mx-[auto]">
          <div className="px-[20px] flex flex-row items-center justify-between z-[0]">
            <img
              className="relative w-[156px] h-[60px] object-cover"
              alt=""
              src="/berkeley-consulting-logo-02@2x.png"
              onClick={() => router.push("/")}
            />
            <div
              className={`flex-1 flex flex-row items-center justify-end gap-[74px] ${styles.navTitle}`}
            >
              <div
                className={`relative ${
                  idS === "solutions"
                    ? "text-greys-grey-08"
                    : "text-greys-grey-04"
                } hover:text-greys-grey-08 active:text-greys-grey-08 focus:text-greys-grey-08 cursor-pointer  tracking-[0.04em] leading-[24px] text-[18px] default:text-greys-grey-08`}
                onClick={() => {
                  OnClickViewOnTop("solutions");
                }}
              >
                {t("navBar.title1")}
              </div>
              <div
                className={`relative  ${
                  idS === "processNav"
                    ? "text-greys-grey-08"
                    : "text-greys-grey-04"
                }  hover:text-greys-grey-08 active:text-greys-grey-08 focus:text-greys-grey-08 cursor-pointer tracking-[0.02em] leading-[24px] text-[18px]`}
                onClick={() => {
                  OnClickViewOnTop("processNav");
                }}
              >
                {t("navBar.title2")}
              </div>
              <div
                className={`relative  ${
                  idS === "portfolio"
                    ? "text-greys-grey-08"
                    : "text-greys-grey-04"
                } hover:text-greys-grey-08 active:text-greys-grey-08 focus:text-greys-grey-08 cursor-pointer tracking-[0.02em] leading-[24px] text-[18px]`}
                onClick={() => {
                  OnClickViewOnTop("portfolio");
                }}
              >
                {t("navBar.title3")}
              </div>
              <div
                className={`relative ${
                  idS === "faqs" ? "text-greys-grey-08" : "text-greys-grey-04"
                }  hover:text-greys-grey-08 active:text-greys-grey-08 focus:text-greys-grey-08 cursor-pointer tracking-[0.02em] leading-[24px] text-[18px]`}
                onClick={() => {
                  OnClickViewOnTop("faqs");
                }}
              >
                {t("navBar.title4")}
              </div>
              <div
                className={`relative ${
                  idS === "blog" ? "text-greys-grey-08" : "text-greys-grey-04"
                } hover:text-greys-grey-08 active:text-greys-grey-08 focus:text-greys-grey-08 cursor-pointer tracking-[0.02em] leading-[24px] text-[18px]`}
                onClick={() => setForm(true)}
              >
                {t("form.inquiry.title")}
              </div>
            </div>
            <div className="flex flex-row items-center justify-end lg:ms-[60px] md:ms-[40px] ms-[40px]">
              <div className="relative">
                <div
                  className="div language-currency me-[15px] cursor-pointer items-center flex"
                  onClick={openLanguage}
                >
                  <img
                    className="img me-[10px] h-[30px] w-[40px]"
                    alt="Vector"
                    src={lang == "en" ? "/image 5.svg" : "/image 5 (1).svg"}
                  />
                  <img
                    className="rectangle"
                    alt="Rectangle"
                    src="/img/rectangle-2083.svg"
                  />
                </div>
                {isLanguageOpen && <Language onClose={closeLanguage} />}
              </div>
              <div className="flex items-center">
                <div
                  className={`order-1 flex items-center ${styles.megamenuMain} justify-end me-3`}
                >
                  <button
                    className="navbar-toggler order-1 text-[20px] bg-[transparent] border-[0]"
                    onClick={toggleHandler}
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="15"
                      viewBox="0 0 29 15"
                      fill="none"
                    >
                      <path
                        d="M1 1H28M1 13.5H28"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              isActivem ? `${styles.headerMenuActive}` : `${styles.headerMenu}`
            }
          >
            <div className={`p-[30px] ${styles.headerMainMenu}`}>
              {isActivem && (
                <div className={`${styles.headerMenuClose}`}>
                  <img
                    className="relative w-[156px] h-[60px] object-cover"
                    alt=""
                    src="/berkeley-consulting-logo-02@2x.png"
                    onClick={() => {
                      router.push("/");
                      setisActivem(false);
                    }}
                  />
                  <div onClick={() => setisActivem(false)}>
                    <img src="/img/Union (33).svg" alt="" />
                  </div>
                </div>
              )}
              <ul className="mt-[30px]">
                <li className="main-header-menu cursor-pointer">
                  <div
                    className="text-wrapper text-[16px]"
                    onClick={() => {
                      OnClickViewOnTop("solutions");
                      setisActivem(false);
                    }}
                  >
                    {t("navBar.title1")}
                  </div>
                </li>
                <li className="main-header-menu cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div
                      className="text-wrapper text-[16px]"
                      onClick={() => {
                        OnClickViewOnTop("processNav");
                        setisActivem(false);
                      }}
                    >
                      {t("navBar.title2")}
                    </div>
                  </div>
                </li>
                <li className="main-header-menu cursor-pointer">
                  <div
                    className="text-wrapper text-[16px]"
                    onClick={() => {
                      OnClickViewOnTop("portfolio");
                      setisActivem(false);
                    }}
                  >
                    {t("navBar.title3")}
                  </div>
                </li>
                <li className="main-header-menu cursor-pointer">
                  <div className="div">
                    <div
                      className="text-wrapper text-[16px]"
                      onClick={() => {
                        OnClickViewOnTop("faqs");
                        setisActivem(false);
                      }}
                    >
                      {t("navBar.title4")}
                    </div>
                  </div>
                </li>
                <li className="main-header-menu cursor-pointer">
                  <div className="div">
                    <div
                      className="text-wrapper text-[16px]"
                      onClick={() => {
                        setForm(true);
                        setisActivem(false);
                      }}
                    >
                      {t("form.inquiry.title")}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
