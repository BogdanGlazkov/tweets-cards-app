import { useState, useEffect } from "react";
import { Trans } from "react-i18next";
import users from "../../assets/db/users.json";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import s from "./CardContainer.module.css";

const pageSize = 12;
const dropdownText = {
  optionTitle: <Trans i18nKey="optionTitle">Choose option</Trans>,
  optionAll: <Trans i18nKey="optionAll">Show all</Trans>,
  optionFollow: <Trans i18nKey="optionFollow">Follow</Trans>,
  optionFollowings: <Trans i18nKey="optionFollowings">Followings</Trans>,
};

export default function CardContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [filterText, setFilterText] = useState(dropdownText.optionTitle);
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
      setFilterText(dropdownText.optionFollowings);
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
      setFilterText(dropdownText.optionFollow);
      setFilteredUsers(filteredUsers);
    } else {
      setFilterText(dropdownText.optionAll);
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
          <button onClick={() => onDropdownMenu("all")}>
            {dropdownText.optionAll}
          </button>,
          <button onClick={() => onDropdownMenu("false")}>
            {dropdownText.optionFollow}
          </button>,
          <button onClick={() => onDropdownMenu("true")}>
            {dropdownText.optionFollowings}
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
          <Trans i18nKey="loadMore">Load More</Trans>
        </button>
      )}
    </>
  );
}
