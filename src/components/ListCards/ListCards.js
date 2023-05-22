import React, { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/actions/userActions";
import Button from "../Button/Button";
import ToTop from "../ToTop/ToTop";
import Card from "../Card/Card";
import "./ListCards.css";

const ListCards = ({ movies, onLoadMore, showMore = false, title = null }) => {
  const dispatch = useDispatch();

  const [showTopBtn, setShowTopBtn] = useState(false);
  const favorites = useSelector((state) => state.user.favorites);

  const showMoreRef = useRef(null);
  const isInView = useInView(showMoreRef);

  // Filter Movies with Search
  // filteredMovies = filteredMovies.filter((movie) =>
  //   movie.title.toLowerCase().includes(searchText.toLowerCase())
  // );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleLikeMovie = (movie) => {
    if (!favorites?.length || favorites?.findIndex((m) => m.id === movie.id) === -1) {
      dispatch(addToFavorites(movie));
    } else {
      dispatch(removeFromFavorites(movie));
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
      {showList?.length ? <div className="section_cards">{showList}</div> : <p>No movies to show</p>}
      {showMore && (
        <div
          ref={showMoreRef}
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: `transform 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.01s,
                         opacity 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.01s`,
          }}
        >
          <Button onClickHandler={onLoadMore}>Show more</Button>
        </div>
      )}
      {showTopBtn && <ToTop onScrollTop={scrollTop} />}
    </>
  );
};

export default ListCards;
