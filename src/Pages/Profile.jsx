import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

export default function Profile({ user }) {
  return (
    <div className="pt-5 d-flex main align-items-center flex-column rtl justify-content-center w-100 mx-auto">
      <div className="row contain w-50 d-flex align-items-center my-5 justify-content-center bg-light">
        <div className="w-50 py-3 my-5 mx-auto flex-column d-flex align-items-center justify-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="260"
            height="260"
            fill="currentColor"
            className="bi bi-person-fill border border-1 border-dark rounded-circle"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <h4 className="mt-5 mb-0">
            {user.Fname} {user.Lname}
          </h4>
          <h5 className="mt-3 mb-0">{user.email}</h5>
          <Link to="/changepassword" className="mt-4 mb-0">
            <Button title="تغییر رمز عبور" />
          </Link>
          <Link to="/" className="mt-4 mb-0">
            <Button title="بازگشت" />
          </Link>
        </div>
      </div>
    </div>
  );
}
