import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import moviesReducer from "./reducers/moviesReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});
