import React, { useState } from "react";
import { Box, Menu, Divider, MenuItem, ListItemText, ListItemIcon } from "@mui/material";
import { FiSettings, FiUser } from "react-icons/fi";
import { AiOutlinePoweroff } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import ToolTip from "../Tooltip/Tooltip";
import Avvvatars from "avvvatars-react";
import "./NavDropdown.css";

const NavDropdown = ({ initials, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <ToolTip tooltip="Account settings">
          <IconButton
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            sx={{ ml: 2 }}
          >
            <Avvvatars value={initials} />
          </IconButton>
        </ToolTip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FiUser style={{ color: "var(--text-grey-9)" }} />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FiSettings style={{ color: "var(--text-grey-9)" }} />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <MenuItem onClick={onLogout}>
          <ListItemIcon>
            <AiOutlinePoweroff style={{ color: "var(--text-grey-9)" }} />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default NavDropdown;
