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
    resources: {
      en: {
        translation: {
          welcome: "Welcome to Tweets Application!",
          find: "You can find mates and friends here",
          click: "Subscribe and click the Tweets link below",
          optionTitle: "Choose option",
          optionAll: "Show all",
          optionFollow: "Follow",
          optionFollowings: "Followings",
          tweets: "tweets",
          followers: "followers",
          following: "Following",
          back: "Go back",
          tweetsBtn: "Tweets",
          loadMore: "Load more",
        },
      },
      ua: {
        translation: {
          welcome: "Ласкаво просимо у Tweets застосунок!",
          find: "Тут ти можеш знайти колег та друзів",
          click: "Підписуйся та тисни на посилання нижче",
          optionTitle: "Виберіть опцію",
          optionAll: "Показати всі",
          optionFollow: "Підписатися",
          optionFollowings: "Підписані",
          tweets: "твит(ів)",
          followers: "підписник(ів)",
          following: "Ви підписані",
          back: "Назад",
          tweetsBtn: "Твіти",
          loadMore: "Завантажити ще",
        },
      },
      ru: {
        translation: {
          welcome: "Добро пожаловать в Tweets приложение!",
          find: "Тут ты можешь найти колег и друзей",
          click: "Подписывайся и жми на ссылку ниже",
          optionTitle: "Выберите опцию",
          optionAll: "Показать все",
          optionFollow: "Подписаться",
          optionFollowings: "Подписанные",
          tweets: "твит(ов)",
          followers: "подписчик(ов)",
          following: "Вы подписаны",
          back: "Назад",
          tweetsBtn: "Твиты",
          loadMore: "Загрузить еще",
        },
      },
    },
  });

export default i18n;
