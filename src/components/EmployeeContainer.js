import React from "react";
import API from "../utils/API";
import Header from "./Header";
import TableHeader from "./TableHeader";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";
// import Moment from 'react-moment';

class EmployeeContainer extends React.Component {
  state = {
    search: "",
    employees: [],
    employeesFiltered: [],
    error: "",
    // TODO: add name/dob in asc/desc order here??
  };

  // default on reload
  // TODO: ??????????????????????
  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          employees: res.data.results.map((employee) => ({
            picture: employee.picture.large,
            firstName: employee.name.first,
            lastName: employee.name.last,
            phone: employee.phone,
            email: employee.email,
            dob: employee.dob,
            key: employee.id,
          })),
        });
      })
      .catch((err) => console.log(err));
  }

  searchEmployee = (firstName) => {
    API.search(firstName)
      .then((res) => this.setState({ employees: res.data.data }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("handleInputChange: ", value);
    this.setState({
      [name]: value,
    });
    console.log("searched for: ", this.state);
  };

  handleFormSubmit = (event) => {
    console.log("clickkkk");
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  render() {
    return (
      <div>
        <Header />
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />
        <TableHeader />
        <div>
          {[...this.state.employees].map((employee) => (
            <ResultsList
              picture={[employee.picture]}
              name={employee.firstName + " " + employee.lastName}
              phone={employee.phone}
              email={employee.email}
              dob={employee.dob.date}
              key={employee.id}
              //   results={this.state.results}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default EmployeeContainer;
