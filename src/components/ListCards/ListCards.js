import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, removeFromFavourites } from "../../redux/actions/userActions";
import Button from "../Button/Button";
import Card from "../Card/Card";
import "./ListCards.css";

const ListCards = ({ title, movies, onLoadMore }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.user.favourites);

  // Filter Movies with Search
  // filteredMovies = filteredMovies.filter((movie) =>
  //   movie.title.toLowerCase().includes(searchText.toLowerCase())
  // );

  const handleLikeMovie = (movie) => {
    if (!favourites.length || favourites.findIndex((m) => m.id === movie.id) === -1) {
      dispatch(addToFavourites(movie));
    } else {
      dispatch(removeFromFavourites(movie.id));
    }
  };

  const showList = movies.map((movie, index) => {
    return (
      <Card
        key={index}
        id={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        vote_average={movie.vote_average}
        release_date={movie.release_date}
        onLikeMovie={handleLikeMovie}
        isLiked={favourites.findIndex((m) => m.id === movie.id) === -1 ? false : true}
      />
    );
  });

  return (
    <>
      <h4 className="section_title">{title}</h4>
      <div className="section_cards">{showList}</div>
      <Button onClickHandler={onLoadMore}>Show more</Button>
    </>
  );
};

export default ListCards;
