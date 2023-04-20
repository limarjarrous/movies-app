import React, { useState } from "react";
import ListCards from "../../components/ListCards/ListCards";
import { getTrending } from "../../redux/actions/moviesActions";
import { useDispatch, useSelector } from "react-redux";

const TrendingPage = () => {
  const dispatch = useDispatch();
  const [timeWindow, setTimeWindow] = useState("week");
  const trendingList = useSelector((state) => state.movies.trendingList.results);

  if (!trendingList.length) {
    dispatch(getTrending("movies", timeWindow));
  }

  return (
    <section className="listcards_section">
      <ListCards
        title={`Trending this ${timeWindow}`.toUpperCase()}
        movies={trendingList}
        showMore={false}
      />
    </section>
  );
};

export default TrendingPage;
