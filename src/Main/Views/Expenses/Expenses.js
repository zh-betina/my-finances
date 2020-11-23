import React, { useState } from 'react';

import Table from "./Table/Table";
import InputRow from "./InputRow/InputRow";
import { inputOptions } from "./data/inputOptions";
import { expensesData } from "./data/expensesData";

import './Expenses.css';

const Expenses = () => {

    expensesData.forEach(entry => {
        return entry.date = entry.date.slice(0, 10);
    });

    const [data, setData] = useState(expensesData);

    const addEntries = () => {
        const inputs = document.querySelectorAll(".Input");
        const newObjKeys = ["date", "payee", "category", "memo", "outflow", "inflow"];
        let inputsVal = [];
        let newObj = {};

        inputs.forEach(item => {
            inputsVal.push(item.value)
        });
        newObjKeys.forEach((key, i) => {
            newObj[key] = inputsVal[i];
        });
        if (newObj !== undefined) {
            data.push(newObj);
        }
        setData(receivedData => [...receivedData]);
    }

    return (
        <section className="Expenses">
            <h2 className="Expenses-heading">Expenses</h2>
            <div className="Expenses-input-box">

                {
                    inputOptions.map((items, index) => {
                        return <InputRow {...items} key={index} />
                    })

                }
            </div>
            <button onClick={() => { addEntries() }}>Add</button>
            <h3 className="Expenses-table-heading">List of expenses</h3>
            <Table data={data} />
        </section>
    )
}

export default Expenses;