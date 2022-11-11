import React from "react";

function Search({setSearch, search}) {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(e.target.value)
  //   console.log("submitted");
  //   // don't feel like putting state down here so filter is done before handleSubmit lol
  // }

  return (
    <form className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value= {search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
