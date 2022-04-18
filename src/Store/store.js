import { createStore } from "redux";
import reducer from "./reducers/reducer";
// import MoviesReducer from "./reducers/";

const store = createStore(reducer);

export default store;
