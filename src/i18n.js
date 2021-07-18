import i18n from 'i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from 'react-i18next';
import XHR from 'i18next-xhr-backend';

// English Translation JSONs
import trainingEN from './i10n/en/training.json';
// import loginEN from './locate/en/login.json';
// import landingEN from './locate/en/landing.json';
// import aboutEN from "./locate/en/about.json";
// import workshopsEN from "./locate/en/workshops.json";
// import simsEN from "./locate/en/sims.json";

// Tagalog Translation JSONs
import trainingPH from './i10n/ph/training.json';
// import loginFR from './locate/fr/login.json';
// import landingFR from './locate/fr/landing.json';
// import aboutFR from "./locate/fr/about.json";
// import workshopsFR from "./locate/fr/workshops.json";
// import simsFR from "./locate/fr/sims.json";

i18n
.use(XHR)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources: {
        en: {
            training: trainingEN,
            // login: loginEN,
            // landing: landingEN,
            // about: aboutEN,
            // workshops: workshopsEN,
            // sims: simsEN
        }
        ,
        ph: {
            training: trainingPH,
        //     login: loginFR,
        //     landing: landingFR,
        //     about: aboutFR,
        //     workshops: workshopsFR,
        //     sims: simsFR
        }
    },
    /* default language when load the website in browser */
    lng: "en",
    /* When react i18next not finding any language to as default in browser */
    fallbackLng: "en",
    /* debugger For Development environment */
    debug: true,
    ns: ["training"],
    defaultNS: "training",
    keySeparator: ".",
    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },
    react: {
        wait: true,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default'
    }
})

export default i18n;