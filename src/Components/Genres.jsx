import React from 'react';
import GenreSection from '../Components/GenreSection';

export default function Genres() {
  return (
    <>
      <h6 className="py-2 px-3 m-0 d-inline-flex">ژانرها</h6>
      <ul className="d-flex flex-row align-items-start mb-0 mt-2 w-100 justify-content-center px-5">
        <GenreSection link="/" genre="اکشن" />
        <GenreSection link="/" genre="کمدی" />
        <GenreSection link="/" genre="درام" />
        <GenreSection link="/" genre="انیمیشن" />
        <GenreSection link="/" genre="خانوادگی" />
      </ul>
    </>
  );
}
