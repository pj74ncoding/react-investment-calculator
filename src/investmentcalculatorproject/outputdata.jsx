import React, { useState, useEffect } from "react";

import "./outputdata.css";

import {
  gbpCalculateInvestmentResults,
  usdCalculateInvestmentResults,
  eurCalculateInvestmentResults,
} from "./calculations";
import CalculationLineGraph from "./calculationLineGraph";
import { CalculationBarChart } from "./calculationbarGraph";
import MonthlyTable from "./monthlyTable";
import YearlyTable from "./yearlyTable";

const OutputData = ({
  inputValues,
  currencyCountry,
  tableInput,
  calculatingMessage,
}) => {
  const [maxInterest, setMaxInterest] = useState(0);

  const [monthlyYearly, setMonthlyYearly] = useState(false);
  const [interestMonthlyOrYearly, setInterestMonthlyOrYearly] = useState(false);
  const [totalInterestMonthlyOrYearly, setTotalInterestMonthlyOrYearly] =
    useState(false);
  const [investmentMonthlyOrYearly, setInvestmentMonthlyOrYearly] =
    useState(false);
  const [totalMonthlyOrYearlyInvestment, setTotalMonthlyOrYearlyInvestment] =
    useState(false);

  let resultData;

  if (currencyCountry === "GBP") {
    resultData = gbpCalculateInvestmentResults(inputValues);
  } else if (currencyCountry === "USD") {
    resultData = usdCalculateInvestmentResults(inputValues);
  } else if (currencyCountry === "EUR") {
    resultData = eurCalculateInvestmentResults(inputValues);
  }

  useEffect(() => {
    const interestArray = resultData.map((r) => {
      return r.interest;
    });

    setMaxInterest(Math.max(...interestArray));
    console.log("ia", interestArray, "max", maxInterest);
    console.log("spread", ...interestArray);
  }, [resultData]);

  const yellow = {
    backgroundColor: "yellow",
  };

  function handleFigures() {
    setMonthlyYearly((current) => !current);
    setInterestMonthlyOrYearly((current) => !current);
    setInvestmentMonthlyOrYearly((current) => !current);
    setTotalInterestMonthlyOrYearly((current) => !current);
    setTotalMonthlyOrYearlyInvestment((current) => !current);
  }

  if (resultData.length <= 0) {
    //if statement needs to be at the bottom because of the return
    return (
      <>
        <br />
        <p style={{ color: "red", textAlign: "center", fontSize: "1.5rem" }}>
          Duration(years) must be above 0
        </p>
        ;
        <br />
      </>
    );
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCountry,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const totalInitialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <>
      <br />
      {calculatingMessage && (
        <div className="calculating-message">
          <p>Calculating Results.....</p>
        </div>
      )}
      {tableInput && (
        <table className="table-container">
          <thead>
            <tr className="table-heading-row">
              <th>Year</th>
              {investmentMonthlyOrYearly ? (
                <th>Investment(monthly)</th>
              ) : (
                <th>Investment(yearly)</th>
              )}
              {interestMonthlyOrYearly ? (
                <th>Interest(monthly)</th>
              ) : (
                <th>Interest(yearly)</th>
              )}
              <th>
                Total Interest{" "}
                {totalInterestMonthlyOrYearly ? "(monthly)" : "(yearly)"}
              </th>
              <th>
                Total Amount Investment{" "}
                {totalMonthlyOrYearlyInvestment ? "(monthly)" : "(yearly)"}
              </th>
            </tr>
          </thead>

          <tbody>
            {console.log("rd", resultData[0].interest, maxInterest)}
            {monthlyYearly ? (
              <MonthlyTable
                resultData={resultData}
                totalInitialInvestment={totalInitialInvestment}
                formatter={formatter}
                maxInterest={maxInterest}
                yellow={yellow}
              />
            ) : (
              <YearlyTable
                resultData={resultData}
                totalInitialInvestment={totalInitialInvestment}
                formatter={formatter}
                maxInterest={maxInterest}
                yellow={yellow}
              />
            )}
          </tbody>
        </table>
      )}
      <br />
      <div className="Month-year-button-container">
        <button onClick={handleFigures} className="Month-year-button">
          Monthly | Yearly
        </button>
      </div>
      <br />
      <div className="charts">
        <CalculationLineGraph
          graphData={resultData}
          currencyCountry={currencyCountry}
        />
        <CalculationBarChart
          graphData={resultData}
          currencyCountry={currencyCountry}
        />
      </div>
    </>
  );
};

export default OutputData;
