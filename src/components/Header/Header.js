import React from "react";
import "./style.css"

function Header() {
    return(
        <header className="header">
            <h1>Employee Directory</h1>
            <h5>Click on the carrots to filter by heading or use the search box to narrow results</h5>
        </header>
    );
}

export default Header;