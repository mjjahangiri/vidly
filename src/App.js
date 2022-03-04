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
    // sortedMovie:
  };
  async componentDidMount() {
    const { data: movies } = await axios.get("http://localhost:3001/Movies");
    const { data: genres } = await axios.get("http://localhost:3001/Genres");

    // const itemPerPage = Paginate(movies, 1, this.state.pageSize);

    this.setState({ movies, genres });
  }
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
    const { movies, genres, currentPage, pageSize } = this.state;
    const totalPage = Math.ceil(movies.length / 4);
    const data = paginate(movies, currentPage, pageSize);

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
