import Card from "../Card/Card";
import s from "./CardContainer.module.css";

export default function CardContainer() {
  return (
    <div className={s.wrapper}>
      <Card />
    </div>
  );
}
