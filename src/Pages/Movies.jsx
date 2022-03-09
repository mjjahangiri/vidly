import React from "react";
import Pagination from "../Components/Pagination";
import Like from "../Components/Like";
import Sort from "../Components/Sort";
import { Link } from "react-router-dom";

export default function Movies({
  movies,
  genres,
  onLike,
  onDelete,
  onClick,
  currentPage,
  selectedGenre,
  onGenreClick,
  sorted,
  onSortClick,
  totalPage,
  user,
}) {
  return (
    <>
      <div className="pt-5 d-flex align-items-start rtl justify-content-center w-75 row mx-auto">
        <div className="col-2 p-0 my-5">
          <ul className="list-group p-0 text-center">
            {genres.map((genre, index) => (
              <li
                key={index}
                className={`list-group-item nav-item ${
                  selectedGenre === genre.ENname ? "active" : ""
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => onGenreClick(genre)}
              >
                {genre.FAname}
              </li>
            ))}
          </ul>
        </div>
        <div className="col my-5">
          <table className="table align-middle text-center">
            <thead>
              <tr>
                <th scope="col" className="col-4 px-0">
                  <Link
                    to
                    className="text-reset text-decoration-none d-flex justify-content-center"
                    onClick={() => onSortClick("title")}
                  >
                    اسم
                    <Sort sorted={sorted} name="title" />
                  </Link>
                </th>
                <th scope="col" className="col-2 px-0">
                  <Link
                    to
                    className="text-reset text-decoration-none d-flex justify-content-center"
                    onClick={() => onSortClick("genre")}
                  >
                    ژانر
                    <Sort sorted={sorted} name="genre" />
                  </Link>
                </th>
                <th scope="col" className="col-2 px-0">
                  <Link
                    to
                    className="text-reset text-decoration-none d-flex justify-content-center"
                    onClick={() => onSortClick("year")}
                  >
                    سال
                    <Sort sorted={sorted} name="year" />
                  </Link>
                </th>
                <th scope="col" className="col-2 px-0">
                  <Link
                    to
                    className="text-reset text-decoration-none d-flex justify-content-center"
                    onClick={() => onSortClick("rate")}
                  >
                    امتیاز
                    <Sort sorted={sorted} name="rate" />
                  </Link>
                </th>
                <th scope="col" className="col-1 px-0">
                  مورد علاقه
                </th>
                {user && (
                  <th scope="col" className="col-1 px-0">
                    حذف
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, index) => (
                <tr key={index}>
                  <td className="px-0 py-3 m-0">
                    <Link to={`/movie/${movie.id}`} className="text-reset">
                      {movie.title}
                    </Link>
                  </td>
                  <td className="px-0 py-3 m-0">{movie.genre}</td>
                  <td className="px-0 py-3 m-0">{movie.year}</td>
                  <td className="px-0 py-3 m-0">{movie.rate}</td>
                  <td className="p-0 m-0">
                    <Like like={movie.like} onClick={() => onLike(movie)} />
                  </td>
                  {user && (
                    <td className="p-0 m-0">
                      <i
                        className="bi bi-x-lg text-danger icon"
                        onClick={() => onDelete(movie)}
                      ></i>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            totalPage={totalPage}
            onClick={onClick}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
}
