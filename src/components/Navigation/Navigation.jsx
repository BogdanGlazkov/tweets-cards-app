import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FaceIcon from "@mui/icons-material/Face";
import { Trans } from "react-i18next";
import s from "./Navigation.module.css";

export default function Navigation() {
  const getActiveClassName = ({ isActive }) => {
    return isActive ? "visually-hidden" : s.link;
  };

  return (
    <div className={s.nav}>
      <NavLink end className={getActiveClassName} to="/">
        <ArrowBackIcon sx={{ mr: 1, fontSize: 36, fill: "currentcolor" }} />
        <p>
          <Trans i18nKey="back">Go back</Trans>
        </p>
      </NavLink>
      <NavLink className={getActiveClassName} to="/tweets">
        <FaceIcon sx={{ mr: 2.2, fontSize: 36, fill: "currentcolor" }} />
        <p>
          <Trans i18nKey="tweetsBtn">Tweets</Trans>
        </p>
      </NavLink>
    </div>
  );
}
