import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-locize-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    saveMissing: true,
    // backend: {
    //   projectId: "8d5f7f1c-0a41-454f-a6a5-61c2e5efc692",
    //   apiKey: "e81e3866-902b-4dc9-a384-ca7bc81360ec",
    // },
    resources: {
      en: {
        translation: {
          welcome: "Welcome to Tweets Application!",
          find: "You can find mates and friends here",
          click: "Subscribe and click the Tweets link below",
        },
      },
      ua: {
        translation: {
          welcome: "Ласкаво просимо у Tweets застосунок!",
          find: "Тут ти можеш знайти колег та друзів",
          click: "Підписуйся та тисни на посилання нижче",
        },
      },
      ru: {
        translation: {
          welcome: "Добро пожаловать в Tweets приложение!",
          find: "Тут ты можешь найти колег и друзей",
          click: "Подписывайся и жми на ссылку ниже",
        },
      },
    },
  });

export default i18n;
