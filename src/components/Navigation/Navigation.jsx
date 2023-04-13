import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FaceIcon from "@mui/icons-material/Face";
import s from "./Navigation.module.css";

export default function Navigation() {
  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  return (
    <div className={s.nav}>
      <NavLink end className={getActiveClassName} to="/">
        <ArrowBackIcon sx={{ mr: 1, fontSize: 36, fill: "currentcolor" }} />
        <p>Go back</p>
      </NavLink>
      <NavLink className={getActiveClassName} to="/tweets">
        <FaceIcon sx={{ mr: 1, fontSize: 36, fill: "currentcolor" }} />
        <p>Tweets</p>
      </NavLink>
    </div>
  );
}
