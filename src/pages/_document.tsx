import { Html, Head, Main, NextScript } from 'next/document'
import { I18nextProvider, useTranslation } from "react-i18next";
import i18ns from "../i18n"
import { useEffect, useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import LanguageContext from '@/context/language';

export default function Document({
  children,
}: {
  children: React.ReactNode
}) {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState("en")
  const [value] = useLocalStorage("translation", "", false)
  const [lang, setLang] = useLocalStorage("language", "", true)
  useEffect(() => {
    const translation = JSON.parse(localStorage.getItem("translation"))
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
    <Html lang="en">
      <I18nextProvider i18n={i18ns}>
        <LanguageContext.Provider value={{ lang: language, setLang: setLanguage }}>
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </LanguageContext.Provider>
      </I18nextProvider>
    </Html>
  )
}
// import Document, { Html, Head, Main, NextScript } from 'next/document';

// class MyDocument extends Document {
//   render() {
//     return (
//       <Html lang="en">
//         <Head />
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;
