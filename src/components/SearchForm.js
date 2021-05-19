import React from "react";
import "../styles/SearchForm.css";

function SearchForm(props) {
  return (
    <form className="col-sm-12 p-3">
      <input
        onChange={props.handleInputChange}
        value={props.value}
        type="text"
        name="search"
        className="form-control"
        placeholder="search"
        id="search"
      ></input>
    </form>
  );
}

export default SearchForm;
