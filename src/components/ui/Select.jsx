import React from "react";

const Select = ({ filterRecipes }) => {
  return (
    <div className="filter-container">
      <select
        id="filter"
        defaultValue="DEFAULT"
        onChange={(event) => filterRecipes(event.target.value)}
      >
        <option value="DEFAULT">Sort</option>
        <option value="ASCENDING">A-Z</option>
        <option value="DESCENDING">Z-A</option>
      </select>
    </div>
  );
};

export default Select;
