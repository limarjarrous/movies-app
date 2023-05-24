import React from "react";
import Tooltip from "@mui/material/Tooltip";

const ToolTip = ({ children, tooltip, placement = "bottom" }) => {
  if (!tooltip) return children;
  else {
    return (
      <Tooltip title={tooltip} arrow placement={placement}>
        {children}
      </Tooltip>
    );
  }
};

export default ToolTip;
