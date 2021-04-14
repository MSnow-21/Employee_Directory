import React from "react";

function TableRows(props){
    return(
        props.results.map(result => (
            <tr key={result.login.uuid}>
                <td><img src={result.picture.thumbnail} alt="thumbnail"></img></td>
                <td>{result.name.first} {result.name.last}</td>
                <td>{result.phone}</td>
                <td>{result.email}</td>
                <td>{result.dob.date.split("T")[0]}</td>
            </tr>
        ))
    );

}

export default TableRows;



