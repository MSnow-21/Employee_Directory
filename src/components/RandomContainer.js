import React, { Component } from "react";
import PageHeader from "./PageHeader";
import SearchBar from "./SearchBar";
import API from "../utils/API";
import EmployeeTable from "./EmployeeTable";

class RandomContainer extends Component {
    state = {
        result: {},
        search: ""
    };

    componentDidMount() {
        this.searchUsers("brad");
    }

    searchUsers = query => {
        API.search(query)
        .then(res => this.setState(({ result: res.data.results })))
        .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handlefFormSubmit = event => {
        event.preventDefault();
        this.searchUsers(this.state.search);
    }

    render(){
        return (
            <EmployeeTable
               image={this.state.result.picture.thumbnail}
               name={this.state.result.name}
               phone={this.state.result.phone}
               email={this.state.result.email}
               dob={this.state.result.dob.date}
             />
        )
    }

}

export default RandomContainer;