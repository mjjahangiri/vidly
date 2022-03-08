import React from "react";
import { Link } from "react-router-dom";
import Like from "../Components/Like";

export default function Favorite({ movies, user, onLike, onDelete }) {
  console.log(movies);
  return (
    <>
      <div className="pt-5 my-5 d-flex align-items-start rtl justify-content-center w-75 row mx-auto">
        <table className="table align-middle text-center">
          <thead className="table-dark">
            <tr>
              <th scope="col" className="col-4 px-0">
                اسم
              </th>
              <th scope="col" className="col-2 px-0">
                ژانر
              </th>
              <th scope="col" className="col-2 px-0">
                سال
              </th>
              <th scope="col" className="col-2 px-0">
                امتیاز
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
                <td className="px-0 py-3 m-0">{movie.title}</td>
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
      </div>
    </>
  );
}
