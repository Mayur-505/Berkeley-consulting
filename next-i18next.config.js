const enTranslations = require('./public/locales/en/common.json')
const koTranslations = require('./public/locales/ko/common.json')
const chiTranslations = require('./public/locales/chi/common.json')
const path = require('path')

module.exports = {
    i18n: {
        // defaultLocale: "en", //default locale
        locales: ["default", "en", "chi", "ko"],
        defaultNS: 'common',
        defaultLocale: "en",
        localeDetection: false,
        serverLanguageDetection: true,
        localePath: path.resolve("./public/locales"),

        // resources: {
        //     en: {
        //         translation: enTranslations,
        //     },
        //     ko: {
        //         translation: koTranslations,

        //     },
        //     chi: {
        //         translation: chiTranslations,

        //     }
        // },

    },


}

// import gf from "./"