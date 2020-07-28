import React, { ChangeEvent } from "react";
import CardList from "./components/CardList";
import { robots } from "./robots";
import SearchBox from "./components/SearchBox";
import "./styles/App.css";
import Scroll from "./components/Scroll";

function App() {
  const [robotList, setRobotList] = React.useState(robots);
  const [search, setSearch] = React.useState("");

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    const filteredRobots = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(search);
    });
    setRobotList(filteredRobots);
  };

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <CardList robots={robotList} />
      </Scroll>
    </div>
  );
}

export default App;
