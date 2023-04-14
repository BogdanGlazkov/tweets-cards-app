import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <h2 className={s.headerTitle}>Your Tweets App</h2>
      <Navigation />
    </header>
  );
}
