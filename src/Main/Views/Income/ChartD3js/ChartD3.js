import React, { useEffect } from 'react';
import * as d3 from "d3";

import chartData from "../data/chartData";

import "./ChartD3.css";

const WIDTH = 850;
const HEIGHT = 700;
const PADDING = 40;


const ChartD3 = () => {

    let data = Object.values(Object.entries(chartData)[0][1]);
    data = data.map(el => Math.round(el));
    let data2 = Object.values(Object.entries(chartData)[1][1]);
    data2 = data2.map(el => Math.round(el));

    let dataArr = [];

    data.forEach(el=>{
        dataArr.push({
            "1": el
        })
    });

    data2.forEach((el, i)=>{
        dataArr[i]["2"] = el
    })
    console.log(dataArr);

    let labels = []
    labels.length = 26;
    labels.fill(null);
    labels = labels.map((el, idx) => idx);

    const minVal = d3.min(dataArr, d => d3.min(Object.values(d)));
    console.log(minVal);
    const maxVal = d3.max(dataArr, d => d3.max(Object.values(d)));
    console.log(maxVal);



    useEffect(() => {
        const xScale = d3.scaleBand()
            .domain(labels)
            .range([PADDING, WIDTH - PADDING])
            .padding([0.1]);
        const xAxis = d3.axisBottom(xScale);

        const yScale = d3.scaleLinear()
            .domain([minVal, maxVal])
            .range([HEIGHT - PADDING, 0]);
        const yAxis = d3.axisLeft(yScale);

        //the principal svg
        const svg = d3.select("#ChartD3")
            .append("svg")
            .attr("height", HEIGHT)
            .attr("width", WIDTH);

        /*//bars
        svg.selectAll("rect")
            .data(dataArr)
            .enter()
            .append("rect")
            .attr("x", (d, i) => xScale(labels[i]))
            .attr("y", (d) => yScale(d))
            .attr("height", (d, i) => (HEIGHT - PADDING) - yScale(d))
            .attr("width", xScale.bandwidth())
            .attr("class", "bar")
            .append("title")
            .text(d => `PlueValue: ${d} euros`);*/

        //prepare g elements, one per year
        svg.selectAll("g")
            .data(dataArr)
            .enter()
            .append("g")
            .attr("x", (d, i) => xScale(labels[i]))
            .attr("y", (d) => yScale(d3.max(Object.values(d))))
            .attr("height", (d, i) => (HEIGHT - PADDING) - yScale(d3.max(Object.values(d))))
            .data(dataArr, d => d[1])
            .enter()
            .join("rect");

        // label for bottom axis
        svg.append("text")
            .attr("x", "50%")
            .attr("y", (d) => `${HEIGHT - 2}px`)
            .attr("class", "bottom-axis--txt")
            .text(`Nombre d'années`);

        //bottom axis
        svg.append("g")
            .attr("transform", `translate(0, ${HEIGHT-(PADDING*3)})`)
            .call(xAxis);

        //vertical axis
        svg.append("g")
            .attr("transform", `translate(${PADDING}, 9)`)
            .call(yAxis);

    })
    return (
        <div className="ChartD3" id="ChartD3">

        </div>
    )
}

export default ChartD3;