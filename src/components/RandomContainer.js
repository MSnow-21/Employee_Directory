import React, { Component } from "react";
import SearchBar from "./SearchBar";
import EmployeeTable from "./EmployeeTable";
import API from "../utils/API";

class RandomContainer extends Component {
    state = {
        results: {},
        search: ""
    };

    componentDidMount() {
        this.searchUsers("brad");
    }

    searchUsers = query => {
        API.search(query)
        .then(res => this.setState(({ results: res.data.results })))
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
            <div>
                <SearchBar />

                <EmployeeTable
                  image={this.state.results.picture.thumbnail}
                  name={this.state.results.name}
                  phone={this.state.results.phone}
                  email={this.state.results.email}
                  dob={this.state.results.dob.date}
                />
            </div>
            
        );
    }

}

export default RandomContainer;