"use client"
import type { NextPage } from "next";
import styles from "./language.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import LanguageContext from "@/context/language";
import { useContext } from "react";

type LanguageType = {
  onClose?: () => void;
};

const Language: NextPage<LanguageType> = ({ onClose }: any) => {
  const { i18n } = useTranslation()
  const { lang, setLang } = useContext(LanguageContext)
  const handleLangUpdate = (lang: any) => {
    // e.preventDefault()
    setLang(lang)
    localStorage.setItem("language", lang)
    i18n.changeLanguage(lang)
    onClose()
  }
  return (
    <div className={styles.language}>
      <div className={styles.languageButton} onClick={() => handleLangUpdate("en")}>
        {/* <Image className={styles.flagIcon} alt="" src={Group1} /> */}
        <div className={styles.english}>ENG</div>
      </div>
      <div className={styles.languageButton} onClick={() => handleLangUpdate("ko")}>
        {/* <Image className={styles.flagIcon} alt="" src={Group2} /> */}
        <div className={styles.english}>KR</div>
      </div>
      <div className={styles.languageButton} onClick={() => handleLangUpdate("chi")}>
        {/* <Image className={styles.flagIcon} alt="" src={Group3} /> */}
        <div className={styles.english}>CHI</div>
      </div>
    </div>
  );
};

export default Language;