import React from "react";
import "./Sidebar.css";
import Button from "../Button/Button";

const SideList = ({ genresList, selectedGenres, onSelectGenre, onFilterByGenre }) => {
  return (
    <div className="sidebar_section">
      <h4 className="sidebar_title">Genres</h4>
      <ul className="sidebar_ul">
        {genresList.map((item, index) => {
          return (
            <li
              key={index}
              className={`sidebar_li
                    ${selectedGenres?.includes(item.id) ? "sidebar_li_active" : ""}
                    `}
              onClick={() => onSelectGenre(item.id)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      <Button onClickHandler={onFilterByGenre} align="start">
        Apply
      </Button>
    </div>
  );
};

export default SideList;
