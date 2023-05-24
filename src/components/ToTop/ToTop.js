import React from "react";
import Button from "../Button/Button";
import { FiArrowUp } from "react-icons/fi";
import "./ToTop.css";

function ToTop({ onScrollTop, showBtn }) {
  return (
    <div className={`to_top_btn_wrapper ${showBtn ? "" : "hidden"}`}>
      <Button className="to_top_btn" onClickHandler={onScrollTop}>
        <FiArrowUp style={{ fontSize: "1.1rem" }} />
      </Button>
    </div>
  );
}

export default ToTop;
