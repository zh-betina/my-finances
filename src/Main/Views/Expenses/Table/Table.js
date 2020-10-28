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
                <TableRow date={data[0].date}
                    payee={data[0].payee}
                    category={data[0].category}
                    memo={data[0].memo}
                    outflow={data[0].outflow}
                    inflow={data[0].inflow} />
                <TableRow date={data[1].date}
                    payee={data[1].payee}
                    category={data[1].category}
                    memo={data[1].memo}
                    outflow={data[1].outflow}
                    inflow={data[1].inflow} />
                <TableRow date={data[2].date}
                    payee={data[2].payee}
                    category={data[2].category}
                    memo={data[2].memo}
                    outflow={data[2].outflow}
                    inflow={data[2].inflow} />
            </tbody>
        </table>
    )
}

export default Table;