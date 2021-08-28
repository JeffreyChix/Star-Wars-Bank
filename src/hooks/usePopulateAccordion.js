import React from "react";

import { Link } from "react-router-dom";

const usePopulateAccordion = () => {
  const format = (tag, cat, list = true, displayText = "") => {
    const formatted = tag.dataLoading ? (
      <div className="text-center fa-3x">
        <i className="fas fa-cog fa-spin text-white"></i>
      </div>
    ) : tag.data.length >= 1 ? (
      tag.data.map((dataItem) => {
        if (list) {
          return (
            <li key={dataItem.id}>
              <Link to={`/${cat}/${+dataItem.id}`}>{dataItem.name}</Link>
            </li>
          );
        } else {
          return dataItem.name !== "unknown" ? (
            <Link key={dataItem.id} to={`/${cat}/${+dataItem.id}`}>{dataItem.name}</Link>
          ) : (
            <span key="unknown">unknown</span>
          );
        }
      })
    ) : (
      <div className="text-center">
        <p>No {displayText ? displayText : cat} found!</p>
      </div>
    );

    return formatted;
  };

  return format;
};

export default usePopulateAccordion;
