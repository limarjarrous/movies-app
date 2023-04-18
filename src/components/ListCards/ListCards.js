import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/actions/userActions";
import Button from "../Button/Button";
import Card from "../Card/Card";
import "./ListCards.css";

const ListCards = ({ title, movies, onLoadMore, showMore = false }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.user.favorites);

  // Filter Movies with Search
  // filteredMovies = filteredMovies.filter((movie) =>
  //   movie.title.toLowerCase().includes(searchText.toLowerCase())
  // );

  const handleLikeMovie = (movie) => {
    if (!favorites?.length || favorites?.findIndex((m) => m.id === movie.id) === -1) {
      dispatch(addToFavorites(movie));
    } else {
      dispatch(removeFromFavorites(movie.id));
    }
  };

  let showList = movies.map((movie, index) => {
    return (
      <Card
        key={index}
        id={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        vote_average={movie.vote_average}
        release_date={movie.release_date}
        onLikeMovie={handleLikeMovie}
        isLiked={favorites?.findIndex((m) => m.id === movie.id) === -1 ? false : true}
      />
    );
  });

  return (
    <>
      <h4 className="section_title">{title}</h4>
      {showList?.length ? (
        <div className="section_cards">{showList}</div>
      ) : (
        <p>No movies to show</p>
      )}
      {showMore && <Button onClickHandler={onLoadMore}>Show more</Button>}
    </>
  );
};

export default ListCards;
