import React from "react";

import { Bar } from "react-chartjs-2";
import "./charts-sizes.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const CalculationBarChart = ({ graphData, currencyCountry }) => {
  let filteredYear = graphData.map(({ year }) => year);

  let filteredInterest = graphData.map((a) => +a.interest.toFixed());

  const dataFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCountry,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  let formattedValues = filteredInterest.map((a) => dataFormatter.format(a));

  let testss = 1000000;
  let test = Intl.NumberFormat("en-GB").format(testss);
  console.log(test);

  console.log("filteredInterest", filteredInterest);

  const barChartData = {
    labels: formattedValues,
    datasets: [
      {
        label: "Interest Gained",
        data: filteredYear,
        backgroundColor: [
          "rgba(255,99,132,0.2)",
          "rgba(54,162,235,0.2)",
          "rgba(255,206,86,0.2)",
          "rgba(75,192,192,0.2)",
          "rgba(153,102,255,0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
          "rgba(153,102,255,1)",
        ],
        borderWidth: 1,
        borderRadius: 5,
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
        text: "Example Of Yearly Interest Growth",
        color: "rgb(75,192,192)",
      },
    },
  };

  return (
    <div className="chart-sizes">
      <Bar options={options} data={barChartData} />
    </div>
  );
};
