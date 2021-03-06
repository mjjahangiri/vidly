import React from "react";
import NewMovieSection from "./NewMovieSection";

export default function Movies({ movies, onClick }) {
  const RateMovies = movies.slice(0, 4);
  return (
    <ul className="d-flex flex-row align-items-start mb-0 flex-wrap w-100 justify-content-center px-0 gap-2">
      {RateMovies.map((movie, i) => (
        <NewMovieSection movie={movie} key={i} onClick={onClick} />
      ))}
    </ul>
  );
}
