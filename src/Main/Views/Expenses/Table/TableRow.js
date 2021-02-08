import React from "react";

import "./TableRow.css";

const TableRow = props => {
    return(
        <tr className = "Table-row" >
            <td>{props.date}</td>
            <td>{props.payee}</td>
            <td>{props.category}</td>
            <td>{props.memo}</td>
            <td>{props.outflow}</td>
            <td>{props.inflow}</td>
        </tr >
    )
}

export default TableRow;