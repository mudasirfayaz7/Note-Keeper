import React from "react";

function SearchBar() {
  return (
    <section id="Search-Bar">
      <div className="search-bar d-flex justify-content-center align-items-center bg-secondary py-2">
        <div>
          <i className="fad fa-search me-2"></i>
          <input type="search" placeholder="Search..." />
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
