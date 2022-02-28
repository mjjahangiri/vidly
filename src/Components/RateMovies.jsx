import React from "react";
import NewMovieSection from "./NewMovieSection";

export default function Movies({ sorted, onClick }) {
  return (
    <ul className="d-flex flex-row align-items-start mb-0 mt-2 w-100 justify-content-center px-0">
      <NewMovieSection
        link="/"
        year="2008"
        title="The Dark Knight"
        like={false}
        rate="9"
        background="https://digimovie.info/wp-content/uploads/2020/03/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._UX500.jpg"
        onClick={onClick}
      />
      <NewMovieSection
        link="/"
        year="20021"
        title="Drive my car"
        like={false}
        rate="7.9"
        background="https://digimovie.info/wp-content/uploads/2021/12/MV5BYTQ0MmJiODMtOGQ5Ni00OTUzLWI0ODUtYjM1YTA1NTMzODc0XkEyXkFqcGdeQXVyODgzNDIwODA@._V1_SX500.jpg"
        onClick={onClick}
      />
      <NewMovieSection
        link="/"
        year="2015"
        title="The True Cost"
        like={false}
        rate="7.7"
        background="https://digimovie.info/wp-content/uploads/2022/02/MV5BNWYxODkyOTYtNjJkMy00MTlkLTgzM2QtZWMzNGIxOGQ4NDJmXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_SX500.jpg"
        onClick={onClick}
      />
      <NewMovieSection
        link="/"
        year="2016"
        title="Doctor Strange"
        like={false}
        rate="7.5"
        background="https://digimovie.info/wp-content/uploads/2019/07/Doctor-Strange.jpg"
        onClick={onClick}
      />
    </ul>
  );
}
