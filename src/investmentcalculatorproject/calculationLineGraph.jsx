import React from "react";

import "./charts-sizes.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const CalculationLineGraph = ({ graphData, currencyCountry }) => {
  let filteredyear = graphData.map(({ year }) => year);
  let filteredvalueEndOfYear = graphData.map(
    (a) => +a.valueEndOfYear.toFixed(),
  );

  const dataFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCountry,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  let formattedValues = filteredvalueEndOfYear.map((a) =>
    dataFormatter.format(a),
  );

  const lineChartData = {
    labels: formattedValues,
    label: "Year",
    position: "left",

    datasets: [
      {
        label: "Investment Growth Per Year",
        data: filteredyear,
        borderColor: "rgb(75,192,192)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Example Of Yearly Investment Growth",
        color: "rgb(75,192,192)",
      },
    },
  };

  return (
    <div className="chart-sizes">
      <Line options={options} data={lineChartData} />
    </div>
  );
};

export default CalculationLineGraph;
