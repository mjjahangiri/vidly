import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

export default function Paginate({ totalPage, onClick, currentPage }) {
  const Pages = _.range(1, totalPage + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul
        className={`pagination justify-content-end ${
          totalPage === 1 ? "d-none" : ""
        }`}
      >
        {Pages.map((page, i) => (
          <li
            key={i}
            className={`page-item item border ${
              currentPage === page ? "active" : ""
            }`}
          >
            <Link
              className="nav-link text-reset"
              to
              onClick={() => onClick(page)}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
