import url from "../../config.json";
import axios from "axios";

// Action type
const LIKE_MOVIE = "LikeMovie";
const DELETE_MOVIE = "DeleteMovie";
const LIST_MOVIES = "ListMovies";

// Reducer
export default async function MoviesReducer(movies = [], action) {
  if (action.type === LIKE_MOVIE) {
    const { apiUrl } = url;
    const movie = action.payload.movie;
    const movieBody = { ...movie };
    movieBody.like = !movieBody.like;
    await axios.put(`${apiUrl}/Movies/${movie.id}`, movieBody, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const { data } = await axios.get(`${apiUrl}/Movies`);
    const state = { ...movies, ...data };
    return state;
  } else if (action.type === DELETE_MOVIE) {
    const { apiUrl } = url;
    const movie = action.payload.movie;
    if (window.confirm("آیا برای حذف مطمپن هستید؟")) {
      await axios.delete(`${apiUrl}/Movies/${movie.id}`);

      const { data } = await axios.get(`${apiUrl}/Movies`);
      const state = { ...movies, ...data };
      return state;
    }
    return movies;
  } else if (action.type === LIST_MOVIES) {
    const { apiUrl } = url;
    const { data } = await axios.get(`${apiUrl}/Movies`);
    const state = { ...movies, ...data };
    return state;
  } else {
    return movies;
  }
}
