import React from "react";

import Card from "../Card/Card";
// import { moviesList } from "../../DummyData/DummyData";
import "./Slider.css";

const Slider = ({ list, name }) => {
  // const handleClickMovie = (id) => {
  //   // let selectedMovie = movies.filter((movie) => movie.id === id)[0];
  //   // console.log(selectedMovie);
  //   navigate(`/movies/${id}`);
  // };

  return (
    <>
      <h4 className="section_title">{name}</h4>
      <div className="slider_container">
        {list.map((movie, index) => {
          return (
            <div className="slider_card_container" key={index}>
              <Card
                id={movie.id}
                title={movie.title}
                text={movie.overview}
                vote_average={movie.vote_average}
                release_date={movie.release_date}
                poster_path={movie.poster_path}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Slider;
