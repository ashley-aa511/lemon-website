import Nav from "./nav";
import Logo from "../image/Logo.svg";

import React from "react";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="navigation">
          <Nav />
        </div>
      </div>
    </>
  );
}

export default Header;
