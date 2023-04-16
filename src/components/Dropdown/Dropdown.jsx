import s from "./Dropdown.module.css";

export default function Dropdown({ open, trigger, menu }) {
  return (
    <div className={s.dropdown}>
      {trigger}
      {!open ? null : (
        <ul className={s.dropdownMenu}>
          {menu.map((menuItem, index) => (
            <li key={index} className={s.dropdownItem}>
              {menuItem}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
