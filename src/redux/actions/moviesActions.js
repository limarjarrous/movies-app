import tmdbApi from "../../api/tmdbApi";
import {
  MOVIES_BY_GENRE,
  RECOMMENDATIONS,
  MOVIES_LIST,
  TRENDING,
  TV_LIST,
  GENRES,
  DETAILS,
  SIMILAR,
  CREDITS,
  // VIDEOS,
  // SEARCH,
  LOADING,
  ERROR,
} from "./actionTypes";

const moviesList = (data) => {
  return {
    type: MOVIES_LIST,
    payload: data,
  };
};
const tvList = (data) => {
  return {
    type: TV_LIST,
    payload: data,
  };
};
// const videosList = (data) => {
//   return {
//     type: VIDEOS,
//     payload: data,
//   };
// };
const similarList = (data) => {
  return {
    type: SIMILAR,
    payload: data,
  };
};
const recommendationList = (data) => {
  return {
    type: RECOMMENDATIONS,
    payload: data,
  };
};
const credits = (directors, cast) => {
  return {
    type: CREDITS,
    payload: {
      directors,
      cast,
    },
  };
};
const details = (data) => {
  return {
    type: DETAILS,
    payload: data,
  };
};
const trendingList = (data) => {
  return {
    type: TRENDING,
    payload: data,
  };
};
const moviesByGenreList = (data) => {
  return {
    type: MOVIES_BY_GENRE,
    payload: data,
  };
};
// const search = (data) => {
//   return {
//     type: SEARCH,
//     payload: data,
//   };
// };
const genresList = (data) => {
  return {
    type: GENRES,
    payload: data,
  };
};
const loading = () => {
  return {
    type: LOADING,
  };
};
const error = (message) => {
  return {
    type: ERROR,
    payload: { message: message },
  };
};

export const getMovies = (type, params) => {
  return async (dispatch) => {
    dispatch(loading());
    let response = await tmdbApi.getMoviesList(type, params);
    // console.log(response);
    if (response.status === 200) {
      dispatch(moviesList(response.data));
    } else {
      dispatch(error(response.error));
    }
  };
};

export const getTvShows = (type, params) => {
  return async (dispatch) => {
    dispatch(loading());
    let response = await tmdbApi.getTvList(type, params);
    // console.log(response);
    if (response.status === 200) {
      dispatch(tvList(response.data));
    } else {
      dispatch(error(response.error));
    }
  };
};

export const getSimilar = (category, id) => {
  return async (dispatch) => {
    dispatch(loading());
    let response = await tmdbApi.getSimilar(category, id);
    // console.log(response);
    if (response.status === 200) {
      dispatch(similarList(response.data));
    } else {
      dispatch(error(response.error));
    }
  };
};

export const getRecommendations = (category, id) => {
  return async (dispatch) => {
    dispatch(loading());
    let response = await tmdbApi.getRecommendations(category, id);
    // console.log(response);
    if (response.status === 200) {
      dispatch(recommendationList(response.data));
    } else {
      dispatch(error(response.error));
    }
  };
};

export const getCredits = (category, id) => {
  return async (dispatch) => {
    dispatch(loading());
    let response = await tmdbApi.getCredits(category, id);
    // console.log(response);
    if (response.status === 200) {
      let directors = response.data.crew.filter((member) => member.job === "Director");
      dispatch(credits(directors, response.data.cast));
    } else {
      dispatch(error(response.error));
    }
  };
};

export const getDetails = (category, id, params) => {
  return async (dispatch) => {
    dispatch(loading());
    let response = await tmdbApi.getDetails(category, id, params);
    // console.log(response);
    if (response.status === 200) {
      dispatch(details(response.data));
    } else {
      dispatch(error(response.error));
    }
  };
};

export const getTrending = (mediaType, timeWindow) => {
  return async (dispatch) => {
    dispatch(loading());
    let response = await tmdbApi.getTrending(mediaType, timeWindow);
    // console.log(response);
    if (response.status === 200) {
      dispatch(trendingList(response.data));
    } else {
      dispatch(error(response.error));
    }
  };
};

export const getMoviesByGenre = (params) => {
  return async (dispatch) => {
    dispatch(loading());
    let response = await tmdbApi.getMoviesByGenre(params);
    // console.log(response);
    if (response.status === 200) {
      dispatch(moviesByGenreList(response.data));
    } else {
      dispatch(error(response.error));
    }
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    dispatch(loading());
    let response = await tmdbApi.getGenres();
    // console.log(response);
    if (response.status === 200) {
      dispatch(genresList(response.data.genres));
    } else {
      dispatch(error(response.error));
    }
  };
};
