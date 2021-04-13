import React, { Component } from "react";
import Header from "../components/Header/Header"
import EmployeeTable from "../components/EmployeeTable/EmployeeTable";
import SearchBar from "../components/SearchBar/SearchBar";
import API from "../utils/API";

class RandomContainer extends Component {
    state = {
        search: "",
        users: [],
        results: [],
        error: ""
    };

    componentDidMount() {
        API.getRandomUser()
          .then(res => this.setState({ results: res.data.results }))
          .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getRandomUser(this.state.search)
          .then(res => {
              if (res.data.status === "error"){
                  throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
           })
        .catch(err => this.setState({ error: err.message }));
    };

    render(){
        return (
            <div>
                <wrapper>
                    <Header />
                    <SearchBar
                      handleFormSubmit={this.handleFormSubmit}
                      handleInputChange={this.handleInputChange}
                      user={this.state.user}
                    />
                    <EmployeeTable results={this.state.results} />
                </wrapper>              
            </div>            
        );
    }

}

export default RandomContainer;