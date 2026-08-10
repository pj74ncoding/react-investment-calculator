import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import InvestmentApp from "./investmentcalculatorproject/InvestmentApp.jsx";

// import ChartApp from "./chartcomponents/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <br />
    <InvestmentApp />
    <br />
  </StrictMode>,
);
