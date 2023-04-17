import { useState, useEffect } from "react";
import Topcard from "../../assets/images/carddecor.png";
import s from "./Card.module.css";

export default function Card({ user }) {
  const { user: userName, avatar, tweets, followers, id } = user;
  const [followersCount, setFollowersCount] = useState(followers);
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    localStorage.setItem(id, !isActive);
    setIsActive(!isActive);
    if (isActive) {
      setFollowersCount(followersCount - 1);
    } else {
      setFollowersCount(followersCount + 1);
    }
  };

  useEffect(() => {
    if (localStorage.getItem(id) === "true") {
      setIsActive(true);
      setFollowersCount(followersCount + 1);
    }
    /* eslint-disable-next-line */
  }, []);

  return (
    <div className={s.card}>
      <img
        className={s.cardDecor}
        src={Topcard}
        alt="Card decoration"
        width={380}
      />
      <h3 className={s.cardName}>{userName}</h3>
      <div className={s.cardBottom}>
        <div className={s.cardAvatar}>
          <img
            className={s.cardAvatarImg}
            src={avatar}
            alt="User's avatar"
            width="62"
          />
        </div>
        <p className={s.cardText}>{tweets} tweets</p>
        <p className={s.cardText}>
          {followersCount.toLocaleString("en-US")} followers
        </p>
        <button
          className={isActive ? s.cardBtnActive : s.cardBtn}
          // style={isActive ? { backgroundColor: "#5CD3A8" } : null}
          type="button"
          onClick={onClick}
        >
          <span className={s.cardBtnText}>
            {isActive ? "Following" : "Follow"}
          </span>
        </button>
      </div>
    </div>
  );
}
