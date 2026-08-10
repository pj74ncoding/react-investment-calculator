import React, { useState } from "react";
import "./userinput.css";

const UserInput = ({
  userInput,
  setUserInput,
  handleChange,
  setCurrencyCountry,
}) => {
  function resetInputFields() {
    setUserInput({
      initialInvestment: 4000,
      annualInvestment: 1000,
      expectedReturn: 6,
      duration: 10,
    });
  }
  return (
    <section className="form-container">
      <form className="form-container">
        <div className="input-container">
          <label htmlFor="InitialInvestment">Initial Investment £&nbsp;</label>
          <input
            id="InitialInvestment"
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => handleChange("initialInvestment", e.target.value)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="annualinvestment">Annual Investment £ &nbsp;</label>
          <input
            id="annualinvestment"
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => handleChange("annualInvestment", e.target.value)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="expectedreturn">Expected Return % &nbsp;</label>
          <input
            id="expectedreturn"
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="duration">Duration (years) &nbsp;</label>
          <input
            id="duration"
            type="number"
            value={userInput.duration}
            onChange={(e) => handleChange("duration", e.target.value)}
          />
        </div>
        <button className="reset-button" onClick={resetInputFields}>
          Reset All Fields
        </button>
      </form>

      <button
        className="currency-button"
        onClick={() => setCurrencyCountry("EUR")}
      >
        € Euro
      </button>
      <button
        className="currency-button"
        onClick={() => setCurrencyCountry("USD")}
      >
        $ Dollar
      </button>
      <button
        className="currency-button"
        onClick={() => setCurrencyCountry("GBP")}
      >
        £ Pound
      </button>
    </section>
  );
};

export default UserInput;
