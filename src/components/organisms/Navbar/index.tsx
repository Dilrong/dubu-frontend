import React from "react";
import Brand from "../../atoms/Brand";
import Button from "../../atoms/Button";
import { NavProps } from "../../types/NavProps";

import "./index.css";

const Navbar: React.FC<NavProps> = ({ isConnected }) => (
  <nav className="navbar">
    <div className="navbar-end">
      <Brand />
    </div>
    <div className="navbar-end">
      <div className="navbar-menu">
        <a href="/">
          <span className="navbar-item">Dubupots</span>
        </a>
        <a href="/my-dubupots">
          <span className="navbar-item">My Pots</span>
        </a>
        <a href="https://dubu-finance.gitbook.io/">
          <span className="navbar-item">Docs</span>
        </a>
        {isConnected ? (
          <Button label="x06121...32" />
        ) : (
          <Button label="Connect Wallet" />
        )}
      </div>
    </div>
  </nav>
);

export default Navbar;
