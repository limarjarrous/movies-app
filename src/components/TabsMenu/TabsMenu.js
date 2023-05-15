import React from "react";
import Tab from "@mui/base/Tab";
import Tabs from "@mui/base/Tabs";
import TabsList from "@mui/base/TabsList";
import TabPanel from "@mui/base/TabPanel";
import ListCards from "../ListCards/ListCards";
import "./TabsMenu.css";

const TabsMenu = ({ movies, showMore, onLoadMore, onSelectTab }) => {
  return (
    <Tabs defaultValue="upcoming" onChange={onSelectTab}>
      <TabsList className="menu_tabList">
        <Tab value="upcoming" className={`menu_tab`}>
          Coming Up
        </Tab>
        <Tab value="top_rated" className="menu_tab">
          Top-Rated
        </Tab>
        <Tab value="popular" className="menu_tab">
          Popular
        </Tab>
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
