import React from "react";
import { Link } from "react-router-dom";

export default function GenreSection({ link, genre, onClick }) {
  return (
    <Link
      to={link}
      onClick={() => onClick(genre)}
      className="text-decoration-none text-reset genreLink mx-auto"
    >
      <li className="d-flex flex-column justify-content-between mx-2 text-center">
        <p className="my-2 mx-0">{genre.FAname}</p>
      </li>
    </Link>
  );
}
