import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import NavDropdown from "../NavDropdown/NavDropdown";

import { FaBars, FaTimes } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import Button from "../Button/Button";
import "./Nav.css";

const Nav = ({ onSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [mobileMenu, setMobileMenu] = useState(false);
  const closeMobileMenu = () => setMobileMenu(false);
  const handleClick = () => setMobileMenu(!mobileMenu);

  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const user = useSelector((state) => state.user);
  const isAuth = localStorage.getItem("authenticated") === "true" || false;

  const handleChangeText = (e) => {
    setSearchText(e.target.value);
  };

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
    navigate("/");
  };

  return (
    <nav className="nav">
      {/* BRAND */}
      <h2 className="brand">
        <Link to="/" onClick={closeMobileMenu}>
          MoviesDB
        </Link>
      </h2>

      <div className={`mobile_menu ${mobileMenu ? "show" : ""}`}>
        {/* NAV LINKS */}
        <ul className="nav_ul">
          <li className="nav_li">
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav_li">
            <Link to="/trending" onClick={closeMobileMenu}>
              Trending
            </Link>
          </li>
          <li className="nav_li">
            <Link to="/favorites" onClick={closeMobileMenu}>
              My Favorite
            </Link>
          </li>
        </ul>

        {/* SEARCH */}
        <form onSubmit={(e) => onSearch(e, searchText)} className="search_group ">
          <input
            type="text"
            className="search_bar"
            placeholder="Search"
            aria-label="Search by Movie's name"
            aria-describedby="search_button"
            onChange={handleChangeText}
          />
          <Button className="search_btn" type="submit">
            <BsSearch />
          </Button>
        </form>

        {/* AUTH */}
        {!isAuth ? (
          <Button onClickHandler={() => navigate("auth")}>Sign in</Button>
        ) : (
          <NavDropdown onLogout={handleLogout} user={user} />
        )}
      </div>

      {/* MOBILE MENU ICON */}
      <div className="menu_icon" onClick={handleClick}>
        {mobileMenu ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Nav;
