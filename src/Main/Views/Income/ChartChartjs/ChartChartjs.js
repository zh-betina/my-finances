import React, { useEffect } from "react";
import Chart from 'chart.js';

import chartData from '../data/chartData';

import './ChartChartjs.css';

const ChartChartjs = () => {
    const data = {
        labels: Object.keys(chartData.Loyer),
        datasets: [
            {
                label: "Apport",
                backgroundColor: "#da9ff9",
                stack: 'Stack 0',
                data: [0, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]
            },
            {
                label: "PlueValue",
                backgroundColor: "#98acf8",
                stack: 'Stack 0',
                data: Object.values(chartData.PlueValue)
            },
            {
                label: "Loyer",
                backgroundColor: "#1f6f8b",
                stack: 'Stack 0',
                data: Object.values(chartData.Loyer)
            },
            {
                label: "Frais achat",
                backgroundColor: "#794c74",
                stack: 'Stack 0',
                data: Object.values(chartData.FraisAchat)
            },
            {
                label: "Taxe",
                backgroundColor: "#221f3b",
                stack: 'Stack 0',
                data: Object.values(chartData.Taxe)
            },
            {
                label: "Interet Epargne",
                backgroundColor: "#e0dede",
                stack: 'Stack 0',
                data: Object.values(chartData.Interest_Epargne)
            }],
    }
    useEffect(() => {
        const ctx = document.getElementById("chart1");
        new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                title: {
                    display: true,
                    text: 'Chart made with Chart.js'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    xAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Annes'
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Capital'
                        }
                    }]
                }
            }
        })
    });
    return (
        <div class="chartChartjs-wrapper">
            <canvas class="chartChartjs" id="chart1" width="800" height="500">
            </canvas>
        </div>
    )
}

export default ChartChartjs;