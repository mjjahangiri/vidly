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
import Header from "./Components/Header";
import axios from "axios";

export default class App extends Component {
  state = {
    movies: [],
    genres: [],
  };
  async componentDidMount() {
    const { data: movies } = await axios.get("http://localhost:3001/Movies");
    const { data: genres } = await axios.get("http://localhost:3001/Genres");

    this.setState({ movies, genres });
  }
  handleLike = async (movie) => {
    const movieBody = { ...movie };
    movieBody.like = !movieBody.like;
    await axios.put(`http://localhost:3001/Movies/${movie.id}`, movieBody);
  };
  render() {
    const { movies, genres } = this.state;
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
                movies={movies}
                onLike={this.handleLike}
                genres={genres}
              />
            }
          />
          <Route path="/favorite" exact element={<Favorite />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/movie/:id" exact element={<Movie />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </>
    );
  }
}
