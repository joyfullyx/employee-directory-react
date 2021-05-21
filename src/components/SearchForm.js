import React from "react";
import "../styles/SearchForm.css";

function SearchForm(props) {
  return (
    <form className="input-group mb-3 col-sm-12 p-3">
      <input
      // event handler for search input field
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="search employee by first name (case sensitive)"
        id="search"
      ></input>

      <button
        type="submit"
        // click handler for search button
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search!
      </button>
      <button
        type="button"
        // click handler for reloading page after getting a search result
        onClick={props.handleReload}
        className="btn btn-primary"
      >
        Refresh Page
      </button>
    </form>
  );
}

export default SearchForm;
