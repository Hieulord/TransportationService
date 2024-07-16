import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HOME_EN from "../locales/en/home.json";
import INTRODUCE_EN from "../locales/en/introduce.json";
import HOME_VI from "../locales/vi/home.json";
import INTRODUCE_VI from "../locales/vi/introduce.json";

export const locales = {
  en: "English",
  vi: "Vietnamese"
}

const resources = {
    en: {
      home: HOME_EN,
      introduce: INTRODUCE_EN
    },
    vi: {
      home: HOME_VI,
      introduce: INTRODUCE_VI
    }
};

const defaultNS = "home";

i18n.use(initReactI18next).init({
    resources,
    lng: "vi",
    ns: ["home", "introduce"],
    fallbackLng: "vi",
    defaultNS,
    interpolation: {
        escapeValue: false // react already safes from xss1
    }
})