import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGenres,
  getMovies,
  getMoviesByGenre,
  getTrending,
} from "../../redux/actions/moviesActions";
import ListCards from "../../components/ListCards/ListCards";
import Carousel from "../../components/Carousel/Carousel";
import Sidebar from "../../components/Sidebar/Sidebar";
import Loader from "../../components/Loader/Loader";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  let [page, setPage] = useState(1);
  let [filtered, setFiltered] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const loading = useSelector((state) => state.movies.loading);
  const genresList = useSelector((state) => state.movies.genresList);
  const moviesList = useSelector((state) => state.movies.moviesList.results);
  const trendingList = useSelector((state) => state.movies.trendingList.results);
  const moviesByGenreList = useSelector((state) => state.movies.moviesByGenreList.results);

  useEffect(() => {
    let params = {};
    dispatch(getTrending("all", "week"));

    params = { page };
    dispatch(getMovies("top_rated", { params }));
    setPage(page + 1);

    dispatch(getGenres());
  }, [dispatch, page]);

  const handleSelectGenre = (item) => {
    // console.log(item);
    let newGenres = selectedGenres.includes(item)
      ? selectedGenres.filter((genre) => genre !== item)
      : [...selectedGenres, item];
    setSelectedGenres(newGenres);
  };

  const handleFilterByGenre = () => {
    dispatch(getMoviesByGenre(selectedGenres));
    setFiltered(selectedGenres.length ? true : false);
  };

  const handleLoadMore = () => {
    const params = { page };
    dispatch(getMovies("top_rated", { params }));
    setPage(++page);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="home_container">
          <Carousel trendingList={trendingList} />
          <div className="main_section">
            <aside className="sidebar">
              <Sidebar
                genresList={genresList}
                selectedGenres={selectedGenres}
                onSelectGenre={handleSelectGenre}
                onFilterByGenre={handleFilterByGenre}
              />
            </aside>
            <section className="listcards_section">
              <ListCards
                movies={filtered ? moviesByGenreList : moviesList}
                onLoadMore={handleLoadMore}
              />
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
