import React from 'react';
import ChartD3 from "./ChartD3js/ChartD3";

import './Income.css';

const income = () => {

    return (
        <section className="Income">
            <h2 className="Income-heading">Income</h2>
            <ChartD3/>
        </section>
    )
}

export default income;