import React from "react";

import TableRow from "./TableRow";

import "./Table.css";

const Table = (props) => {
    let data = props.data;
    return (
        <table className="Table">
            <tbody>
                <tr className="Table-column-title">
                    <td>Date</td>
                    <td>Payee</td>
                    <td>Category</td>
                    <td>Memo</td>
                    <td>Outflow</td>
                    <td>Inflow</td>
                </tr>
                {
                    data.map((item, index) => {
                        return <TableRow {...item} key={index} />;
                    })          
                }

            </tbody>
        </table>
    )
}

export default Table;