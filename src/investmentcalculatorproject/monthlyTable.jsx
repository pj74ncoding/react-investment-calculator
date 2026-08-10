import React from "react";

const MonthlyTable = ({
  resultData,
  totalInitialInvestment,
  formatter,
  maxInterest,
  yellow,
}) => {
  const totalsObj = {
    totalInterest: 0,
    totalAmountInv: 0,
  };
  // sum up value
  const totals = [...resultData].reduce((acc, curr) => {
    const totalInterest =
      curr.valueEndOfYear -
      curr.annualInvestment * curr.year -
      totalInitialInvestment;
    const totalAmountInv = curr.valueEndOfYear - totalInterest;
    const modifiedAcc = { ...acc };
    modifiedAcc.totalInterest += totalInterest / 12;
    modifiedAcc.totalAmountInv += totalAmountInv / 12;
    return modifiedAcc;
  }, totalsObj);
  return (
    <>
      {resultData.map((yeardata) => {
        const totalInterest =
          yeardata.valueEndOfYear -
          yeardata.annualInvestment * yeardata.year -
          totalInitialInvestment;
        const totalAmountInv = yeardata.valueEndOfYear - totalInterest;

        const investmentInterest = yeardata.valueEndOfYear / 12;
        const monthlyInterest = yeardata.interest / 12;
        const totalInterestMonthly = totalInterest / 12;

        const totalAmountInvestedMonthly = totalAmountInv / 12;

        return (
          <tr className="mapped-table-rows" key={yeardata.year}>
            <td>{yeardata.year}</td>

            <td>{formatter.format(investmentInterest)}</td>
            <td style={maxInterest === yeardata.interest ? yellow : null}>
              {formatter.format(monthlyInterest)}
            </td>
            <td>{formatter.format(totalInterestMonthly)}</td>
            <td>{formatter.format(totalAmountInvestedMonthly)}</td>
          </tr>
        );
      })}

      <tr className="summary-mapped-table-rows" key={"summary-row"}>
        <td> </td>
        <td> </td>
        <th>Summary Section:</th>
        <td>
          Total monthly interest earned:{" "}
          <span style={yellow}>{formatter.format(totals.totalInterest)}</span>
        </td>
        <td>
          Total monthly amount invested:{" "}
          <span style={yellow}>{formatter.format(totals.totalAmountInv)}</span>
        </td>
      </tr>
    </>
  );
};

export default MonthlyTable;
