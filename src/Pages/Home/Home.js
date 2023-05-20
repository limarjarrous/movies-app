import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getMoviesByGenre } from "../../redux/actions/moviesActions";
import CustomDrawer from "../../components/Drawer/CustomDrawer";
import TabsMenu from "../../components/TabsMenu/TabsMenu";
import Carousel from "../../components/Carousel/Carousel";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  const [tab, setTab] = useState("upcoming");
  const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genresList = useSelector((state) => state.movies.genresList);
  const trendingList = useSelector((state) => state.movies.trendingList);
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const moviesByGenreList = useSelector((state) => state.movies.moviesByGenreList);

  const handleSelectGenre = (item) => {
    let newGenres = selectedGenres.includes(item)
      ? selectedGenres.filter((genre) => genre !== item)
      : [...selectedGenres, item];
    setSelectedGenres(newGenres);
  };

  const handleFilterByGenre = () => {
    const params = { page: moviesByGenreList.currentPage, with_genres: selectedGenres };
    dispatch(getMoviesByGenre({ params }));
    setFiltered(selectedGenres.length ? true : false);
    setIsOpen(false);
  };

  const handleLoadMore = () => {
    if (filtered) {
      const params = { page: moviesByGenreList.currentPage, with_genres: selectedGenres };
      dispatch(getMoviesByGenre({ params }));
    } else {
      switch (tab) {
        case "upcoming": {
          let params = { page: upcomingMovies.currentPage };
          dispatch(getMovies("upcoming", { params }));
          break;
        }
        case "top_rated": {
          let params = { page: topRatedMovies.currentPage };
          dispatch(getMovies("top_rated", { params }));
          break;
        }
        case "popular": {
          let params = { page: popularMovies.currentPage };
          dispatch(getMovies("popular", { params }));
          break;
        }
        default: {
        }
      }
    }
  };

  const handleSelectTab = (_, selectedTab) => {
    setTab(selectedTab);
  };

  const handleToggleGenresFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="home_container">
      <Carousel trendingList={trendingList.results} />
      <div className="main_section">
        <section className="listcards_section">
          <CustomDrawer isOpen={isOpen} handleToggle={handleToggleGenresFilter}>
            <Sidebar
              genresList={genresList}
              selectedGenres={selectedGenres}
              onSelectGenre={handleSelectGenre}
              onFilterByGenre={handleFilterByGenre}
            />
          </CustomDrawer>
          <TabsMenu
            movies={
              filtered
                ? moviesByGenreList?.results
                : tab === "upcoming"
                ? upcomingMovies.results
                : tab === "popular"
                ? popularMovies.results
                : topRatedMovies.results
            }
            onLoadMore={handleLoadMore}
            onSelectTab={handleSelectTab}
            handleToggle={handleToggleGenresFilter}
            filtered={filtered}
            showMore
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
