import { useState } from "react";
import Topcard from "../../assets/images/carddecor.png";
import s from "./Card.module.css";

const user = {
  user: "Rachael Welch",
  avatar:
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/180.jpg",
  tweets: 777,
  followers: 100500,
  id: "1",
};

export default function Card() {
  const { user: userName, avatar, tweets, followers, id } = user;
  const [followersCount, setFollowersCount] = useState(followers);
  const [isActive, setIsActive] = useState(localStorage.getItem(id) || false);

  const onClick = () => {
    localStorage.setItem(id, !isActive);
    setIsActive(!isActive);
    if (isActive) {
      setFollowersCount(followersCount - 1);
    } else {
      setFollowersCount(followersCount + 1);
    }
  };

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
          className={s.cardBtn}
          style={isActive ? { backgroundColor: "#5CD3A8" } : null}
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
