import React, { useEffect } from 'react';
import * as d3 from "d3";

import { chartData, toStructuredArray } from '../data/chartData';

import './ChartD3js.css';

const ChartD3js = () => {
    let structuredArray = []
    toStructuredArray(chartData, structuredArray);
    let series = d3.stack()
        .keys(structuredArray.columns.slice(1))
        (structuredArray)
        .map(d => (d.forEach(v => v.key = d.key), d));

    const colorRange = d3.scaleOrdinal()
        .domain(series.map(d => d.key))
        .range(["#277da1", "#4d908e", "#43aa8b", "#90be6d", "#f9c74f", "#f9844a", "#f3722c", "#f94144", "#99c1de"]);
    const height = 600;
    const margin = {
        "top": 40,
        "bottom": 40,
        "right": 30,
        "left": 60
    }
    const width = 665;

    let yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).ticks(null, "s"))

    let xAxis = g => g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeInner([-10]));

    let x = d3.scaleBand()
        .domain(structuredArray.map(d => d.name))
        .range([margin.left, width - margin.right])
        .padding(0.2);

    let y = d3.scaleLinear()
        .domain([d3.min(series, d => d3.min(d, d => d[1])), d3.max(series, d => d3.max(d, d => d[1]))])
        .range([0, height]);

    useEffect(() => {
        const svg = d3.select(".ChartD3js")
            .attr("viewBox", [0, 0, width, height + 100]);

        svg.append("g")
            .selectAll("g")
            .data(series)
            .join("g")
            .attr("fill", (d) => { return colorRange(d) })
            .selectAll("rect")
            .data(d => d)
            .join("rect")
            .attr("x", (d, i) => x(d.data.name))
            .attr("y", d => y(d[1]))
            .attr("width", x.bandwidth())
            .attr("height", d => y(d[0]) - y(d[1]))
            .append("title")
            .text(d => `Apres ${d.data.name} ans [${d.key}]: ${(d.data[d.key])} euros`);


        svg.append("g")
            .call(xAxis);
        svg.append("g")
            .call(yAxis);

    }
    )
    return (
        <div className="ChartD3js-wrapper">
            <p className="ChartD3js-title">Chart made with D3.js</p>
            <svg className="ChartD3js"></svg>
        </div>
    )
}

export default ChartD3js;
