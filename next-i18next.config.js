const path = require('path');
const enTranslations = require('./public/locales/en/translation.json');
const koTranslations = require('./public/locales/ko/translation.json');
const chiTranslations = require('./public/locales/chi/translation.json');

module.exports = {
  i18n: {
    locales: ['default', 'en', 'chi', 'ko'],
    defaultNS: 'translation',
    defaultLocale: 'ko',
    localePath: path.resolve('./public/locales'),
  },
};