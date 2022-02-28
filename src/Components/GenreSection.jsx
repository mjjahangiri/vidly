import React from "react";
import { Link } from "react-router-dom";

export default function GenreSection({ link, genre }) {
  return (
    <Link
      to={link}
      className="text-decoration-none text-reset genreLink mx-auto"
    >
      <li className="d-flex flex-column justify-content-between mx-2 text-center">
        <p className="my-2 mx-0">{genre}</p>
      </li>
    </Link>
  );
}
