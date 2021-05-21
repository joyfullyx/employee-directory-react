import React from "react";
import API from "../utils/API";
import Header from "./Header";
import TableHeader from "./TableHeader";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

class EmployeeContainer extends React.Component {
  state = {
    search: "",
    employees: [],
    employeesFiltered: [],
    error: "",
    employeesSorted: [],
  };

  // default on page load/reload
  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          employees: res.data.results,
          employeesFiltered: res.data.results,
          //   })
          //   ),
        });
      })
      .catch((err) => console.log(err));
  }

  // refresh page on 'refresh page' button
  handleReload = (event) => {
    event.preventDefault();
    this.componentDidMount();
    this.setState({
        search: ""
    })
  };

  //search for employee by first name
  searchEmployee = (firstName) => {
    const tempFiltered = this.state.employees.filter((employee) => {
      if (employee.name.first.includes(firstName)) {
        return employee;
      } else if (employee.name.first.includes(!firstName)) {
        return employee;
      }
      return false;
    });
    this.setState({
      employeesFiltered: tempFiltered,
    });
  };


  // sort employees alphabetically in asc/desc order by first name
  // Shoutout to stackexchange for help on this one!
  // https://codereview.stackexchange.com/questions/236555/sorting-a-list-in-ascending-descending-order-with-a-button-toggle  
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

  // click event handler for sorting names alphabetically
  handleSort = (event) => {
    event.preventDefault();
    this.sortEmployees();
  };

  // event handler for search input field
  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("handleInputChange: ", value);
    this.setState({
      [name]: value,
    });
    console.log("searched for: ", this.state);
  };

  // event handler for search button
  handleFormSubmit = (event) => {
    console.log("clickkkk");
    event.preventDefault();
    this.searchEmployee(this.state.search);
    this.setState({
      search: "",
    });
  };

  // render this on page!
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
              {/* map to display searched employee from employeesFiltered array and render ResultsList compoment */}
              {this.state.employeesFiltered.map((employee, key) => (
                <ResultsList
                  picture={employee.picture.large}
                  name={employee.name.first + " " + employee.name.last}
                  phone={employee.phone}
                  email={employee.email}
                  dob={employee.dob.date}
                  key={key}
                />
              ))}
            </div>
          ) : (
            <div>
              {/* if no search, render all employees */}
              {this.state.employees.map((employee, key) => (
                <ResultsList
                  picture={employee.picture.large}
                  name={employee.name.first + " " + employee.name.last}
                  phone={employee.phone}
                  email={employee.email}
                  dob={employee.dob.date}
                  key={key}
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
