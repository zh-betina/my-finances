import React, { Component } from 'react';

import './Expenses.css';

class Expenses extends Component {
    render() {
        return (
            <section className="Expenses">
                <h2 className="Expenses-heading">Expenses</h2>
                <div className="Expenses-textfield">
                    <textarea></textarea>
                    <button>Add</button>
                </div>
                <h3 className="Expenses-table-heading">List of expenses</h3>
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
                        <tr className="Table-row">
                            <td>10/10/2020</td>
                            <td>Stonka</td>
                            <td>Jedzenie</td>
                            <td> </td>
                            <td>35.65</td>
                            <td> </td>
                        </tr>
                        <tr className="Table-row">
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        )
    }
}

export default Expenses;