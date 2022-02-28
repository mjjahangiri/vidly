import React from "react";
import { Link } from "react-router-dom";

export default function MovieSection({
  link,
  background,
  title,
  year,
  like,
  rate,
  onClick,
}) {
  return (
    <Link to={link} className="text-decoration-none text-reset mx-auto">
      <li className="d-flex flex-column justify-content-between text-center">
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="movieSection text-center d-flex align-items-center justify-content-center flex-column text-light position-relative"
        >
          <div className="movieContent">
            <div className="movieOverlay"></div>
            <div className="d-flex position-absolute top-0 pt-4 justify-content-around w-100 ">
              <span className="d-flex" onClick={onClick}>
                {like ? (
                  <i className="bi bi-heart-fill"></i>
                ) : (
                  <i className="bi bi-heart"></i>
                )}
              </span>
              <span className="d-flex">{rate}</span>
            </div>
            <div className="d-flex position-absolute bottom-0 pb-3 flex-column justify-content-around w-100 ">
              <p className="small px-2 m-0">{title}</p>
              <p className="px-2 m-0">{year}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
}
