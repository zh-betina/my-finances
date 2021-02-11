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

    useEffect(() => {
        const width = 850;
        const height = 450;
        const padding = 40;

        const xScale = d3.scaleBand()
            .domain(labels)
            .range([padding, width - padding])
            .padding([0.1]);
        const xAxis = d3.axisBottom(xScale);

        const yScale = d3.scaleLinear()
            .domain([d3.min(data), d3.max(data)])
            .range([height - padding, 0]);
        const yAxis = d3.axisLeft(yScale);

        //the principal svg
        const svg = d3.select("#ChartD3")
            .append("svg")
            .attr("height", height)
            .attr("width", width);

        //bars
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => xScale(labels[i]))
            .attr("y", (d) => yScale(d))
            .attr("height", (d, i) => (height - padding) - yScale(d))
            .attr("width", xScale.bandwidth())
            .attr("class", "bar")
            .append("title")
            .text(d => `PlueValue: ${d} euros`);

        // label for bottom axis
        svg.append("text")
            .attr("x", "50%")
            .attr("y", (d) => height - 2 + "px")
            .attr("class", "bottom-axis--txt")
            .text(`Nombre d'années`);

        //bottom axis
        svg.append("g")
            .attr("transform", "translate(0," + (height - padding) + ")")
            .call(xAxis);

        //vertical axis
        svg.append("g")
            .attr("transform", "translate(45,0)")
            .call(yAxis);

    })
    return (
        <div className="ChartD3" id="ChartD3">

        </div>
    )
}

export default ChartD3;