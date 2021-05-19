import React from "react";
import "../styles/SearchForm.css";

function SearchForm(props) {
  return (
    <form className="input-group mb-3 col-sm-12 p-3">
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder="search"
        id="search"
      ></input>

      <button
        onClick={props.handleFormSubmit}
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Search now!
      </button>
    </form>
  );
}

export default SearchForm;
