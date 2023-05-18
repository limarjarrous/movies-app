import React from "react";
import { useNavigate } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LazyMotion, domAnimation, m } from "framer-motion";
import apiConfig from "../../api/apiConfig";
import "./Card.css";

const Card = ({ id, index, title, vote_average, release_date, poster_path, isLiked, onLikeMovie }) => {
  const movie = { id, title, vote_average, release_date, poster_path };
  const navigate = useNavigate();

  const handleClickMovie = (id) => {
    navigate(`/movies/${id}`);
  };

  const variants = {
    active: { opacity: 1 },
    inactive: { opacity: 0 },
  };
  const transition = {
    duration: 0.8,
    delay: 0.05 * (index % 20),
    ease: "easeInOut",
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="card_container"
        variants={variants}
        initial="inactive"
        animate="active"
        exit="inactive"
        transition={transition}
      >
        <img
          className="card_img"
          onClick={() => handleClickMovie(id)}
          src={apiConfig.originalImage(poster_path)}
          alt={title}
        />
        <div className="card_body" onClick={() => handleClickMovie(id)}>
          <p className="card_title">{title}</p>
          <div className="card_detail">
            <div className="card_rating">
              <BsStarFill className="rating_star" />
              <p className="card_badge">{vote_average?.toFixed(1)}</p>
            </div>
            <p className="card_year">{release_date?.split("-")[0]}</p>
          </div>
        </div>
        <span
          className="card_btn"
          onClick={() => {
            onLikeMovie(movie);
          }}
        >
          {isLiked ? (
            <FaHeart style={{ color: "var(--text-error)", fontSize: "1.1rem" }} />
          ) : (
            <FaRegHeart style={{ color: "#828282", fontSize: "1.1rem" }} />
          )}
        </span>
      </m.div>
    </LazyMotion>
  );
};

export default Card;
