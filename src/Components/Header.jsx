import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rtl p-1">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Vidly
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                صفحه اصلی
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">
                فیلم ها
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/favorite">
                موردعلاقه ها
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/login">
                ورود
              </NavLink>
            </li>
            <span>/</span>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                عضویت
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
