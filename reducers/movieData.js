import { STORE_LANGUAGES, STORE_MOVIES, TOGGLE_VIDEO_STATE, UPDATE_FILTER } from "../actionTypes/movieDataActionTypes";

const initialState = {
  languages: [],
  movies: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_LANGUAGES:
      return { ...state, languages: action.payload.languages };
    case STORE_MOVIES:
      return { ...state, movies: action.payload.movies };
    case TOGGLE_VIDEO_STATE:
      return { ...state, movieId: action.payload.movieId };
    case UPDATE_FILTER:
      return { ...state, filter: action.payload.filter, type: action.payload.type };
    default:
      return state;
  }
};