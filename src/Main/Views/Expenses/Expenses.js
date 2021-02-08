import React from 'react';

import Table from "./Table/Table";

import './Expenses.css';

const Expenses = () => {
    return (
        <section className="Expenses">
            <h2 className="Expenses-heading">Expenses</h2>
            <div className="Expenses-textfield">
                <textarea></textarea>
                <button>Add</button>
            </div>
            <h3 className="Expenses-table-heading">List of expenses</h3>
            <Table/>
        </section>
    )
}

export default Expenses;