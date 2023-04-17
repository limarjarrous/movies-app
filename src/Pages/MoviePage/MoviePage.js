import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import {
  getCredits,
  getDetails,
  getRecommendations,
  getSimilar,
} from "../../redux/actions/moviesActions";
import apiConfig from "../../api/apiConfig";
import Slider from "../../components/Slider/Slider";
import Loader from "../../components/Loader/Loader";
import "./MoviePage.css";

const Details = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();

  useEffect(() => {
    const params = {};
    dispatch(getDetails("movie", movieId, { params }));
    dispatch(getCredits("movie", movieId));
    dispatch(getSimilar("movie", movieId));
    dispatch(getRecommendations("movie", movieId));
  });

  const details = useSelector((state) => state.movies.details);
  let loading = useSelector((state) => state.movies.loading);
  const similarList = useSelector((state) => state.movies.similarList.results);
  const { directors, cast } = useSelector((state) => state.movies.credits);
  const recommendationList = useSelector((state) => state.movies.recommendationList.results);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="details_page_container">
          {/* BANNER */}
          <div className="movie_banner">
            <img
              className="movie_banner_img"
              src={apiConfig.originalImage(details?.backdrop_path)}
              alt="john wick"
            />
            <div className="movie_banner_title">
              <h1 className="">{details?.title}</h1>
              {/* <p className="">{details?.tagline}</p> */}
            </div>
          </div>

          {/* DETAILS */}
          <div className="movie_details">
            <img
              className="movie_poster"
              src={apiConfig.originalImage(details?.poster_path)}
              alt={details?.title}
            />
            <div className="info_details">
              <div className="info_rating">
                <BsStarFill className="info_star" />
                <p className="info_rate">{details?.vote_average?.toFixed(1)}</p>
              </div>
              <p className="info_year">{details?.release_date?.split("-")[0]}</p>
              <div className="info_genres">
                {details?.genres?.map((genre, index) => {
                  return (
                    <span key={index}>{`${genre?.name}${
                      index === details.genres.length - 1 ? "" : ", "
                    }`}</span>
                  );
                })}
              </div>
            </div>
            <div className="info_description">{details?.overview}</div>
            <div className="info_cast">
              <div className="cast">
                <p className="cast_title">Starring</p>
                <div className="cast_content">
                  {cast.length < 10
                    ? cast.map((member, index) => {
                        return (
                          <span key={index}>{`${member?.original_name} ${
                            index === 9 ? "" : " • "
                          }`}</span>
                        );
                      })
                    : cast.slice(0, 10).map((member, index) => {
                        return (
                          <span key={index}>{`${member?.original_name} ${
                            index === 9 ? "" : " • "
                          }`}</span>
                        );
                      })}
                </div>
              </div>
              <div className="cast">
                <p className="cast_title">Directors</p>
                <div className="cast_content">
                  {directors.map((dir, index) => {
                    return <span key={index}>{dir?.original_name}</span>;
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RECOMMENDATIONS */}
          {recommendationList.length && (
            <div className="recommendations">
              <Slider list={recommendationList} name={"Recommended Movies"} />
            </div>
          )}

          {/* SIMILAR */}
          {similarList.length && (
            <div className="recommendations">
              <Slider list={similarList} name={"Movies you might also like"} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Details;
