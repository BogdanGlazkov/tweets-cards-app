import Topcard from "../../assets/images/carddecor.png";
import s from "./Card.module.css";

export default function Card() {
  return (
    <div className={s.card}>
      <img src={Topcard} alt="Card decoration" width={380} />
      <div className={s.cardBottom}>
        <p className={s.cardText}>777 tweets</p>
        <p className={s.cardText}>100,500 Followers</p>
        <button className={s.cardBtn} type="button">
          <span className={s.cardBtnText}>Follow</span>
        </button>
      </div>
    </div>
  );
}
