import React from "react";

function Search({ filter, value, setFilter = [] }) {
  return (
    <div className="search">
      <input
        className="input"
        type="text"
        placeholder={"Filter by name"}
        onChange={(event) => setFilter(event.target.value)}
        value={filter}
      ></input>
    </div>
  );
}
export default Search;
