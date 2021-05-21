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
    employeesSorted: [],
  };

  // default on reload
  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          //   employees: res.data.results.map((employee) => ({
          //     picture: employee.picture.large,
          //     firstName: employee.name.first,
          //     lastName: employee.name.last,
          //     phone: employee.phone,
          //     email: employee.email,
          //     dob: employee.dob,
          //     key: employee.id,
          employees: res.data.results,
          employeesFiltered: res.data.results,
          //   })
          //   ),
        });
      })
      .catch((err) => console.log(err));
  }

  handleReload = (event) => {
    event.preventDefault();
    this.componentDidMount();
  };

  searchEmployee = (firstName) => {
    const tempFiltered = this.state.employees.filter((employee) => {
      if (employee.name.first.includes(firstName)) {
        return employee;
      }
    });
    this.setState({
      employeesFiltered: tempFiltered,
    });
  };

//   Shoutout to stackexchange for help on this one!
  sortEmployees = () => {
    this.setState({
      employeesSorted: this.state.order
        ? this.state.employees.sort((x, y) => {
            if (x.name.first < y.name.first) return -1;
            if (x.name.first > y.name.first) return 1;
            return 0;
          })
        : this.state.employees.reverse((x, y) => {
            if (x.name.first < y.name.first) return 1;
            if (x.name.first > y.name.first) return -1;
            return 0;
          }),
      order: !this.state.order,
    });
  };

  handleSort = (event) => {
    event.preventDefault();
    this.sortEmployees();
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
    this.setState({
      search: "",
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          handleReload={this.handleReload}
          search={this.state.search}
        />
        <TableHeader handleSort={this.handleSort} />

        <div>
          {this.state.employeesFiltered.length > 0 ? (
            <div>
              {this.state.employeesFiltered.map((employee, key) => (
                <ResultsList
                  picture={employee.picture.large}
                  name={employee.name.first + " " + employee.name.last}
                  phone={employee.phone}
                  email={employee.email}
                  dob={employee.dob.date}
                  key={key}
                  //   results={this.state.results}
                />
              ))}
            </div>
          ) : (
            <div>
              {this.state.employees.map((employee, key) => (
                <ResultsList
                  picture={employee.picture.large}
                  name={employee.name.first + " " + employee.name.last}
                  phone={employee.phone}
                  email={employee.email}
                  dob={employee.dob.date}
                  key={key}
                  //   results={this.state.results}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default EmployeeContainer;
