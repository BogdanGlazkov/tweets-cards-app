import { useState, useEffect } from "react";
import users from "../../assets/db/users.json";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import s from "./CardContainer.module.css";

const pageSize = 12;

export default function CardContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(false);
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
      setFilteredUsers(filteredUsers);
    } else if (option === "false") {
      const filteredId = [];
      for (let i = 0; i < localStorage.length; i++) {
        const userId = localStorage.key(i);
        if (localStorage.getItem(userId) === "false") {
          filteredId.push(userId);
        }
      }
      const filteredUsers = users.filter((user) =>
        filteredId.includes(user.id)
      );
      setFilteredUsers(filteredUsers);
    } else {
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
        trigger={<button onClick={onDropdown}>Choose option &#129031;</button>}
        menu={[
          <button onClick={() => onDropdownMenu("true")}>
            Show following
          </button>,
          <button onClick={() => onDropdownMenu("false")}>
            Show not following
          </button>,
          <button onClick={() => onDropdownMenu("all")}>Show all</button>,
        ]}
      />
      <div className={s.wrapper}>
        {currentUsers.map((user) => {
          return <Card key={user.id} user={user} />;
        })}
      </div>
      {currentPage >= lastPage ? null : (
        <button
          className={s.loadMoreBtn}
          type="button"
          onClick={onLoadMore}
          // disabled={currentPage >= lastPage}
        >
          Load More
        </button>
      )}
    </>
  );
}
