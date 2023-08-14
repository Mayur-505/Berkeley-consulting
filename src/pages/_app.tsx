import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import "../styles/style.css"
import "../styles/secstyle.css"
import "../styles/portstyle.css"
import "../styles/blurStyle.css"
import "../styles/buttonStyle.css"
import "../styles/formStyle.css"
import "../styles/inputStyle.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
