import { PROPERTY_TYPES } from "@babel/types";
import React from "react";


function EmployeeTable(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col-md-2">Image</th>
                    <th scope="col-md-2">Name</th>
                    <th scope="col-md-2">Phone</th>
                    <th scope="col-md-2">EMAIL</th>
                    <th scope="col-md-2">DOB</th>
                </tr>                
            </thead>
            <tbody>
                {props.result.map(results => (
                    <tr key={results.id}>
                        <td>{results.image}</td>
                        <td>{results.name}</td>
                        <td>{results.phone}</td>
                        <td>{results.email}</td>
                        <td>{results.dob}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
}

export default EmployeeTable;