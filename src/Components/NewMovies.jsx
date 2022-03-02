import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import NewMoviesSection from "./NewMovieSection";

export default function Movies({ movies, onClick }) {
  const NewMovies = movies.slice(0, 4);
  return (
    <ul className="d-flex flex-row align-items-start mb-0 mt-2 w-100 justify-content-center px-0">
      {NewMovies.map((movie, i) => (
        <NewMoviesSection movie={movie} key={i} onClick={onClick} />
      ))}
    </ul>
  );
}
