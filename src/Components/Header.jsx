import React from "react";
import { Link, NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";

export default function Header({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rtl p-1 d-flex w-100 position-absolute top-0">
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
            <li className="nav-item">
              <NavLink className="nav-link" to="/favorite">
                موردعلاقه ها
              </NavLink>
            </li>
          </ul>
          {!user && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/login">
                  ورود
                </NavLink>
              </li>
              <span style={{ color: "#c1c1c1" }} className="px-1">
                /
              </span>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  عضویت
                </NavLink>
              </li>
            </ul>
          )}
          {user && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/login">
                  {user} عزیز
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  خروج
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
