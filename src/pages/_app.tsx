import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { GlobalProvider } from '@/pages/GlobalContext';

import "../styles/style.css"
import "../styles/secstyle.css"
import "../styles/portstyle.css"
import "../styles/blurStyle.css"
import "../styles/buttonStyle.css"
import "../styles/formStyle.css"
import "../styles/inputStyle.css"
// import { useEffect } from 'react'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default appWithTranslation(MyApp);



// import { appWithTranslation } from 'next-i18next';
// import type { AppProps } from 'next/app';
// import { useEffect, useState } from 'react';
// import { GlobalProvider } from '@/pages/GlobalContext'; // Replace with your GlobalContext path

// import '../styles/globals.css';

// function MyApp({ Component, pageProps }: AppProps) {
//   const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);

//   useEffect(() => {
//     setInitialRenderComplete(true);
//   }, []);

//   if (!initialRenderComplete) return <></>;

//   return (
//     <GlobalProvider>
//       <Component {...pageProps} />
//     </GlobalProvider>
//   );
// }

// export default appWithTranslation(MyApp);
