"use client"
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { I18nextProvider, useTranslation } from "react-i18next";
import "../styles/style.css"
import "../styles/secstyle.css"
import "../styles/portstyle.css"
import "../styles/blurStyle.css"
import "../styles/buttonStyle.css"
import "../styles/formStyle.css"
import "../styles/inputStyle.css"
import LanguageContext from '@/context/language';
import i18ns from "../i18n"
import { useEffect, useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import axios from 'axios';

// import { useEffect } from 'react'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState("ko")
  // const [value] = useLocalStorage("translation", "", false)
  const [value, setValue] = useState<any>("")
  const [lang, setLang] = useLocalStorage("language", "", true)


  useEffect(() => {
    const url = 'https://berkeleyconsulting.s3.us-east-005.backblazeb2.com/berkeley/translation.json';

    axios.get(url)
      .then((response) => {
        setValue(response.data);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }, []);

  useEffect(() => {
    // const translation = JSON.parse(localStorage.getItem("translation"))
    i18n.changeLanguage(localStorage.getItem("l") || "ko")
  }, [value])

  // useEffect(() => {
  //   const translation = JSON.parse(localStorage.getItem("translation"))
  //   i18n.changeLanguage(language || "ko")
  // }, [])
  useEffect(() => {
    if (lang !== "") {
      setLanguage(lang)
      i18n.changeLanguage(lang || "ko")
    } else {
      setLanguage("ko")
    }
  }, [lang])
  useEffect(() => {
    if (value?.ko)
      i18ns.init({
        lng: 'ko',
        fallbackLng: 'ko',
        resources: {
          en: {
            translation: value?.en,
          },
          ko: {
            translation: value?.ko,
          }
        },
        interpolation: {
          escapeValue: false,
        },
      });
    i18n.changeLanguage(localStorage.getItem("language") || "en")
  }, [value])

  return (
    <I18nextProvider i18n={i18ns}>
      <LanguageContext.Provider value={{ lang: language, setLang: setLanguage }}>
        <Component {...pageProps} />
      </LanguageContext.Provider>
    </I18nextProvider>
  );
}

export default MyApp;
