import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getMoviesByGenre } from "../../redux/actions/moviesActions";
import ListCards from "../../components/ListCards/ListCards";
import Carousel from "../../components/Carousel/Carousel";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  let [filtered, setFiltered] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genresList = useSelector((state) => state.movies.genresList);
  const moviesList = useSelector((state) => state.movies.moviesList.results);
  const trendingList = useSelector((state) => state.movies.trendingList.results);
  const moviesList_CP = useSelector((state) => state.movies.moviesList.currentPage);
  const moviesByGenreList = useSelector((state) => state.movies.moviesByGenreList.results);
  const moviesByGenreList_CP = useSelector((state) => state.movies.moviesByGenreList.currentPage);

  const handleSelectGenre = (item) => {
    let newGenres = selectedGenres.includes(item)
      ? selectedGenres.filter((genre) => genre !== item)
      : [...selectedGenres, item];
    setSelectedGenres(newGenres);
  };

  const handleFilterByGenre = () => {
    const params = { page: moviesByGenreList_CP, with_genres: selectedGenres };
    dispatch(getMoviesByGenre({ params }));
    setFiltered(selectedGenres.length ? true : false);
  };

  const handleLoadMore = () => {
    if (filtered) {
      const params = { page: moviesByGenreList_CP, with_genres: selectedGenres };
      dispatch(getMoviesByGenre({ params }));
    } else {
      const params = { page: moviesList_CP };
      dispatch(getMovies("top_rated", { params }));
    }
  };

  return (
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
            title={"Top-rated Movies".toUpperCase()}
            movies={filtered ? moviesByGenreList : moviesList}
            onLoadMore={handleLoadMore}
            showMore
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
