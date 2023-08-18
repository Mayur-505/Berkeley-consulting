"use client"
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { GlobalProvider } from '@/pages/GlobalContext';
import { I18nextProvider, useTranslation } from "react-i18next";
import "../styles/style.css"
import "../styles/secstyle.css"
import "../styles/portstyle.css"
import "../styles/blurStyle.css"
import "../styles/buttonStyle.css"
import "../styles/formStyle.css"
import "../styles/inputStyle.css"
import i18ns from "../i18n"
import { useEffect, useState } from 'react';
import LanguageContext from '@/context/language';
import useLocalStorage from '@/hooks/useLocalStorage';

function MyApp({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState("en")
  const [value] = useLocalStorage("translation", "", false)
  const [lang, setLang] = useLocalStorage("language", "", true)
  console.log('lang', lang)
  useEffect(() => {
    const translation = JSON.parse(localStorage.getItem("common"))
    i18n.changeLanguage(localStorage.getItem("language") || "en")
  }, [])
  useEffect(() => {
    if (lang) {
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
            common: value?.en,
          },
          ko: {
            common: value?.ko,
          },
          chi: {
            common: value?.chi,
          }
        },
        interpolation: {
          escapeValue: false,
        },
      });
  }, [value])

  return (
    <GlobalProvider>
      <I18nextProvider i18n={i18ns}>
        <LanguageContext.Provider value={{ lang: language, setLang: setLanguage }}>
          <Component {...pageProps} />
        </LanguageContext.Provider>
      </I18nextProvider>
    </GlobalProvider>
  );
}

export default appWithTranslation(MyApp);
