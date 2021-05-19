import React from 'react'
import API from '../utils/API';
import Header from './Header';
import SearchForm from './SearchForm';

class EmployeeContainer extends React.Component {
    state = {
        result: {},
        search: "",
        employees: [],
        employeesFiltered: [],
        
    };

    searchEmployee = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <Header />
                <SearchForm />
            </div>
        )
    }
}

export default EmployeeContainer;