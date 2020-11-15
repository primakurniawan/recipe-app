import React, { useState } from "react";

const Search = ({ getSearchRecipesList }) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getSearchRecipesList(search);
    setSearch("");
  };

  return (
    <div className="search" onSubmit={onSubmit}>
      <form>
        <input className="search__input" value={search} onChange={onChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Search;
