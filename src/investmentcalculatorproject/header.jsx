import React from "react";
import "./header.css";
import headerLogo from "../assets/logo.jpg";
export const Header = ({ header, subtitle }) => {
  return (
    <>
      <div className="header-container">
        <header className="header-component">
          <img
            className="logo"
            src={headerLogo}
            alt="Investment Calculator Logo"
            width="200px"
          />
          <div className="h1-title">
            <h1>
              <b>{header}</b>
            </h1>
          </div>
        </header>
      </div>
      <p className="subtitle">
        <b>{subtitle}</b>
      </p>
    </>
  );
};
