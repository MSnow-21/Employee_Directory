import React from "react";
import "./style.css";

function SearchBar(props){
    return(
        <form className="search">
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                  value={props.search}
                  onChange={props.handleInputChange}
                  name="user"
                  list="users"
                  type="text"
                  className="form-control"
                  placeholder="Type in a name"
                  id="user"               />

            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-primary">
                Search
            </button>
            </div>
        </form>
    )
}

export default SearchBar;