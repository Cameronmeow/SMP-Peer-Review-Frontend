/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { Chart } from 'chart.js';
import 'chartjs-plugin-datalabels';

const PieChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const labels = ["Pizza 🍕", "Taco 🌮", "Hot Dog 🌭", "Sushi 🍣"];
    const colorHex = ["#FB3640", "#EFCA08", "#43AA8B", "#253D5B"];

    new Chart(ctx, {
      type: "pie",
      data: {
        datasets: [
          {
            data: [30, 10, 40, 20],
            backgroundColor: colorHex,
          },
        ],
        labels: labels,
      },
      options: {
        responsive: true,
        legend: {
          position: "bottom",
        },
        plugins: {
          datalabels: {
            color: "#fff",
            anchor: "end",
            align: "start",
            offset: -10,
            borderWidth: 2,
            borderColor: "#fff",
            borderRadius: 25,
            backgroundColor: (context) => {
              return context.dataset.backgroundColor;
            },
            font: {
              weight: "bold",
              size: 10,
            },
            formatter: (value) => {
              return value + " %";
            },
          },
        },
      },
    });
  }, []);

  return (
      
        <div >
          <canvas id="myChart"></canvas>
        </div>
      
  );
};

export default PieChartComponent;
