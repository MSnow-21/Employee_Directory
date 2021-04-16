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
        console.log(event);
        this.setState({ search: event.target.value })
        
    };

    // Working on function that passes through first name through random array

    handleFormSubmit = event => {
        event.preventDefault();

        const userInput = this.state.search;
        console.log(userInput);

        const userRandomArray = this.state.results;


        // const randomUserArray = this.state.results;
        // console.log(randomUserArray)

        const userNameArray = userRandomArray.filter(result => result.name.first = userInput);
        console.log(userNameArray);

        this.setState({results: userNameArray});


        // API.getRandomUser(this.state.search)
        //   .then(res => {
        //       console.log(res)
        //       if (res.data.status === "error"){
        //           throw new Error(res.data.message);
        //        } else {
        //         this.setState({ results: res.data.results, error: "" });
        //        }
        //    })
        // .catch(err => this.setState({ error: err.message }));
    };

    // Building a functon to sort table by Name

    handleNameSubmit = event => {
        event.preventDefault();
        console.log(event);

    }




    render(){
        return (
            <div>
                    <Header />
                    <SearchBar
                      handleFormSubmit={this.handleFormSubmit}
                      handleInputChange={this.handleInputChange}
                      user={this.state.user}
                    />
                    <EmployeeTable
                       handleNameSubmit={this.handleNameSubmit}
                       results={this.state.results} />
      
            </div>            
        );
    }

}

export default RandomContainer;