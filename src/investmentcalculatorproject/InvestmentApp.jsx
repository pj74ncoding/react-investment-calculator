import { useCallback, useEffect, useState } from "react";
import { Header } from "./header.jsx";
import UserInput from "./userInput.jsx";
import OutputData from "./outputdata.jsx";
import {
  gbpCalculateInvestmentResults,
  usdCalculateInvestmentResults,
  eurCalculateInvestmentResults,
} from "./calculations.jsx";
import { generatepdf } from "./generatereport.js";
import { Line } from "react-chartjs-2";

function InvestmentApp() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 4000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });

  const [currencyCountry, setCurrencyCountry] = useState("GBP");
  const [tableInput, setTableInput] = useState(true);
  const [calculatingMessage, setCalculatingMessage] = useState(false);
  const [startTimeout, setStartTimeout] = useState(false);
  const [isActivated, setIsActivated] = useState(false);
  const [timeOutVar, setTimeOutVar] = useState(null);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prev) => ({
      ...prev,
      [inputIdentifier]: +newValue,
    }));
  }

  useEffect(() => {
    setStartTimeout(true);
    if (startTimeout) {
      if (isActivated) {
        clearTimeout(timeOutVar); //Clear the previous timeout if it exists.
        setTimeOutVar(null); //reset the timeOutVar to null
      }

      setIsActivated(true);
      setTableInput(false);

      const sTO = setTimeout(() => {
        setCalculatingMessage(true);

        setTimeout(() => {
          setIsActivated(false);
          setTableInput(true);
          setCalculatingMessage(false);
          setTimeOutVar(null);
        }, 2000);
      }, 1000);

      setTimeOutVar(sTO);
    }
  }, [userInput]);

  function handleGeneratePDF() {
    console.log("button");

    const resultData = gbpCalculateInvestmentResults(userInput);
    generatepdf({ ...userInput, results: resultData });
  }

  return (
    <>
      <Header
        header="Investment Calculator Project"
        subtitle="All Your Banking Needs In One Place"
      />
      <br />
      <UserInput
        userInput={userInput}
        setUserInput={setUserInput}
        handleChange={handleChange}
        setCurrencyCountry={setCurrencyCountry}
      />
      <OutputData
        inputValues={userInput}
        currencyCountry={currencyCountry}
        tableInput={tableInput}
        calculatingMessage={calculatingMessage}
      />

      <div
        style={{
          height: "auto",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button className="currency-button" onClick={handleGeneratePDF}>
          Download PDF report
        </button>
      </div>

      {/* <InvestmentCalculatorToDebug /> */}
    </>
  );
}

export default InvestmentApp;
