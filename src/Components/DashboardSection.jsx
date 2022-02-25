import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardSection({ icon, title, link }) {
  return (
    <Link to={link} className="text-decoration-none text-reset mx-auto">
      <li className="d-flex flex-column justify-content-between mx-2 text-center">
        {icon}
        <p className="my-2 mx-0">{title}</p>
      </li>
    </Link>
  );
}
