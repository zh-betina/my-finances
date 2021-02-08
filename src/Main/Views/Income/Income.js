import React from 'react';

import ChartChartjs from './ChartChartjs/ChartChartjs';
import ChartD3js from './ChartD3js/ChartD3js';

import './Income.css';

const income = () => {
    return (
        <section className="Income">
            <h2 className="Income-heading">Income</h2>
            <ChartChartjs/>
            <ChartD3js/>
        </section>
    )
}

export default income;