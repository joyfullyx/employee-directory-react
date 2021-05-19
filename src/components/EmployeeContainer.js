import React from 'react'
import API from '../utils/API';
import Header from './Header';
import ResultsList from './ResultsList';
import SearchForm from './SearchForm';

class EmployeeContainer extends React.Component {
    state = {
        result: {},
        search: "",
        employees: [],
        employeesFiltered: [],
        
    };

    // default on reload
    componentDidMount() {
        API.search()
            .then((res) => {
                console.log(res);
                this.setState({
                    employees: res.data.results.map(employee => ({
                        picture: employee.picture.thumbnail,
                        firstName: employee.name.first,
                        lastName: employee.name.last,
                        phone: employee.phone,
                        email: employee.email,
                        dob: employee.dob
                    }))
                })
            })
            .catch(err => console.log(err))
    }

    searchEmployee = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err))
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search)
    };

    render() {
        return (
            <div>
                <Header />
                <SearchForm />
                <ResultsList 
                picture={this.state.result.picture}
                name={this.state.result.name}
                phone={this.state.result.phone}
                email={this.state.result.email}
                dob={this.state.result.dob}
                />
            </div>
        )
    }
}

export default EmployeeContainer;