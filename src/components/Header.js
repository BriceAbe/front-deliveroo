import React from "react";
import logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-center">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
