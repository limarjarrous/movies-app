import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import apiConfig from "../../api/apiConfig";
import "./Carousel.css";

const HomeCarousel = ({ trendingList }) => {
  const renderArrow = (direction) => (onClickHandler, shouldBeEnabled, label) => {
    if (!shouldBeEnabled) {
      return;
    }
    return (
      <div
        className={`control_arrow ${direction === "prev" ? "control_left" : "control_right"}`}
        onClick={onClickHandler}
      >
        {direction === "prev" ? <BsChevronLeft /> : <BsChevronRight />}
      </div>
    );
  };

  trendingList = trendingList?.slice(0, 5);

  return (
    <Carousel
      className="carousel_container"
      autoPlay={true}
      interval={5000}
      emulateTouch={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      useKeyboardArrows={true}
      showArrows={true}
      showIndicators={true}
      renderArrowPrev={renderArrow("prev")}
      renderArrowNext={renderArrow("next")}
    >
      {trendingList.map((movie) => {
        return (
          <div key={movie.id} className="carousel_item">
            <img
              className="carousel_img"
              src={apiConfig.originalImage(movie.backdrop_path)}
              alt={movie.title}
            />
            <div className="carousel_title">
              <h1 className="">{movie.title}</h1>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default HomeCarousel;
