import React from "react";

import "./TableRow.css";

const TableRow = data => {
    return(
        <tr className = "Table-row" >
            <td>{data.date}</td>
            <td>{data.payee}</td>
            <td>{data.category}</td>
            <td>{data.memo}</td>
            <td>{data.outflow}</td>
            <td>{data.inflow}</td>
        </tr >
    )
}

export default TableRow;