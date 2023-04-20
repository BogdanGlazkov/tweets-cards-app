import { useTranslation, Trans } from "react-i18next";
import heroPic from "../../assets/images/friends.jpg";
import Navigation from "../Navigation/Navigation";
import s from "./Hero.module.css";

const lngs = {
  en: { nativeName: "English" },
  ua: { nativeName: "Українська" },
  ru: { nativeName: "Русский" },
};

export default function Hero() {
  const { i18n } = useTranslation();

  return (
    <div className={s.hero}>
      <div className={s.lng}>
        {Object.keys(lngs).map((lng) => (
          <button
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <h1 className={s.heroTitle}>
        <Trans i18nKey="welcome">Welcome to Tweets Application!</Trans>
      </h1>
      <h2 className={s.heroSubtitle}>
        <Trans i18nKey="find">You can find mates and friends here</Trans>
      </h2>
      <p className={s.heroText}>
        <Trans i18nKey="click">Subscribe and click the Tweets link below</Trans>
      </p>
      <div className={s.heroImgWrapper}>
        <img className={s.heroImg} src={heroPic} alt="Friends" />
        <Navigation />
      </div>
    </div>
  );
}
