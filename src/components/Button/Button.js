import React from "react";
import "./Button.css";
import ToolTip from "../Tooltip/Tooltip";

const Button = ({ children, onClickHandler, tooltip, align = "center", ...rest }) => {
  return (
    <div className="btn_wrapper" style={{ placeContent: `${align}` }}>
      <ToolTip tooltip={tooltip}>
        <button onClick={onClickHandler} {...rest}>
          {children}
        </button>
      </ToolTip>
    </div>
  );
};

export default Button;
