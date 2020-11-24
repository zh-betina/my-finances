import React from "react";

import { expensesData } from "../data/expensesData.js";
import TableRow from "./TableRow";

import "./Table.css";

const Table = () => {

    const data = expensesData;
    data.forEach(entry => {
        return entry.date = entry.date.slice(0, 10);
    });

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