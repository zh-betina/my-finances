import React from 'react';

import ChartChartjs from './ChartChartjs/ChartChartjs';

import './Income.css';

const income = () => {
    return (
        <section className="Income">
            <h2 className="Income-heading">Income</h2>
            <ChartChartjs/>
        </section>
    )
}

export default income;