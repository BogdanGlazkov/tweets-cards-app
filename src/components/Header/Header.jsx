import s from "./Header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <h1 className={s.headerTitle}>Your Twits App</h1>
    </header>
  );
}
