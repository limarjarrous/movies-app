import React, { useState, useEffect, lazy, Suspense } from "react";
import { SearchContext } from "./Contexts/Context";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getGenres, getMovies, getTrending } from "./redux/actions/moviesActions";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import Toast from "./components/Toast/Toast";
import Nav from "./components/Nav/Nav";
import "./App.css";

const Home = lazy(() => import("./Pages/Home/Home"));
const Auth = lazy(() => import("./Pages/Auth/Auth"));
const MoviePage = lazy(() => import("./Pages/MoviePage/MoviePage"));
const TrendingPage = lazy(() => import("./Pages/TrendingPage/TrendingPage"));
const FavoritesPage = lazy(() => import("./Pages/FavoritesPage/FavoritesPage"));

const App = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const popularMovies_CP = useSelector((state) => state.movies.popularMovies.currentPage);
  const upcomingMovies_CP = useSelector((state) => state.movies.upcomingMovies.currentPage);
  const topRatedMovies_CP = useSelector((state) => state.movies.topRatedMovies.currentPage);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getTrending("movie", "week"));

    let params = { page: topRatedMovies_CP };
    dispatch(getMovies("top_rated", { params }));
    params = { page: upcomingMovies_CP };
    dispatch(getMovies("upcoming", { params }));
    params = { page: popularMovies_CP };
    dispatch(getMovies("popular", { params }));
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
            <div className="page_content">
              <Routes>
                <Route exact path="/movies/:movieId" element={<MoviePage />} />
                <Route exact path="/favorites" element={<FavoritesPage />} />
                <Route exact path="/trending" element={<TrendingPage />} />
                <Route exact path="/auth" element={<Auth />} />
                <Route exact path="/" element={<Home />} />
              </Routes>
            </div>
          </Suspense>
          <Footer />
          <Toast />
        </div>
      </SearchContext.Provider>
    </Router>
  );
};

export default App;
