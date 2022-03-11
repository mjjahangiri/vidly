import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import * as _ from "lodash";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Favorite from "./Pages/Favorite";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Movie from "./Pages/Movie";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import Header from "./Components/Header";
import { paginate } from "./Components/Paginate";
import Logout from "./Components/Logout";
import ChangePassword from "./Components/ChangePassword";

export async function authHandle(url, state) {
  try {
    const response = await axios.post(url, state.data);
    const jwt = response.data.accessToken;
    localStorage.setItem("token", jwt);
    window.location = "/";
  } catch (ex) {
    if (ex.response && ex.response.status === 400) {
      const errors = { ...state.errors };
      if (ex.response.data === "Incorrect password")
        errors.password = ex.response.data;
      else {
        errors.email = ex.response.data;
      }
      return errors;
    }
  }
}
export default class App extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    selectedGenre: "All Genres",
    sorted: { path: "title", order: "asc" },
    user: [],
    movie: {},
    currentUser: "",
  };

  async componentDidMount() {
    const { data: movies } = await axios.get(
      "https://my-json-server.typicode.com/mjjahangiri/json-database/Movies"
    );
    const { data: genres } = await axios.get(
      "https://my-json-server.typicode.com/mjjahangiri/json-database/Genres"
    );

    const allGenres = [
      {
        id: "_",
        ENname: "All Genres",
        FAname: "همه ژانرها",
      },
      ...genres,
    ];

    this.setState({ movies, genres: allGenres });
    this.userHandle();
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
    await axios.patch(
      `https://my-json-server.typicode.com/mjjahangiri/json-database/Movies/${movie.id}`,
      { like: movieBody.like }
    );
    const { data: movies } = await axios.get(
      "https://my-json-server.typicode.com/mjjahangiri/json-database/Movies"
    );
    this.setState({ movies });
  };

  handleDelete = async (movie) => {
    if (window.confirm("آیا برای حذف مطمپن هستید؟")) {
      await axios.delete(
        `https://my-json-server.typicode.com/mjjahangiri/json-database/Movies/${movie.id}`
      );
      const { data: movies } = await axios.get(
        "https://my-json-server.typicode.com/mjjahangiri/json-database/Movies"
      );
      this.setState({ movies });
    }
    return;
  };

  movieHandle = async (id) => {
    const { data } = await axios.get(
      `https://my-json-server.typicode.com/mjjahangiri/json-database/movies/${id}`
    );
  };

  userHandle = async () => {
    const jwt = localStorage.getItem("token");
    if (!jwt) return;
    const user = jwtDecode(jwt);
    const { data } = await axios.get(
      `https://my-json-server.typicode.com/mjjahangiri/json-database/users/${user.sub}`
    );
    this.setState({ currentUser: data });
  };

  render() {
    const {
      movies,
      genres,
      currentUser,
      currentPage,
      pageSize,
      selectedGenre,
      sorted,
    } = this.state;
    const filtered =
      selectedGenre === "All Genres"
        ? movies
        : movies.filter((movie) => movie.genre === selectedGenre);
    const sortMovie = _.orderBy(filtered, sorted.path, sorted.order);
    const totalPage = Math.ceil(sortMovie.length / 4);
    const data = paginate(sortMovie, currentPage, pageSize);
    const favoriteMovie = movies.filter((movie) => movie.like === true);
    return (
      <>
        <Header user={currentUser} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                movies={movies}
                user={currentUser}
                onLike={this.handleLike}
                onClick={this.handleGenre}
                genres={genres}
              />
            }
          />
          <Route
            path="/vidly"
            exact
            element={
              <Home
                movies={movies}
                user={currentUser}
                onLike={this.handleLike}
                onClick={this.handleGenre}
                genres={genres}
              />
            }
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
                user={currentUser}
                sorted={sorted}
                onSortClick={this.handleSort}
              />
            }
          />
          <Route
            path="/favorite"
            exact
            element={
              <Favorite
                movies={favoriteMovie}
                user={currentUser}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
              />
            }
          />
          <Route
            path="/login"
            exact
            element={<Login onSubmit={this.handleLogin} />}
          />
          <Route path="/register" exact element={<Register />} />
          <Route path="/logout" exact element={<Logout />} />
          <Route
            path="/profile"
            exact
            element={
              currentUser !== "" ? (
                <Profile user={currentUser} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/changepassword"
            exact
            element={
              currentUser !== "" ? (
                <ChangePassword user={currentUser} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/movie/:id"
            exact
            element={<Movie onLike={this.handleLike} />}
          />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </>
    );
  }
}
