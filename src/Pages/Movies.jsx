import React from "react";
import Pagination from "../Components/Pagination";
import Like from "../Components/Like";

export default function Movies({
  movies,
  genres,
  onLike,
  onDelete,
  onClick,
  currentPage,
  totalPage,
}) {
  return (
    <>
      <div className="pt-5 d-flex align-items-start rtl justify-content-center w-75 row mx-auto">
        <div className="col-2 p-0 my-5">
          <ul className="list-group p-0 text-center">
            {genres.map((genre, index) => (
              <li
                key={index}
                className="list-group-item nav-item"
                style={{ cursor: "pointer" }}
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
                <th scope="col">ردیف</th>
                <th scope="col">اسم</th>
                <th scope="col">ژانر</th>
                <th scope="col">سال</th>
                <th scope="col">امتیاز</th>
                <th scope="col">مورد علاقه</th>
                <th scope="col">حذف</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, index) => (
                <tr key={index}>
                  <td className="px-0 py-3 m-0">{movie.id}</td>
                  <td className="px-0 py-3 m-0">{movie.title}</td>
                  <td className="px-0 py-3 m-0">{movie.genre}</td>
                  <td className="px-0 py-3 m-0">{movie.year}</td>
                  <td className="px-0 py-3 m-0">{movie.rate}</td>
                  <td className="p-0 m-0">
                    <Like like={movie.like} onClick={() => onLike(movie)} />
                  </td>
                  <td className="p-0 m-0">
                    <i
                      className="bi bi-x-lg text-danger icon"
                      onClick={() => onDelete(movie)}
                    ></i>
                  </td>
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
