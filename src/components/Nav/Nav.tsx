import React, { useEffect, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import styles from "./nav.module.css";
import { useRouter } from 'next/router';
import Language from '../language';

const Nav = () => {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)
  const router = useRouter()
  const [isScrollValueMoreThanHeaderHeight, setIsScrollValueMoreThanHeaderHeight] = useState(false);
  const [isActivem, setisActivem] = useState(false)
  const [isLanguageOpen, setLanguageOpen] = useState(false);

  const toggleHandler = () => {
    setisActivem(!isActivem);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollValueMoreThanHeaderHeight(window.scrollY > 90);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  useEffect(() => {
    const header = document.getElementsByClassName('nav-main')
    const headerspace = document.getElementsByClassName('nav-main')
    if (isScrollValueMoreThanHeaderHeight) {
      if (header && header[0] && header[0]?.classList) {
        header[0].classList.add('sticky-header')
      }
      headerspace[0]?.classList.add('header-space')
    }
    else {
      if (header && header[0] && header[0]?.classList) {
        header[0].classList.remove('sticky-header')
      }
      headerspace[0]?.classList.remove('header-space')
    }
  }, [isScrollValueMoreThanHeaderHeight])

  const openLanguage = useCallback(() => {
    setLanguageOpen(!isLanguageOpen);
  }, [isLanguageOpen]);

  const closeLanguage = useCallback(() => {
    setLanguageOpen(false);
  }, []);

  return (
    <div className={`${styles.NavContainer} nav-main font-general-sans`}>
      <div className="container mx-[auto]">
        <div className='px-[20px] flex flex-row items-center justify-between z-[0]'>
          <img
            className="relative w-[156px] h-[60px] object-cover"
            alt=""
            src="/berkeley-consulting-logo-02@2x.png"
            onClick={() => router.push('/')}
          />
          <div className={`flex-1 flex flex-row items-center justify-end gap-[74px] ${styles.navTitle}`}>
            <div className={`relative ${active === 0 ? "text-greys-grey-08" : "text-greys-grey-04"} hover:text-greys-grey-08 active:text-greys-grey-08 focus:text-greys-grey-08 cursor-pointer  tracking-[0.04em] leading-[24px] text-[18px] default:text-greys-grey-08`} onClick={() => setActive(0)}>
              {t("navBar.title1")}
            </div>
            <div className={`relative  ${active === 1 ? "text-greys-grey-08" : "text-greys-grey-04"}  hover:text-greys-grey-08 active:text-greys-grey-08 focus:text-greys-grey-08 cursor-pointer tracking-[0.02em] leading-[24px] text-[18px]`} onClick={() => setActive(1)}>
              {t("navBar.title2")}
            </div>
            <div className={`relative  ${active === 2 ? "text-greys-grey-08" : "text-greys-grey-04"} hover:text-greys-grey-08 active:text-greys-grey-08 focus:text-greys-grey-08 cursor-pointer tracking-[0.02em] leading-[24px] text-[18px]`} onClick={() => setActive(2)}>
              {t("navBar.title3")}
            </div>
            <div className={`relative ${active === 3 ? "text-greys-grey-08" : "text-greys-grey-04"}  hover:text-greys-grey-08 active:text-greys-grey-08 focus:text-greys-grey-08 cursor-pointer tracking-[0.02em] leading-[24px] text-[18px]`} onClick={() => setActive(3)}>
              {t("navBar.title4")}
            </div>
            <div className={`relative ${active === 4 ? "text-greys-grey-08" : "text-greys-grey-04"} hover:text-greys-grey-08 active:text-greys-grey-08 focus:text-greys-grey-08 cursor-pointer tracking-[0.02em] leading-[24px] text-[18px]`} onClick={() => setActive(4)}>
              {t("navBar.title5")}
            </div>
            <div className="relative">
              <div className="div language-currency me-[15px] cursor-pointer items-center flex" onClick={openLanguage}>
                <img className="img me-[5px]" alt="Vector" src="/image 5.svg" />
                <img className="rectangle" alt="Rectangle" src="/img/rectangle-2083.svg" />
              </div>
              {
                isLanguageOpen && (
                  <Language onClose={closeLanguage} />
                )
              }
            </div>
          </div>
          <div className="flex items-center">
            <div className={`order-1 flex items-center ${styles.megamenuMain} justify-end me-3`}>
              <button
                className="navbar-toggler order-1 text-[20px] bg-[transparent] border-[0]"
                onClick={toggleHandler}
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="15" viewBox="0 0 29 15" fill="none">
                  <path d="M1 1H28M1 13.5H28" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={isActivem ? `${styles.headerMenuActive}` : `${styles.headerMenu}`}>
          <div className={`p-[30px] ${styles.headerMainMenu}`}>
            {isActivem && <div className={`${styles.headerMenuClose}`} >
              <img
                className="relative w-[156px] h-[60px] object-cover"
                alt=""
                src="/berkeley-consulting-logo-02@2x.png"
                onClick={() => router.push('/')}
              />
              <div onClick={() => setisActivem(false)}>
                <img src="/img/Union (33).svg" alt="" />
              </div>
            </div>}
            <ul className="mt-[30px]">
              <li className="main-header-menu cursor-pointer">
                <div className="text-wrapper text-[16px]" onClick={() => setActive(0)}>{t("navBar.title1")}</div>
              </li>
              <li className="main-header-menu cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="text-wrapper text-[16px]" onClick={() => setActive(1)}>{t("navBar.title2")}</div>
                </div>
              </li>
              <li className="main-header-menu cursor-pointer">
                <div className="text-wrapper text-[16px]" onClick={() => setActive(2)}>{t("navBar.title3")}</div>
              </li>
              <li className="main-header-menu cursor-pointer">
                <div className="div">
                  <div className="text-wrapper text-[16px]" onClick={() => setActive(3)}>{t("navBar.title4")}</div>
                </div>
              </li>
              <li className="main-header-menu cursor-pointer">
                <div className="div">
                  <div className="text-wrapper text-[16px]" onClick={() => setActive(4)}>{t("navBar.title5")}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
