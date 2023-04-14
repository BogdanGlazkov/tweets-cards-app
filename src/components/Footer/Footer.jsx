import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <h3 className={s.footerTitle}>#Your Tweets App</h3>
      <p class={s.footerText}>&copy; 2023 bglazkov@i.ua</p>
    </footer>
  );
}
