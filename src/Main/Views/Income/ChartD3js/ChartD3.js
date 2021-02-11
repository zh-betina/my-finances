import React, { useEffect } from 'react';
import * as d3 from "d3";

import chartData from "../data/chartData";

import "./ChartD3.css";



const ChartD3 = () => {

    let data = Object.values(Object.entries(chartData)[0][1]);
    data = data.map(el => { return Math.round(el) });
    let labels = []
    labels.length = 26;
    labels.fill(null);
    labels = labels.map((el, idx) => { return el = idx });

    console.log(data);
    console.log(labels);
    useEffect(() => {
        const width = 850;
        const height = 450;

        const svg = d3.select("#ChartD3") //the principal svg
            .append("svg")
            .attr("height", height)
            .attr("width", width)
            .style("background-color", "pink");

        //bars
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 31 + "px")
            .attr("y", (d) => (height - 20) - (d * 0.0021) + "px")
            .attr("height", (d, i) => d * 0.0021 + "px")
            .attr("width", 30 + "px")
            .attr("class", "bar")
            .append("title")
            .text(d => d + " euros")

        // labels & tooltips
        svg.selectAll("text")
            .data(labels)
            .enter()
            .append("text")
            .attr("x", (d, i) => i * 31.5 + "px")
            .attr("y", (d) => height - 2 + "px")
            .style("font-size", "1.4rem")
            .style("font-weight", "600")
            .style("fill", "#5b5b5b")
            .text(d => d);
    })
    return (
        <div className="ChartD3" id="ChartD3">

        </div>
    )
}

export default ChartD3;