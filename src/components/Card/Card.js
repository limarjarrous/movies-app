import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import apiConfig from "../../api/apiConfig";
import ToolTip from "../Tooltip/Tooltip";
import "./Card.css";

const Card = ({ id, title, vote_average, release_date, poster_path, isLiked, onLikeMovie }) => {
  const movie = { id, title, vote_average, release_date, poster_path };

  const cardRref = useRef(null);
  const isInView = useInView(cardRref);

  const navigate = useNavigate();

  const handleClickMovie = (id) => {
    navigate(`/movies/${id}`);
  };

  const handleImageError = (e) => {
    const w = e.target.width;
    const h = e.target.height;
    const placeholderImage = `https://placehold.co/${w}x${h}?text=Image+not+found`;
    e.target.src = placeholderImage;
  };

  return (
    <>
      <div
        ref={cardRref}
        className="card_container"
        style={{
          transform: isInView ? "none" : "translateY(75px)",
          opacity: isInView ? 1 : 0,
          transition: `transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1),
                       opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)`,
        }}
      >
        <img
          className="card_img"
          onError={handleImageError}
          onClick={() => handleClickMovie(id)}
          src={apiConfig.originalImage(poster_path)}
          alt={title}
        />
        <div className="card_body" onClick={() => handleClickMovie(id)}>
          <ToolTip tooltip={`${title}`} placement="top">
            <p className="card_title">{title}</p>
          </ToolTip>
          <div className="card_detail">
            <ToolTip tooltip={`${vote_average?.toFixed(1)} | IMDB Rating`}>
              <div className="card_rating">
                <BsStarFill className="rating_star" />
                <p className="card_badge">{vote_average?.toFixed(1)}</p>
              </div>
            </ToolTip>
            <p className="card_year">{release_date?.split("-")[0]}</p>
          </div>
        </div>
        <ToolTip tooltip="Add to favorites">
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
        </ToolTip>
      </div>
    </>
  );
};

export default Card;
