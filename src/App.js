import React, { useState, useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchContext } from "./Contexts/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getGenres, getMovies, getTrending } from "./redux/actions/moviesActions";
import FavoritesPage from "./Pages/FavoritesPage/FavoritesPage";
import TrendingPage from "./Pages/TrendingPage/TrendingPage";
import Loader from "./components/Loader/Loader";
import Nav from "./components/Nav/Nav";
import "./App.css";

const Home = lazy(() => import("./Pages/Home/Home"));
const Auth = lazy(() => import("./Pages/Auth/Auth"));
const MoviePage = lazy(() => import("./Pages/MoviePage/MoviePage"));

const App = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const moviesList_CP = useSelector((state) => state.movies.moviesList.currentPage);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getTrending("all", "week"));

    const params = { page: moviesList_CP };
    dispatch(getMovies("top_rated", { params }));
  }, []);

  const handleSearch = (e, text) => {
    e.preventDefault();
    setSearchText(text);
  };

  return (
    <Router>
      <SearchContext.Provider value={searchText}>
        <div className="app">
          <Nav onSearch={handleSearch} />
          <Suspense
            fallback={
              <div className="container">
                <Loader />
              </div>
            }
          >
            <Routes>
              <Route exact path="/movies/:movieId" element={<MoviePage />} />
              <Route exact path="/favorites" element={<FavoritesPage />} />
              <Route exact path="/trending" element={<TrendingPage />} />
              <Route exact path="/auth" element={<Auth />} />
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </div>
      </SearchContext.Provider>
    </Router>
  );
};

export default App;
