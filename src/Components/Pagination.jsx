import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

export default function Paginate({ totalPage }) {
  const Pages = _.range(1, totalPage + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li className="page-item item border">
          <Link className="nav-link text-reset" to aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>
        {Pages.map((page, i) => (
          <li key={i} className="page-item item border">
            <Link className="nav-link text-reset" to>
              {page}
            </Link>
          </li>
        ))}
        <li className="page-item item border">
          <Link className="nav-link text-reset" to aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
