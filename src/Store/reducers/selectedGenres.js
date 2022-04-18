// Action type
const SELECTED_GENRES = "SelectedGenres";

// Reducer
export default function SelectedGenresReducer(genre = "All Genres", action) {
  if (action.type === SELECTED_GENRES) {
    genre = action.payload.genre.ENname;
    return genre;
  } else return genre;
}
