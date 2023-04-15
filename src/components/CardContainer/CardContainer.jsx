import { useState, useEffect } from "react";
import users from "../../assets/db/users.json";
import Card from "../Card/Card";
import s from "./CardContainer.module.css";

const pageSize = 12;

export default function CardContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUsers, setCurrentUsers] = useState([]);
  const lastPage = Math.ceil(users.length / pageSize);

  const onLoadMore = (event) => {
    event.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    setCurrentUsers(users.slice(0, lastPageIndex));
  }, [currentPage]);

  return (
    <>
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
          disabled={currentPage >= lastPage}
        >
          Load More
        </button>
      )}
    </>
  );
}
