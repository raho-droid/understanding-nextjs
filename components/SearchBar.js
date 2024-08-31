"use client";

import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        placeholder="Aradığınız ürünü ya da markayı yazınız..."
        value={query}
        onChange={handleInputChange}
        className="search-input w-full"
      />
      <button type="submit" className="search-button">
        <MdOutlineSearch />
      </button>
    </form>
  );
}

export default SearchBar;
