import React from "react";
import NewMovieSection from "./NewMovieSection";

export default function Movies({ sorted, onClick }) {
  return (
    <ul className="d-flex flex-row align-items-start mb-0 mt-2 w-100 justify-content-center px-0">
      <NewMovieSection
        link="/"
        year="2022"
        title="No Exit"
        like={false}
        rate="6.1"
        background="https://digimovie.info/wp-content/uploads/2022/02/61f9720a84bff.jpg"
        onClick={onClick}
      />
      <NewMovieSection
        link="/"
        year="2022"
        title="Fire Heart"
        like={false}
        rate="6.2"
        background="https://digimovie.info/wp-content/uploads/2022/02/MV5BMGM5ZTFmYWQtMGRiOS00YzI1LTkyMzAtNGIzNWFjZmFlYTFhXkEyXkFqcGdeQXVyMTAxNDE3MTE5._V1_SX500.jpg"
        onClick={onClick}
      />
      <NewMovieSection
        link="/"
        year="2022"
        title="Special Delivery"
        like={false}
        rate="6.5"
        background="https://digimovie.info/wp-content/uploads/2022/02/MV5BZDg2NGUyODgtM2E3Yi00NmJiLWEzM2ItMjFlODNhZTk2NWM3XkEyXkFqcGdeQXVyMTQ3MjI2NDI2._V1_SX500.jpg"
        onClick={onClick}
      />
      <NewMovieSection
        link="/"
        year="2022"
        title="The House"
        like={false}
        rate="6.9"
        background="https://digimovie.info/wp-content/uploads/2022/02/MV5BOWM4NDgyN2QtN2UzNS00Y2YyLWJjMTgtNjljNjk2MmJjMjdmXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX500.jpg"
        onClick={onClick}
      />
    </ul>
  );
}
