import React from "react";
import "./search-box.style.css";


export const SearchBox = ({placeholder, handlechange}) => {
  return (
    <input
          type='search'
          placeholder={placeholder}
          onChange={handlechange}
        />
  );
};
