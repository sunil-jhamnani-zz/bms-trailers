import { STORE_LANGUAGES, STORE_MOVIES, TOGGLE_VIDEO_STATE, UPDATE_FILTER } from "../actionTypes/movieDataActionTypes";

export const StoreLanguages = languages => ({
  type: STORE_LANGUAGES,
  payload: {
    languages
  }
});

export const StoreMovies = movies => ({
  type: STORE_MOVIES,
  payload: {
    movies
  }
});

export const ToggleVideoState = movieId => ({
  type: TOGGLE_VIDEO_STATE,
  payload: {
    movieId
  }
});

export const UpdateFilters = (filter, type) => ({
  type: UPDATE_FILTER,
  payload: {
    filter,
    type
  }
});