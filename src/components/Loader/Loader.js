import React from "react";
import GridLoader from "react-spinners/GridLoader";

const Loader = () => {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "300px" }}>
      <GridLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
