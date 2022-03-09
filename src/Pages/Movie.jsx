import React from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../Components/MovieDetail";

export default function Movie({ onLike }) {
  const { id } = useParams();
  return <MovieDetail id={id} onLike={onLike} />;
}
