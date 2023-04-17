import queryString from "query-string";
import apiConfig from "./apiConfig";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
});

const category = {
  movie: "movie",
  tv: "tv",
};

const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const tmdbApi = {
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = category[cate] + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },
  search: (cate, params) => {
    const url = "search/" + category[cate];
    return axiosClient.get(url, params);
  },
  getDetails: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return axiosClient.get(url, params);
  },
  getCredits: (cate, id) => {
    const url = category[cate] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },
  getSimilar: (cate, id) => {
    const url = category[cate] + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
  getRecommendations: (cate, id) => {
    const url = category[cate] + "/" + id + "/recommendations";
    return axiosClient.get(url, { params: {} });
  },
  getTrending: (mediaType, timeWindow) => {
    const url = `/trending/${mediaType}/${timeWindow}`;
    return axiosClient.get(url, { params: {} });
  },
  getMoviesByGenre: (genresIds) => {
    const url = `/discover/movie`;
    return axiosClient.get(url, { params: { with_genres: genresIds } });
  },
  getGenres: () => {
    const url = `/genre/movie/list`;
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
