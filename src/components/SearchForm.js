import React from "react";
import "../styles/SearchForm.css";

function SearchForm(props) {
  return (
    <form className="input-group mb-3 col-sm-12 p-3">
      {/* <div className="form-group"> */}
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="search employee"
          id="search"
        ></input>

        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-outline-secondary"
        //   id="button-addon2"
        >
          Search!
        </button>
      {/* </div> */}
    </form>
  );
}

export default SearchForm;
