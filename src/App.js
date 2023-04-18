import { useState, lazy, Suspense } from "react";
import { SearchContext } from "./Contexts/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavoritesPage from "./Pages/FavoritesPage/FavoritesPage";
import Loader from "./components/Loader/Loader";
import Nav from "./components/Nav/Nav";
import "./App.css";

const Home = lazy(() => import("./Pages/Home/Home"));
const Auth = lazy(() => import("./Pages/Auth/Auth"));
const MoviePage = lazy(() => import("./Pages/MoviePage/MoviePage"));

const App = () => {
  const [searchText, setSearchText] = useState("");

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
              <Route exact path="/favourites" element={<FavoritesPage />} />
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
