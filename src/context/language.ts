import React from "react"


type authContextType = {
    lang: any;
    setLang: () => void;
};
const LanguageContext = React.createContext({ lang: {}, setLang: () => { } })

export default LanguageContext