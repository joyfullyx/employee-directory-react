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
          placeholder="search employee by first name (case sensitive)"
          id="search"
        ></input>

        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        //   id="button-addon2"
        >
          Search!
        </button>
          <button
          type="button"
          onClick={props.handleReload}
          className="btn btn-primary"
          >
            Refresh Page
          </button>
       
      {/* </div> */}
    </form>
  );
}

export default SearchForm;
