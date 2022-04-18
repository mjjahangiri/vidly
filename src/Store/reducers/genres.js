import url from "../../config.json";
import axios from "axios";

// Action Type
const LIST_GENRES = "ListGenres";

// Reducer
export default async function GenresReducer(genres = [], action) {
  if (action.type === LIST_GENRES) {
    const { apiUrl } = url;
    const { data } = await axios.get(`${apiUrl}/Genres`);
    const state = { ...genres, ...data };
    return state;
  } else return genres;
}
