const path = require('path');
const enTranslations = require('./public/locales/en/common.json');
const koTranslations = require('./public/locales/ko/common.json');
const chiTranslations = require('./public/locales/chi/common.json');

module.exports = {
  i18n: {
    locales: ['default', 'en', 'chi', 'ko'],
    defaultNS: 'common',
    defaultLocale: 'en',
    localePath: path.resolve('./public/locales'),
  },
};