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
              console.log(res)
              if (res.data.status === "error"){
                  throw new Error(res.data.message);
               } else {
                this.setState({ results: res.data.results, error: "" });
               }
           })
        .catch(err => this.setState({ error: err.message }));
    };

    render(){
        return (
            <div>
                    <Header />
                    <SearchBar
                      handleFormSubmit={this.handleFormSubmit}
                      handleInputChange={this.handleInputChange}
                      user={this.state.user}
                    />
                    <EmployeeTable results={this.state.results} />
      
            </div>            
        );
    }

}

export default RandomContainer;