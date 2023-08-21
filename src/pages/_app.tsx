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

// import { useEffect } from 'react'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState("en")
  const [value] = useLocalStorage("translation", "", false)
  const [lang, setLang] = useLocalStorage("language", "", true)

  useEffect(() => {
    const translation = JSON.parse(localStorage.getItem("translation"))
    i18n.changeLanguage(language || "en")
  }, [])
  useEffect(() => {
    if (lang !== "") {
      setLanguage(lang)
      i18n.changeLanguage(lang || "en")
    } else {
      setLanguage("en")
    }
  }, [lang])
  useEffect(() => {
    if (value?.en)
      i18ns.init({
        lng: 'en',
        fallbackLng: 'en',
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
  }, [value?.en, value?.ko])

  return (
    <I18nextProvider i18n={i18ns}>
      <LanguageContext.Provider value={{ lang: language, setLang: setLanguage }}>
        <Component {...pageProps} />
      </LanguageContext.Provider>
    </I18nextProvider>
  );
}

export default MyApp;
