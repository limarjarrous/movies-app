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
  VIDEOS,
  SEARCH,
  LOADING,
  ERROR,
} from "../actions/actionTypes";

const initialState = {
  moviesList: {
    currentPage: 1,
    total_pages: null,
    total_results: null,
    results: [],
  },
  trendingList: {
    currentPage: 1,
    total_pages: null,
    total_results: null,
    results: [],
  },
  moviesByGenreList: {
    currentPage: 1,
    total_pages: null,
    total_results: null,
    results: [],
  },
  tvList: {
    currentPage: 1,
    total_pages: null,
    total_results: null,
    results: [],
  },
  genresList: [],
  similarList: {
    total_pages: null,
    total_results: null,
    results: [],
  },
  recommendationList: {
    total_pages: null,
    total_results: null,
    results: [],
  },
  details: {},
  videos: [],
  search: [],
  credits: {
    directors: [],
    cast: [],
  },
  loading: false,
  error: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_LIST:
      return {
        ...state,
        loading: false,
        moviesList: {
          ...state.moviesList,
          currentPage: state.moviesList.currentPage + 1,
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
          results: [...state.moviesList.results, ...action.payload.results],
        },
      };
    case TRENDING:
      return {
        ...state,
        loading: false,
        trendingList: {
          ...state.trendingList,
          currentPage: state.trendingList.currentPage + 1,
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
          results: [...state.trendingList.results, ...action.payload.results],
        },
      };
    case MOVIES_BY_GENRE:
      return {
        ...state,
        loading: false,
        moviesByGenreList: {
          ...state.moviesByGenreList,
          currentPage: state.moviesByGenreList.currentPage + 1,
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
          results: [...state.moviesByGenreList.results, ...action.payload.results],
        },
      };
    case TV_LIST:
      return {
        ...state,
        loading: false,
        tvList: action.data,
      };
    case GENRES:
      return {
        ...state,
        loading: false,
        genresList: action.payload,
      };
    case DETAILS:
      return {
        ...state,
        loading: false,
        details: action.payload,
      };
    case SIMILAR:
      return {
        ...state,
        loading: false,
        similarList: {
          ...state.similarList,
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
          results: action.payload.results,
        },
      };
    case RECOMMENDATIONS:
      return {
        ...state,
        loading: false,
        recommendationList: {
          ...state.recommendationList,
          total_pages: action.payload.total_pages,
          total_results: action.payload.total_results,
          results: action.payload.results,
        },
      };
    case CREDITS:
      return {
        ...state,
        loading: false,
        credits: {
          ...state.credits,
          cast: action.payload.cast,
          directors: action.payload.directors,
        },
      };
    case VIDEOS:
      return {
        ...state,
        loading: false,
        videos: action.payload,
      };
    case SEARCH:
      return {
        ...state,
        loading: false,
        search: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
