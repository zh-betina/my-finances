import React, { useState } from 'react';

import Table from "./Table/Table";
import InputRow from "./InputRow/InputRow";
import { inputOptions } from "./data/inputOptions";
import { expensesData } from "./data/expensesData";

import './Expenses.css';

const Expenses = () => {

    let newData;
    expensesData.forEach(entry => {
        return entry.date = entry.date.slice(0, 10);
    });

    const [data, setData] = useState(expensesData);

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
            <button onClick={(newData) => {
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
                    console.log(data);
                    data.push(newObj);
                    newData = data;
                    return setData(newData);
                } else {
                    /*Here some info for user he hasn't filled in the form*/
                    newData = data;
                    return setData(newData);
                }
            }}>Add</button>
            <h3 className="Expenses-table-heading">List of expenses</h3>
            <Table data={newData ? undefined : data}/>
        </section>
    )
}

export default Expenses;