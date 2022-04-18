import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import * as _ from "lodash";
import * as actions from "./Store/actions";
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
import url from "../src/config.json";
import store from "./Store/store";

export async function authHandle(url, state) {
  try {
    const response = await axios.post(url, state.data);
    const jwt = response.data.accessToken;
    localStorage.setItem("token", jwt);
    window.location = "/vidly";
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
    currentPage: store.getState().currentPage,
    genres: [],
    movies: [],
    pageSize: store.getState().pageSize,
    selectedGenre: store.getState().selectedGenre,
    sorted: store.getState().sorted,
    currentUser: store.getState().user,
  };

  async componentDidMount() {
    store.dispatch({
      type: actions.LIST_MOVIES,
    });

    store.dispatch({
      type: actions.LIST_GENRES,
    });

    // this.setState(state);

    const { movies: AllMovies, genres: AllGenres } = await store.getState();

    const movies = _.toArray(await AllMovies);
    const genres = _.toArray(await AllGenres);
    const { apiUrl } = url;
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
  };

  handleSort = (name) => {
    store.dispatch({
      type: actions.SORTED_ITEMS,
      payload: {
        newName: name,
        lastName: this.state.sorted,
      },
    });

    const sorted = store.getState().sorted;
    this.setState({ sorted });
  };

  handleGenre = (genre) => {
    // Selected Genre
    store.dispatch({
      type: actions.SELECTED_GENRES,
      payload: {
        genre,
      },
    });

    // Reset Current page to 1
    store.dispatch({
      type: actions.RESET_PAGE,
    });

    const selectedGenre = store.getState().selectedGenre;
    const currentPage = store.getState().currentPage;

    this.setState({ selectedGenre, currentPage });
  };

  handlePage = (page) => {
    store.dispatch({
      type: actions.CHANGE_PAGE,
      payload: {
        page,
      },
    });

    const currentPage = store.getState().currentPage;
    this.setState({ currentPage });
  };

  // Complete with redux
  handleLike = async (movie) => {
    store.dispatch({
      type: actions.LIKE_MOVIE,
      payload: {
        movie,
      },
    });
    const movies = await store.getState().movies;
    this.setState({ movies });
  };

  // Complete with redux
  handleDelete = async (movie) => {
    store.dispatch({
      type: actions.DELETE_MOVIE,
      payload: {
        movie,
      },
    });
    const movies = await store.getState().movies;
    this.setState({ movies });
  };

  userHandle = async () => {
    store.dispatch({
      type: actions.AUTH_USER,
    });

    const user = await store.getState().user;
    this.setState({ currentUser: user });
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
        : _.filter(movies, (movie) => movie.genre === selectedGenre);
    const sortMovie = _.orderBy(filtered, sorted.path, sorted.order);
    const totalPage = Math.ceil(sortMovie.length / 4);
    const data = paginate(sortMovie, currentPage, pageSize);
    const favoriteMovie = _.filter(movies, (movie) => movie.like === true);
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
