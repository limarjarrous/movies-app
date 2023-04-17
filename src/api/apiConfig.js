const apiConfig = {
  baseURL: "https://api.themoviedb.org/3/",
  apiKey: "71b97cf638563c83fc6d948a41ca9dcb",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
