import React from "react";
import Button from "./UI/Button";
import classes from "./Pagination.module.css";

const Pagination = ({ url, pages, onPrev, onNext, next, prev, onNavigate }) => {
  const pageItems = [];
  const regDigit = /\d+/;
  var pageNumber = url.match(regDigit)[0];
  for (var i = 1; i <= pages; i++) {
    pageItems.push(
      <li
        key={i}
        className={`page-item ${i === +pageNumber ? `${classes.active}` : ""}`}
      >
        <span onClick={onNavigate.bind(this, i)} className="page-link">
          {i}
        </span>
      </li>
    );
  }

  return (
    <nav aria-label="navigation" className={classes.nav}>
      <ul className={`pagination justify-content-center ${classes.pagination}`}>
        {pageItems}
      </ul>
      <ul className={`pagination justify-content-center ${classes.pagination}`}>
        {pages ? (
          <React.Fragment>
            <li className="page-item">
              <Button
                disabled={prev ? false : true}
                className="page-link"
                onClick={onPrev}
              >
                Prev
              </Button>
            </li>
            <li className="page-item">
              <Button
                disabled={next ? false : true}
                className="page-link"
                onClick={onNext}
              >
                Next
              </Button>
            </li>
          </React.Fragment>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
