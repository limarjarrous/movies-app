import React from "react";
import "./Button.css";

const Button = ({ children, onClickHandler, align = "center", ...rest }) => {
  return (
    <div className="btn_wrapper" style={{ placeContent: `${align}` }}>
      <button onClick={onClickHandler} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default Button;
