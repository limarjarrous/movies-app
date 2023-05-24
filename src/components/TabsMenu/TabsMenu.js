import React from "react";
import Tab from "@mui/base/Tab";
import Tabs from "@mui/base/Tabs";
import Button from "../Button/Button";
import TabsList from "@mui/base/TabsList";
import TabPanel from "@mui/base/TabPanel";
import ListCards from "../ListCards/ListCards";
import "./TabsMenu.css";
import ToolTip from "../Tooltip/Tooltip";

const TabsMenu = ({ movies, showMore, onLoadMore, onSelectTab, handleToggle, filtered }) => {
  return (
    <Tabs defaultValue="upcoming" onChange={onSelectTab}>
      <TabsList className="menu_tabList">
        {!filtered && (
          <>
            <Tab value="upcoming" className="menu_tab">
              <ToolTip tooltip="Upcoming Movies">
                <div>Coming up</div>
              </ToolTip>
            </Tab>
            <Tab value="top_rated" className="menu_tab">
              <ToolTip tooltip="Top-rated Movies">
                <div>Top-Rated</div>
              </ToolTip>
            </Tab>
            <Tab value="popular" className="menu_tab">
              <ToolTip tooltip="Popular Movies">
                <div>Popular</div>
              </ToolTip>
            </Tab>
          </>
        )}
        <div style={{ flexGrow: 1 }}>
          <Button align="end" onClickHandler={handleToggle} tooltip="Filter by genre">
            Genres
          </Button>
        </div>
      </TabsList>
      <TabPanel value="upcoming">
        <ListCards movies={movies} showMore={showMore} onLoadMore={onLoadMore} />
      </TabPanel>
      <TabPanel value="top_rated">
        <ListCards movies={movies} showMore={showMore} onLoadMore={onLoadMore} />
      </TabPanel>
      <TabPanel value="popular">
        <ListCards movies={movies} showMore={showMore} onLoadMore={onLoadMore} />
      </TabPanel>
    </Tabs>
  );
};

export default TabsMenu;
