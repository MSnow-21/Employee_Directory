import React from "react";
import "./style.css"
import TableRows from "../TableRows/TableRows";


function EmployeeTable(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col-md-2" data-column="image">Image</th>
                    <th scope="col-md-2" data-column="name">Name
                    <button type="submit" onClick={props.handleNameSubmit} className="btn btn-success namebutton">Name Sort</button></th>
                    <th scope="col-md-2" data-column="phone">Phone</th>
                    <th scope="col-md-2" data-column="email">EMAIL</th>
                    <th scope="col-md-2" data-column="dob">DOB</th>
                </tr>                
            </thead>
            <tbody>
                <TableRows
                 results = {props.results}
                />
            </tbody>
        </table>

    );
}

export default EmployeeTable;