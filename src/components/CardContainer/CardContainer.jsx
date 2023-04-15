import Card from "../Card/Card";
import users from "../../assets/db/users.json";
import s from "./CardContainer.module.css";

export default function CardContainer() {
  return (
    <div className={s.wrapper}>
      {users.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
}
