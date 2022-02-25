import React from 'react';
import MovieSection from '../Components/MovieSection';

export default function Movies() {
  return (
    <ul className="d-flex flex-row align-items-start mb-0 mt-2 w-100 justify-content-center px-0">
      <MovieSection link="/" year="2019" title="The Lion King" />
      <MovieSection link="/" year="2018" title="Mowgli: Legend of the Jungle" />
      <MovieSection link="/" year="2017" title="The LEGO Batman Movie" />
      <MovieSection link="/" year="2016" title="Doctor Strange" />
    </ul>
  );
}
