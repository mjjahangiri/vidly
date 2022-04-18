import { combineReducers } from "redux";
import GenresReducer from "./genres";
import CurrentPageReducer from "./currentPage";
import MoviesReducer from "./movies";
import PageSizeReducer from "./PageSize";
import SelectedGenresReducer from "./selectedGenres";
import SortedReducer from "./sorted";
import UsersReducer from "./user";

export default combineReducers({
  genres: GenresReducer,
  movies: MoviesReducer,
  currentPage: CurrentPageReducer,
  selectedGenre: SelectedGenresReducer,
  sorted: SortedReducer,
  pageSize: PageSizeReducer,
  user: UsersReducer,
});
