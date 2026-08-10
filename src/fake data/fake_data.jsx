export const lineChartData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],

  datasets: [
    {
      label: "Steps week 1",
      data: [3000, 2000, 2200, 1300, 3500, 2800, 1030],
      borderColor: "rgb(75,192,192)",
    },

    {
      label: "Steps week 2",
      data: [2000, 1000, 4000, 1909, 3500, 2800, 2000],
      borderColor: "green",
      padding: 10,
    },
  ],
};

export const barChartData = {
  labels: ["Rent", "Groceries", "Electric", "Gas", "Fuel"],
  datasets: [
    {
      label: "Expenses",
      data: [430, 600, 40, 60, 50],
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

export const pieChartData = {
  labels: ["Facebook", "linkedIn", "Youtube", "Instagram", "Twitter"],
  datasets: [
    {
      label: "Time Spent",
      data: [120, 45, 23, 67, 60],
      backgroundColor: [
        "rgba(255,99,132,0.9",
        "rgba(54,162,235,0.9)",
        "rgba(255,206,86,0.9)",
        "rgba(75,192,192,0.9)",
        "rgba(153,102,255,0.9)",
      ],
      hoverOffset: 4,
    },
  ],
};
