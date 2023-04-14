import heroPicSmall from "../../assets/images/friends-sm.jpg";
import heroPicMiddle from "../../assets/images/friends-md.jpg";
import heroPicLarge from "../../assets/images/friends-lg.jpg";
import Navigation from "../Navigation/Navigation";
import s from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={s.hero}>
      <h1 className={s.heroTitle}>Welcome to Tweets Application!</h1>
      <h2 className={s.heroSubtitle}>You can find mates and friends here</h2>
      <p className={s.heroText}>Subscribe and click the Tweets link below</p>
      <div className={s.heroImgWrapper}>
        <img
          className={s.heroImg}
          srcset={`${heroPicLarge} 270w,
          			${heroPicMiddle} 354w,
          			${heroPicSmall} 460w,
          			`}
          sizes="(min-width: 1200px) 270px, (min-width: 768px) 354px, 100vw"
          src={heroPicSmall}
          alt="Friends"
        />
        <Navigation />
      </div>
    </div>
  );
}
