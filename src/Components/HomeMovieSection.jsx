import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieSection({ link, title, year }) {
  return (
    <Link to={link} className="text-decoration-none text-reset mx-auto">
      <li className="d-flex flex-column justify-content-between text-center">
        <div className="movieSection text-center d-flex align-items-center justify-content-center flex-column text-light">
          <p className="small p-2 m-0">{title}</p>
          <p className="p-2 m-0">{year}</p>
        </div>
      </li>
    </Link>
  );
}
