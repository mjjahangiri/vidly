import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Favorite from './Pages/Favorite';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Movie from './Pages/Movie';
import NotFound from './Pages/NotFound';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movies" exact element={<Movies />} />
        <Route path="/favorite" exact element={<Favorite />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/movie/:id" exact element={<Movie />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
