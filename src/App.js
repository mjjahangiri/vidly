import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import * as _ from "lodash";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Favorite from "./Pages/Favorite";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Movie from "./Pages/Movie";
import NotFound from "./Pages/NotFound";
import axios from "axios";
import Header from "./Components/Header";
import { paginate } from "./Components/Paginate";

export default class App extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    selectedGenre: "All Genres",
    sorted: { path: "title", order: "asc" },
    user: [],
  };

  async componentDidMount() {
    const { data: movies } = await axios.get("http://localhost:3001/Movies");
    const { data: genres } = await axios.get("http://localhost:3001/Genres");

    const allGenres = [
      {
        id: "_",
        ENname: "All Genres",
        FAname: "همه ژانرها",
      },
      ...genres,
    ];

    this.setState({ movies, genres: allGenres });
  }

  handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  handleSort = (name) => {
    const { path, order } = this.state.sorted;
    const ord = order === "asc" ? "desc" : "asc";
    if (path === name) this.setState({ sorted: { path: name, order: ord } });
    else this.setState({ sorted: { path: name, order: "asc" } });
  };

  handleGenre = (genre) => {
    const selectedGenre = genre.ENname;
    const currentPage = 1;
    this.setState({ selectedGenre, currentPage });
  };

  handlePage = (page) => {
    const currentPage = page;
    this.setState({ currentPage });
  };

  handleLike = async (movie) => {
    const movieBody = { ...movie };
    movieBody.like = !movieBody.like;
    await axios.put(`http://localhost:3001/Movies/${movie.id}`, movieBody);
    const { data: movies } = await axios.get("http://localhost:3001/Movies");
    this.setState({ movies });
  };

  handleDelete = async (movie) => {
    if (window.confirm("آیا برای حذف مطمپن هستید؟")) {
      await axios.delete(`http://localhost:3001/Movies/${movie.id}`);
      const { data: movies } = await axios.get("http://localhost:3001/Movies");
      this.setState({ movies });
    }
    return;
  };

  render() {
    const { movies, genres, currentPage, pageSize, selectedGenre, sorted } =
      this.state;
    const filtered =
      selectedGenre === "All Genres"
        ? movies
        : movies.filter((movie) => movie.genre === selectedGenre);
    const sortMovie = _.orderBy(filtered, sorted.path, sorted.order);
    const totalPage = Math.ceil(sortMovie.length / 4);
    const data = paginate(sortMovie, currentPage, pageSize);

    return (
      <>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={<Home movies={movies} onLike={this.handleLike} />}
          />
          <Route
            path="/movies"
            exact
            element={
              <Movies
                movies={data}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                genres={genres}
                currentPage={currentPage}
                totalPage={totalPage}
                onClick={this.handlePage}
                selectedGenre={selectedGenre}
                onGenreClick={this.handleGenre}
                sorted={sorted}
                onSortClick={this.handleSort}
              />
            }
          />
          <Route path="/favorite" exact element={<Favorite />} />
          <Route
            path="/login"
            exact
            element={<Login onSubmit={this.handleLogin} />}
          />
          <Route path="/register" exact element={<Register />} />
          <Route path="/movie/:id" exact element={<Movie />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </>
    );
  }
}
