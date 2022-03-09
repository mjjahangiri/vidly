import React from "react";
import GenreSection from "../Components/GenreSection";

export default function Genres({ onClick, genres }) {
  console.log(genres);
  const filteredGenres = genres.filter((genre) => genre.id !== "_");
  return (
    <>
      <hr className="w-50 my-0 mx-auto" />
      <div className="p-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="py-2 px-3 m-0 d-inline-flex">ژانرها</h6>
        <ul className="d-flex flex-row align-items-start mb-0 mt-2 w-100 justify-content-center px-5 flex-wrap">
          {filteredGenres.map((genre, i) => (
            <GenreSection
              link="/movies"
              onClick={onClick}
              genre={genre}
              key={i}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
