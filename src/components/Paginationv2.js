import React from "react";
import classes from "./Pagination.module.css";

import useGetID from "../hooks/useGetID";

import { Link } from "react-router-dom";

const Paginationv2 = ({ total, page, resource }) => {
  const pages = Math.ceil(total / 10);
  const pageItems = [];
  const getPageID = useGetID();
  let checkPage = page ? page : `?page=${1}`;
  let pageID = +getPageID(checkPage);

  const next = pageID !== +pages ? `?page=${pageID + 1}` : "";
  const prev = pageID !== 1 ? `?page=${pageID - 1}` : "";

  for (var i = 1; i <= pages; i++) {
    let queryPage = `?page=${i}`;
    pageItems.push(
      <li
        key={i}
        className={`page-item ${
          queryPage === checkPage ? `${classes.active}` : ""
        }`}
      >
        <Link to={`/${resource}/?page=${i}`} className="page-link">
          {i}
        </Link>
      </li>
    );
  }

  if (total <= 10) return <div></div>;

  return (
    <nav aria-label="navigation" className={classes.nav}>
      <ul className={`pagination justify-content-center ${classes.pagination}`}>
        {pageItems}
      </ul>
      <ul className={`pagination justify-content-center ${classes.pagination}`}>
        {pages ? (
          <React.Fragment>
            <li className="page-item">
              <Link
                className={`page-link ${prev ? "" : `${classes.disabled}`}`}
                to={`/${resource}/${prev}`}
              >
                Prev
              </Link>
            </li>
            <li className="page-item">
              <Link
                className={`page-link ${next ? "" : `${classes.disabled}`}`}
                to={`/${resource}/${next}`}
              >
                Next
              </Link>
            </li>
          </React.Fragment>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

export default Paginationv2;
