import React from "react";
import API from "../utils/API";
import Header from "./Header";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

class EmployeeContainer extends React.Component {
  state = {
    search: "",
    employees: [],
    employeesFiltered: [],
    // TODO: add name/dob in asc/desc order here??
  };

  // default on reload
  // TODO: ??????????????????????
  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          employees: res.data.results,
          // employeesFiltered: res.data.results
        });
      })
      .catch((err) => console.log(err));
  }

  searchEmployee = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const results = event.target.results;
    this.setState({
      search: value,
      employeesFiltered: results,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  render() {

    return (
      <div>
        <Header />
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <ResultsList />
      </div>
    );
  }
}

export default EmployeeContainer;
