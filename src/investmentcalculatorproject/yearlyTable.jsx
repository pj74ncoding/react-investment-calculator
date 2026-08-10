import React, { useMemo } from "react";

const YearlyTable = ({
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
    modifiedAcc.totalInterest += totalInterest;
    modifiedAcc.totalAmountInv += totalAmountInv;
    return modifiedAcc;
  }, totalsObj);

  return (
    <>
      {[...resultData].map((yeardata) => {
        const totalInterest =
          yeardata.valueEndOfYear -
          yeardata.annualInvestment * yeardata.year -
          totalInitialInvestment;
        const totalAmountInv = yeardata.valueEndOfYear - totalInterest;

        return (
          <tr className="mapped-table-rows" key={yeardata.year}>
            <td>{yeardata.year}</td>

            <td>{formatter.format(yeardata.valueEndOfYear)}</td>
            <td style={maxInterest === yeardata.interest ? yellow : null}>
              {formatter.format(yeardata.interest)}
            </td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInv)}</td>
          </tr>
        );
      })}

      <tr className="summary-mapped-table-rows" key={"summary-row"}>
        <td> </td>
        <td> </td>
        <th>Summary Section:</th>

        <td>
          Total yearly interest earned:{" "}
          <span style={yellow}>{formatter.format(totals.totalInterest)}</span>
        </td>
        <td>
          Total yearly amount invested:{" "}
          <span style={yellow}>{formatter.format(totals.totalAmountInv)}</span>
        </td>
      </tr>
    </>
  );
};

export default YearlyTable;
