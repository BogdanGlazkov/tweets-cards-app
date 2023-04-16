import { useState, useEffect } from "react";
import users from "../../assets/db/users.json";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import s from "./CardContainer.module.css";

const pageSize = 12;
const dropdownText = {
  title: "Choose option",
  selected: "Show following",
  notSelected: "Show not following",
  all: "Show all",
};

export default function CardContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [filterText, setFilterText] = useState(dropdownText.title);
  const lastPage = Math.ceil(users.length / pageSize);

  const onLoadMore = (event) => {
    event.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  const onDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const onDropdownMenu = (option) => {
    if (option === "true") {
      const filteredId = [];
      for (let i = 0; i < localStorage.length; i++) {
        const userId = localStorage.key(i);
        if (localStorage.getItem(userId) === "true") {
          filteredId.push(userId);
        }
      }
      const filteredUsers = users.filter((user) =>
        filteredId.includes(user.id)
      );
      setFilterText(dropdownText.selected);
      setFilteredUsers(filteredUsers);
    } else if (option === "false") {
      const filteredId = [];
      for (let i = 0; i < localStorage.length; i++) {
        const userId = localStorage.key(i);
        if (localStorage.getItem(userId) === "true") {
          filteredId.push(userId);
        }
      }
      const filteredUsers = users.filter(
        (user) => !filteredId.includes(user.id)
      );
      setFilterText(dropdownText.notSelected);
      setFilteredUsers(filteredUsers);
    } else {
      setFilterText(dropdownText.all);
      setFilteredUsers(users);
    }
    setOpenDropdown(false);
  };

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    setCurrentUsers(filteredUsers.slice(0, lastPageIndex));
  }, [currentPage, filteredUsers]);

  return (
    <>
      <Dropdown
        open={openDropdown}
        trigger={<button onClick={onDropdown}>{filterText}</button>}
        menu={[
          <button onClick={() => onDropdownMenu("true")}>
            {dropdownText.selected}
          </button>,
          <button onClick={() => onDropdownMenu("false")}>
            {dropdownText.notSelected}
          </button>,
          <button onClick={() => onDropdownMenu("all")}>
            {dropdownText.all}
          </button>,
        ]}
      />
      <div className={s.wrapper}>
        {currentUsers.map((user) => {
          return <Card key={user.id} user={user} />;
        })}
      </div>
      {currentPage >= lastPage || currentUsers.length < pageSize ? null : (
        <button className={s.loadMoreBtn} type="button" onClick={onLoadMore}>
          Load More
        </button>
      )}
    </>
  );
}
