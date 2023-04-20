import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import ListCards from "../../components/ListCards/ListCards";

const FavoritesPage = () => {
  const loading = useSelector((state) => state.user.loading);
  const favorites = useSelector((state) => state.user.favorites);

  return (
    <>
      {loading && <Loader />}
      {!loading && <ListCards title={"My Favorite".toUpperCase()} movies={favorites} />}
    </>
  );
};

export default FavoritesPage;
