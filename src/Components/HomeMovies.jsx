import React from "react";
import HomeMovieSection from "./HomeMovieSection";

export default function Movies({ sorted }) {
  return (
    <ul className="d-flex flex-row align-items-start mb-0 mt-2 w-100 justify-content-center px-0">
      <HomeMovieSection link="/" year="2019" title="The Lion King" />
      <HomeMovieSection
        link="/"
        year="2018"
        title="Mowgli: Legend of the Jungle"
      />
      <HomeMovieSection link="/" year="2017" title="The LEGO Batman Movie" />
      <HomeMovieSection link="/" year="2016" title="Doctor Strange" />
    </ul>
  );
}
