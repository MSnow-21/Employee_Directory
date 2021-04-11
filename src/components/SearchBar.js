import React from "react";

function SearchBar(){
    return(
        <form>
            <div className="form-group">
                <label htmlForm="search">Search:</label>
            <button className="btn btn-primary mt-3">
                Search
            </button>
            </div>
        </form>
    )
}

export default SearchBar;